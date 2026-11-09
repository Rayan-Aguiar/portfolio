import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, Lock, MessageCircle } from "lucide-react";
import { allProjects, findProject } from "@/data/projects";
import { site } from "@/data/site";
import { Scene } from "@/components/ProjectMedia";
import { useTitle } from "@/lib/useTitle";
import NotFound from "./NotFound";

export default function Project() {
  const { slug } = useParams();
  const project = findProject(slug);
  useTitle(project?.title);

  if (!project) return <NotFound />;

  const i = allProjects.indexOf(project);
  const prev = allProjects[(i - 1 + allProjects.length) % allProjects.length];
  const next = allProjects[(i + 1) % allProjects.length];

  return (
    <article className="wrap case" aria-labelledby="case-titulo">
      <Link to="/#projetos" className="case__back brk brk--osd">
        <ArrowLeft aria-hidden="true" />
        Todos os projetos
      </Link>

      <header className="case__head">
        <div>
          <h1 id="case-titulo" className="display case__title">
            {project.title}
          </h1>
          <p className="lede case__summary">{project.summary}</p>
        </div>
        <dl className="case__facts">
          <div>
            <dt>Tipo</dt>
            <dd>{project.kind}</dd>
          </div>
          <div>
            <dt>Ano</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status === "arquivo" ? "Arquivo" : project.status === "em evolução" ? "Em evolução" : "Estável"}</dd>
          </div>
          <div>
            <dt>Código</dt>
            <dd>{project.visibility === "privado" ? "Privado" : "Aberto"}</dd>
          </div>
        </dl>
      </header>

      <div className="case__scene">
        <Scene project={project} eager />
      </div>

      <div className="case__cols">
        <section>
          <h2>O problema</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <h2>O que construí</h2>
          <ul className="log__list">
            {project.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Arquitetura</h2>
          <ul className="log__list">
            {project.architecture.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
      </div>

      <ul className="case__stack" aria-label="Stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="case__links">
        {project.links?.site && (
          <a className="btn btn--rec brk brk--osd" href={project.links.site} target="_blank" rel="noreferrer">
            Abrir o site
            <ArrowUpRight aria-hidden="true" />
          </a>
        )}
        {project.links?.repo && (
          <a
            className={project.links.site ? "btn brk brk--osd" : "btn btn--rec brk brk--osd"}
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
          >
            Ver o código
            <Github aria-hidden="true" />
          </a>
        )}
        {!project.links?.site && !project.links?.repo && (
          <a className="btn btn--rec brk brk--osd" href={site.contacts.whatsapp} target="_blank" rel="noreferrer">
            Falar sobre o projeto
            <MessageCircle aria-hidden="true" />
          </a>
        )}
      </div>

      {project.visibility === "privado" && !project.links?.repo && (
        <p className="case__private">
          <Lock aria-hidden="true" />
          O código deste projeto é privado. Posso mostrar mais detalhes da arquitetura numa conversa técnica.
        </p>
      )}

      {project.gallery && (
        <div className="case__gallery">
          {project.gallery.map((g) => (
            <figure key={g.src}>
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      )}

      <nav className="case__next" aria-label="Outros projetos">
        <Link to={`/projetos/${prev.slug}`} className="brk brk--osd">
          <span>← Clipe anterior</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link to={`/projetos/${next.slug}`} className="brk brk--osd">
          <span>Próximo clipe →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </article>
  );
}
