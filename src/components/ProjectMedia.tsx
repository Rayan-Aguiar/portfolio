import { Lock } from "lucide-react";
import type { Project } from "@/data/projects";
import { Diagram } from "./Diagram";

/** Miniatura do clipe na lista. */
export function Thumb({ project }: { project: Project }) {
  const m = project.media;
  return (
    <div className="clip__thumb brk brk--osd is-on" aria-hidden="true">
      {m.type === "diagram" ? (
        <Diagram data={m.diagram} label="" compact />
      ) : (
        <img src={m.src} alt="" loading="lazy" decoding="async" />
      )}
    </div>
  );
}

export function StatusTag({ project }: { project: Project }) {
  if (project.status === "em evolução")
    return (
      <span className="tag tag--evo">
        <i className="zebra" aria-hidden="true" />
        Em evolução
      </span>
    );
  if (project.visibility === "privado")
    return (
      <span className="tag tag--lock">
        <Lock aria-hidden="true" />
        Privado
      </span>
    );
  return <span className="tag">Código aberto</span>;
}

/** Quadro grande com leituras do OSD nos cantos. */
export function Scene({ project, eager }: { project: Project; eager?: boolean }) {
  const m = project.media;
  return (
    <figure className="scene">
      <span className="scene__osd scene__osd--tl osd">{project.kind}</span>
      <span className="scene__osd scene__osd--tr osd">
        <span className="seg">{project.year}</span>
      </span>
      <span className="scene__osd scene__osd--bl osd">
        {m.type === "diagram" ? "Arquitetura" : "Captura"}
      </span>
      <span className="scene__osd scene__osd--br">
        <StatusTag project={project} />
      </span>
      {m.type === "diagram" ? (
        <div className="scene__media">
          <Diagram data={m.diagram} label={m.alt} />
        </div>
      ) : (
        <div className={m.frame === "phone" ? "scene__media scene__media--phone" : "scene__media scene__media--shot"}>
          <img src={m.src} alt={m.alt} loading={eager ? "eager" : "lazy"} decoding="async" />
        </div>
      )}
    </figure>
  );
}
