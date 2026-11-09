import { useLayoutEffect, useRef } from "react";
import type { Location } from "react-router-dom";

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollBehavior(smooth: boolean): ScrollBehavior {
  return smooth && !prefersReducedMotion() ? "smooth" : "instant";
}

/** Rola até o topo; com movimento suave, a menos que o sistema peça o contrário. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: scrollBehavior(true) });
}

/* Blocos que "entram em foco" ao chegar na tela. O quadro do projeto
   (.case__scene) fica de fora: é o destino do zoom W→T e precisa estar
   visível desde o primeiro quadro. */
const REVEAL = [
  ".reel__head",
  ".feature",
  ".clips > li",
  ".archive h3",
  ".log__entry",
  ".edu",
  ".stack__row",
  ".end__band",
  ".end__title",
  ".end__lede",
  ".end__list > li",
  ".colophon",
  ".case__cols > section",
  ".case__stack",
  ".case__links",
  ".case__private",
  ".case__gallery figure",
  ".case__next",
].join(",");

const STAGGER_MS = 70;
const STAGGER_MAX = 4;

/**
 * A cada navegação:
 * 1. Posiciona a página: âncora ou topo. Na mesma página a rolagem é suave
 *    (clique no header); vindo de outra tela, é um corte seco.
 * 2. Liga a revelação por rolagem. O que já está na tela aparece de imediato,
 *    antes do primeiro paint; o resto entra em foco conforme você desce.
 */
export function useSceneScroll(location: Location) {
  const prevPath = useRef<string | null>(null);

  useLayoutEffect(() => {
    const { pathname, hash } = location;
    const firstLoad = prevPath.current === null;
    const samePage = prevPath.current === pathname;
    prevPath.current = pathname;

    // Página nova: o foco vai para o título, para teclado e leitor de tela
    // saberem onde chegaram. Na carga inicial e na mesma página, não mexe.
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (!firstLoad) {
      // Âncora: foca o título da seção. Página nova: foca o h1.
      const heading = target
        ? target.querySelector<HTMLElement>("h1, h2")
        : samePage
          ? null
          : document.querySelector<HTMLElement>("main h1");
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }

    if (target) target.scrollIntoView({ behavior: scrollBehavior(samePage), block: "start" });
    else window.scrollTo({ top: 0, behavior: scrollBehavior(samePage) });

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter(
      (el) => !el.classList.contains("is-in"),
    );

    // Na mesma página o destino só chega depois da rolagem suave; vindo de
    // outra tela, a página já está na posição final.
    const viewTop = samePage ? window.scrollY : target ? target.getBoundingClientRect().top + window.scrollY : 0;
    for (const el of items) {
      const top = el.getBoundingClientRect().top + window.scrollY;
      if (!samePage && top < viewTop + window.innerHeight) el.classList.add("is-in");
    }
    root.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        const arriving = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        arriving.forEach((e, i) => {
          const el = e.target as HTMLElement;
          el.style.setProperty("--reveal-delay", `${Math.min(i, STAGGER_MAX) * STAGGER_MS}ms`);
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    items.filter((el) => !el.classList.contains("is-in")).forEach((el) => io.observe(el));
    return () => io.disconnect();
    // A chave muda a cada navegação, inclusive ao clicar de novo na mesma seção.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);
}
