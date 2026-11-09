import { Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { Diagram } from "./Diagram";

/** Miniatura do clipe na lista. */
export function Thumb({ project }: { project: Project }) {
  const m = project.media;
  return (
    <div
      className="clip__thumb brk brk--osd is-on"
      aria-hidden="true"
      style={{ viewTransitionName: `clip-${project.slug}` }}
    >
      {m.type === "diagram" ? (
        <Diagram data={m.diagram} label="" compact />
      ) : (
        <img src={m.src} alt="" loading="lazy" decoding="async" />
      )}
    </div>
  );
}

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
  /** Traça o caminho principal do diagrama ao abrir. */
  trace?: boolean;
  /** Dentro de um link: a imagem é decorativa, o link já tem nome. */
  decorative?: boolean;
}

export function Scene({ project, eager, shared, trace, decorative }: SceneProps) {
  const m = project.media;
  return (
    <figure
      className="scene"
      aria-hidden={decorative || undefined}
      style={shared ? { viewTransitionName: `clip-${project.slug}` } : undefined}
    >
      {/* Leituras do visor: repetem os dados da página, então ficam fora do leitor de tela. */}
      <span className="scene__osd scene__osd--tl osd" aria-hidden="true">
        {project.kind}
      </span>
      <span className="scene__osd scene__osd--tr osd" aria-hidden="true">
        <span className="seg">{project.year}</span>
      </span>
      <span className="scene__osd scene__osd--bl osd" aria-hidden="true">
        {m.type === "diagram" ? "Arquitetura" : "Captura"}
      </span>
      <span className="scene__osd scene__osd--br" aria-hidden="true">
        <StatusTag project={project} />
      </span>
      {m.type === "diagram" ? (
        <div
          className="scene__media"
          tabIndex={trace ? 0 : undefined}
          role={trace ? "region" : undefined}
          aria-label={trace ? `Diagrama de arquitetura de ${project.title}` : undefined}
        >
          <Diagram data={m.diagram} label={m.alt} trace={trace} />
        </div>
      ) : (
        <div className={m.frame === "phone" ? "scene__media scene__media--phone" : "scene__media scene__media--shot"}>
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
