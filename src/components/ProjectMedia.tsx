import { Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { Diagram } from "./Diagram";

export function StatusTag({ project, id }: { project: Project; id?: string }) {
  if (project.status === "em evolução")
    return (
      <span className="tag tag--evo" id={id}>
        <i className="zebra" aria-hidden="true" />
        Em evolução
      </span>
    );
  if (project.visibility === "privado")
    return (
      <span className="tag tag--lock" id={id}>
        <Lock aria-hidden="true" />
        Privado
      </span>
    );
  return (
    <span className="tag" id={id}>
      Código aberto
    </span>
  );
}

/** Quadro grande com leituras do OSD nos cantos. */
interface SceneProps {
  project: Project;
  eager?: boolean;
  /** Participa do zoom compartilhado entre a lista e a página do projeto. */
  shared?: boolean;
  /** Traça o caminho principal do diagrama ao montar. */
  trace?: boolean;
  /** Repete o que já está escrito ao lado: fica fora do leitor de tela. */
  decorative?: boolean;
  /** Captura clicável: abre o zoom a partir deste quadro. */
  onZoom?: (trigger: HTMLElement) => void;
}

export function Scene({ project, eager, shared, trace, decorative, onZoom }: SceneProps) {
  const m = project.media;
  const zoomable = m.type === "image" && Boolean(onZoom);
  const frame = m.type === "image" && m.frame === "phone" ? "scene__media scene__media--phone" : "scene__media scene__media--shot";

  return (
    <figure
      className="scene"
      aria-hidden={(decorative && !zoomable) || undefined}
      style={shared ? { viewTransitionName: `clip-${project.slug}` } : undefined}
    >
      {/* Leituras do visor: repetem os dados da página, então ficam fora do leitor de tela. */}
      <span className="scene__osd scene__osd--tl osd" aria-hidden="true">
        {project.kind}
      </span>
      <span className="scene__osd scene__osd--tr osd" aria-hidden="true">
        <span className="seg">{project.year}</span>
      </span>
      <span className={zoomable ? "scene__osd scene__osd--bl scene__osd--zoom osd" : "scene__osd scene__osd--bl osd"} aria-hidden="true">
        {m.type === "diagram" ? (
          "Arquitetura"
        ) : zoomable ? (
          <>
            <b>+</b> Ampliar
          </>
        ) : (
          "Captura"
        )}
      </span>
      <span className="scene__osd scene__osd--br" aria-hidden="true">
        <StatusTag project={project} />
      </span>
      {m.type === "diagram" ? (
        <div
          className="scene__media"
          tabIndex={trace && !decorative ? 0 : undefined}
          role={trace && !decorative ? "region" : undefined}
          aria-label={trace && !decorative ? `Diagrama de arquitetura de ${project.title}` : undefined}
        >
          <Diagram data={m.diagram} label={m.alt} trace={trace} />
        </div>
      ) : zoomable ? (
        <button
          type="button"
          className={frame}
          onClick={(e) => onZoom?.(e.currentTarget)}
          aria-label={`Ampliar captura: ${m.alt}`}
        >
          <img src={m.src} alt="" width={m.width} height={m.height} loading={eager ? "eager" : "lazy"} decoding="async" />
        </button>
      ) : (
        <div className={frame}>
          <img
            src={m.src}
            alt={m.alt}
            width={m.width}
            height={m.height}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      )}
    </figure>
  );
}
