import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { FocusEvent, MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { prefersReducedMotion } from "@/lib/scroll";
import { subscribeScroll } from "@/lib/scrollStore";
import { Scene, StatusTag } from "./ProjectMedia";
import { FlowSignature } from "./FlowSignature";
import { CaptureZoom, type CaptureZoomHandle } from "./CaptureZoom";

const pad = (n: number) => String(n).padStart(2, "0");
/** Tempo sem rolagem para o clipe deslizar até a janela de foco. */
const SETTLE_MS = 160;

interface Clip {
  project: Project;
  code: string;
  archived: boolean;
}

function ClipStatus({ clip, id }: { clip: Clip; id: string }) {
  if (!clip.archived) return <StatusTag project={clip.project} id={id} />;
  return (
    <span className="tag" id={id}>
      <span className="seg">{clip.project.year}</span> Arquivo
    </span>
  );
}

/**
 * Ilha de edição: a lista de clipes passa por uma janela de foco parada no
 * meio da tela, e o monitor ao lado mostra o clipe que está nela. Abaixo de
 * 900 px não há monitor: a mesma janela vira o foco automático dos cartões.
 */
export function EditSuite({ projects, archive }: { projects: Project[]; archive: Project[] }) {
  const clips = useMemo<Clip[]>(
    () => [
      ...projects.map((project, i) => ({ project, code: `C${pad(i + 1)}`, archived: false })),
      ...archive.map((project, i) => ({ project, code: `A${pad(i + 1)}`, archived: true })),
    ],
    [projects, archive],
  );

  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  const list = useRef<HTMLDivElement>(null);
  const playhead = useRef<HTMLDivElement>(null);
  const tail = useRef<HTMLDivElement>(null);
  const monitor = useRef<HTMLDivElement>(null);
  const zoom = useRef<CaptureZoomHandle>(null);

  const select = useCallback((i: number) => {
    activeRef.current = i;
    setActive(i);
  }, []);

  /** Rola até o clipe ficar enquadrado na janela. */
  const bring = useCallback((i: number) => {
    items.current[i]?.scrollIntoView({ block: "center", behavior: prefersReducedMotion() ? "instant" : "smooth" });
  }, []);

  /**
   * A janela assume a altura do clipe ativo. A folga depois da lista garante
   * que, com o último clipe na janela, o fim da seção não empurre o monitor
   * para fora da tela.
   */
  const fit = useCallback(() => {
    const ph = playhead.current;
    const current = items.current[activeRef.current];
    if (ph && current) ph.style.setProperty("--ph", `${current.offsetHeight}px`);

    const mon = monitor.current;
    const last = items.current[items.current.length - 1];
    if (!tail.current) return;
    if (!ph || !mon || !last || !mon.offsetParent) {
      tail.current.style.height = "0px";
      return;
    }
    const center = parseFloat(getComputedStyle(ph).top) + ph.offsetHeight / 2;
    const monitorBottom = parseFloat(getComputedStyle(mon).top) + mon.offsetHeight;
    const lastBottom = center + last.offsetHeight / 2;
    tail.current.style.height = `${Math.max(0, Math.ceil(monitorBottom - lastBottom) + 8)}px`;
  }, []);

  useLayoutEffect(() => {
    fit();
    // As cantoneiras "travam" no clipe novo.
    const ph = playhead.current;
    if (!ph) return;
    ph.classList.remove("is-lock");
    void ph.offsetWidth;
    ph.classList.add("is-lock");
  }, [active, fit]);

  useEffect(() => {
    let settleTimer = 0;

    // O clipe ativo é o que contém o centro da janela. Sobre o título
    // "Arquivo" nenhum contém: fica o anterior.
    const pick = () => {
      const ph = playhead.current;
      if (!ph || !ph.offsetParent) return;
      const box = ph.getBoundingClientRect();
      const y = box.top + box.height / 2;
      const i = items.current.findIndex((li) => {
        if (!li) return false;
        const b = li.getBoundingClientRect();
        return y >= b.top && y < b.bottom;
      });
      if (i >= 0 && i !== activeRef.current) select(i);
    };

    // Quando a rolagem para, o clipe sob a janela desliza até ficar enquadrado.
    // Só enquanto a janela está presa no meio; no começo e no fim da lista ela
    // já acompanha o primeiro e o último clipe.
    const settle = () => {
      const ph = playhead.current;
      const li = items.current[activeRef.current];
      if (!ph || !li || !ph.offsetParent) return;
      const a = ph.getBoundingClientRect();
      const stuck = Math.abs(a.top - parseFloat(getComputedStyle(ph).top)) < 2;
      const offset = li.getBoundingClientRect().top - a.top;
      if (stuck && Math.abs(offset) > 1) {
        window.scrollBy({ top: offset, behavior: prefersReducedMotion() ? "instant" : "smooth" });
      }
    };

    // O store também avisa em resize e em refreshScroll(); enquadrar só
    // quando a página de fato rolou, para nada rolar sozinho.
    let lastY = window.scrollY;
    const unsubscribe = subscribeScroll(() => {
      pick();
      const y = window.scrollY;
      if (y === lastY) return;
      lastY = y;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, SETTLE_MS);
    });

    const resize = new ResizeObserver(fit);
    if (list.current) resize.observe(list.current);
    if (monitor.current) resize.observe(monitor.current);
    window.addEventListener("resize", fit);

    return () => {
      unsubscribe();
      window.clearTimeout(settleTimer);
      resize.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [fit, select]);

  // Clique num clipe fora da janela: traz até ela. No clipe em foco, ou pelo
  // teclado (Enter tem detail 0), abre o projeto. Com Ctrl/Cmd/Shift/Alt ou
  // outro botão, o link segue o comportamento normal (nova aba, janela…).
  const onRowClick = (i: number) => (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (e.detail === 0) {
      // O monitor precisa mostrar este clipe antes da navegação, senão o
      // zoom W→T parte do quadro do clipe anterior.
      if (i !== activeRef.current) flushSync(() => select(i));
      return;
    }
    if (i !== activeRef.current) {
      e.preventDefault();
      bring(i);
    }
  };
  const onRowFocus = (i: number) => (e: FocusEvent<HTMLElement>) => {
    if (e.currentTarget.matches(":focus-visible")) bring(i);
  };

  const openZoom = (p: Project, code: string, trigger: HTMLElement) => {
    if (p.media.type !== "image") return;
    const { src, alt, width, height } = p.media;
    zoom.current?.open({ src, alt, width, height, title: p.title, code }, trigger);
  };

  const current = clips[active];
  const p = current.project;

  const row = (clip: Clip, i: number) => {
    const { project: c } = clip;
    const on = i === active;
    // Clipes atuais são h3 da seção; os do arquivo ficam sob o h3 "Arquivo".
    const Heading = clip.archived ? "h4" : "h3";
    return (
      <li
        key={c.slug}
        ref={(el) => {
          items.current[i] = el;
        }}
      >
        <Link
          to={`/projetos/${c.slug}`}
          className={on ? "suite__row brk is-active" : "suite__row brk"}
          viewTransition
          aria-labelledby={`t-${c.slug}`}
          aria-describedby={`s-${c.slug} st-${c.slug}`}
          aria-current={on ? "true" : undefined}
          onClick={onRowClick(i)}
          onFocus={onRowFocus(i)}
        >
          <span className="suite__no" aria-hidden="true">
            <span className="seg">{clip.code}</span>
            <span className="seg suite__year">{c.year}</span>
          </span>
          <div className="suite__body">
            <Heading id={`t-${c.slug}`} className="suite__title">
              {c.title}
            </Heading>
            <p id={`s-${c.slug}`} className="suite__summary">
              {c.summary}
            </p>
            <div className="suite__flow">
              <FlowSignature project={c} tracing={on} />
            </div>
            <div className="suite__meta">
              <span className="tag" aria-hidden="true">
                {c.kind}
              </span>
              <ClipStatus clip={clip} id={`st-${c.slug}`} />
            </div>
          </div>
        </Link>
        {c.media.type === "image" && (
          <button
            type="button"
            className="suite__shot"
            onClick={(e) => openZoom(c, clip.code, e.currentTarget)}
            aria-label={`Ampliar captura: ${c.media.alt}`}
          >
            <img src={c.media.src} alt="" width={c.media.width} height={c.media.height} loading="lazy" decoding="async" />
            <span className="scene__osd scene__osd--zoom osd" aria-hidden="true">
              <b>+</b> Ampliar
            </span>
          </button>
        )}
      </li>
    );
  };

  const main = clips.filter((c) => !c.archived);
  const archived = clips.filter((c) => c.archived);
  const ticks = (Tag: "button" | "span") =>
    clips.map((clip, i) => {
      const className = [
        "tick",
        clip.archived ? "tick--arc" : "",
        i === active ? "is-on" : i < active ? "is-past" : "",
      ].join(" ");
      return Tag === "button" ? (
        <button key={clip.project.slug} type="button" tabIndex={-1} className={className} onClick={() => bring(i)} />
      ) : (
        <span key={clip.project.slug} className={className} />
      );
    });

  return (
    <div className="suite">
      <div className="suite__log">
        {/* Abaixo de 900 px, o monitor vira esta faixa: só o clipe em foco e a trilha. */}
        <div className="suite__strip" aria-hidden="true">
          <span className="monitor__play" />
          <span className="seg suite__strip-no">{current.code}</span>
          <span className="suite__strip-name">{p.title}</span>
          <span className="ticks ticks--mini">{ticks("span")}</span>
        </div>

        {/* A janela só anda dentro deste quadro: do primeiro ao último clipe. */}
        <div className="suite__frame">
          <div ref={playhead} className="suite__playhead" aria-hidden="true">
            <span className="suite__af">AF</span>
          </div>

          <div ref={list} className="suite__list">
          <ol className="suite__clips">{main.map((c) => row(c, clips.indexOf(c)))}</ol>
          {archived.length > 0 && (
            <>
              <h3 className="suite__group">Arquivo</h3>
              <ol className="suite__clips">{archived.map((c) => row(c, clips.indexOf(c)))}</ol>
            </>
          )}
          </div>
        </div>

        <div ref={tail} className="suite__tail" aria-hidden="true" />
      </div>

      {/* O monitor repete o clipe em foco; o conteúdo para leitor de tela é a lista. */}
      <div ref={monitor} className="monitor">
        <div key={p.slug} className="monitor__cut">
          <Scene project={p} shared trace decorative onZoom={(el) => openZoom(p, current.code, el)} />
        </div>
        <div className="monitor__rail" aria-hidden="true">
          <span className="monitor__play" />
          <span className="seg monitor__no">
            <b>{current.code}</b> / {pad(clips.length)}
          </span>
          <span className="ticks">{ticks("button")}</span>
        </div>
        <div key={`info-${p.slug}`} className="monitor__info" aria-hidden="true">
          <p className="monitor__title">{p.title}</p>
          <p className="monitor__summary">{p.summary}</p>
          <FlowSignature project={p} tracing />
          <div className="monitor__meta">
            <span className="tag">
              <span className="seg">{current.code}</span> {p.kind}
            </span>
            <ClipStatus clip={current} id={`mst-${p.slug}`} />
            <Link to={`/projetos/${p.slug}`} className="monitor__cta brk brk--osd" viewTransition tabIndex={-1}>
              {p.media.type === "diagram" ? "Ver arquitetura" : "Ver projeto"}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <CaptureZoom ref={zoom} />
    </div>
  );
}
