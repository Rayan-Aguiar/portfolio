import { NewTab } from "@/components/NewTab";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ArrowUp, BriefcaseBusiness, FileDown, FolderGit2, MessageCircle } from "lucide-react";
import { reels, site } from "@/data/site";
import { allProjects } from "@/data/projects";
import { scrollToTop, useSceneScroll } from "@/lib/scroll";
import { refreshScroll, useScrollEffect, useScrollSelector } from "@/lib/scrollStore";

/** 1 segundo de fita a cada 10 px rolados. */
const PX_PER_SECOND = 10;

function timecode(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

/** Qual seção da home está no centro do visor. */
function useActiveReel(pathname: string) {
  const [active, setActive] = useState<string>("inicio");
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reel]"));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);
  return active;
}

/** Aparece depois de 80% da página; só re-renderiza ao cruzar esse ponto. */
function BackToTop() {
  const show = useScrollSelector((s) => s.progress >= 0.8);
  if (!show) return null;
  const backToTop = () => {
    scrollToTop();
    document.getElementById("conteudo")?.focus({ preventScroll: true });
  };
  return (
    <button type="button" className="vf-top-btn brk brk--osd is-on" onClick={backToTop} aria-label="Voltar ao topo">
      <ArrowUp aria-hidden="true" />
    </button>
  );
}

export function Viewfinder() {
  const location = useLocation();
  const { pathname } = location;
  const active = useActiveReel(pathname);
  useSceneScroll(location);
  useEffect(refreshScroll, [location.key]);

  const slug = pathname.startsWith("/projetos/") ? pathname.split("/")[2] : undefined;
  const clipIndex = slug ? allProjects.findIndex((p) => p.slug === slug) : -1;
  const clip = clipIndex >= 0 ? allProjects[clipIndex] : undefined;
  const isHome = pathname === "/";

  const base = clip ? (clipIndex + 1) * 600 : 0;

  // Contador e zoom acompanham a rolagem escrevendo direto no DOM:
  // o React (e a página inteira) não re-renderiza a cada quadro.
  const counterRef = useRef<HTMLSpanElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  useScrollEffect(
    ({ y, progress }) => {
      // W = visão geral, T = detalhe. A home vai de W até o meio; o projeto fica em T.
      const zoom = clip ? 0.94 : isHome ? 0.04 + progress * 0.56 : 0;
      zoomRef.current?.style.setProperty("--z", zoom.toFixed(3));
      if (counterRef.current) counterRef.current.textContent = timecode(base + y / PX_PER_SECOND);
    },
    [pathname],
  );
  const reelIndex = reels.findIndex((r) => r.id === active);
  const reelLabel = clip
    ? { no: `C${String(clipIndex + 1).padStart(2, "0")}`, name: clip.title }
    : isHome
      ? { no: `R${String(reelIndex + 1).padStart(2, "0")}`, name: reels[reelIndex]?.label ?? "" }
      : { no: "--", name: "Sem sinal" };

  const navCurrent = (id: string) => isHome && active === id;

  return (
    <>
      <a className="skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className="vf-bar vf-top">
        <Link to="/" className="vf-brand brk brk--osd" aria-label="Rayan Aguiar, início">
          {site.name}
        </Link>
        <nav className="vf-nav" aria-label="Seções">
          {reels.slice(1).map((r) => (
            <Link
              key={r.id}
              to={`/#${r.id}`}
              className="brk brk--osd"
              aria-current={navCurrent(r.id) ? "true" : undefined}
            >
              {r.label}
            </Link>
          ))}
        </nav>
        <div className="vf-rec" aria-hidden="true">
          <span className="vf-rec__dot" />
          <span className="vf-rec__label">Rec</span>
          <span ref={counterRef} className="seg vf-counter">
            {timecode(base)}
          </span>
        </div>
      </header>

      <div className="vf-safe" aria-hidden="true" />
      <div key={pathname} className="vf-cut" aria-hidden="true" />

      <main id="conteudo" tabIndex={-1}>
        <Suspense fallback={<div className="wrap" style={{ minHeight: "100svh" }} />}>
          <Outlet />
        </Suspense>
      </main>

      <BackToTop />

      <footer className="vf-bar vf-bottom">
        <div className="vf-reel" aria-hidden="true">
          <span className="seg">{reelLabel.no}</span>
          <b>{reelLabel.name}</b>
        </div>
        <div ref={zoomRef} className="zoom" aria-hidden="true">
          <span className="zoom__end">W</span>
          <span className="zoom__track">
            <span className="zoom__fill" />
            <span className="zoom__cursor" />
          </span>
          <span className="zoom__end">T</span>
        </div>
        <a className="vf-status brk" href={site.contacts.whatsapp} target="_blank" rel="noreferrer">
          {site.status}
          <NewTab />
        </a>
        <nav className="vf-mobile-nav" aria-label="Atalhos">
          <Link to="/#projetos" className="brk brk--osd" aria-current={navCurrent("projetos") ? "true" : undefined}>
            <FolderGit2 aria-hidden="true" />
            Projetos
          </Link>
          <Link
            to="/#experiencia"
            className="brk brk--osd"
            aria-current={navCurrent("experiencia") ? "true" : undefined}
          >
            <BriefcaseBusiness aria-hidden="true" />
            Carreira
          </Link>
          <a href={site.cv} className="brk brk--osd" download>
            <FileDown aria-hidden="true" />
            Currículo
          </a>
          <a href={site.contacts.whatsapp} className="brk is-rec" target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            Contato
            <NewTab />
          </a>
        </nav>
      </footer>
    </>
  );
}
