import { NewTab } from "@/components/NewTab";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, FileDown, MessageCircle } from "lucide-react";
import { site, stack } from "@/data/site";
import { archive, projects } from "@/data/projects";
import { education, jobs } from "@/data/experience";
import { Scene, StatusTag, Thumb } from "@/components/ProjectMedia";
import { useTitle } from "@/lib/useTitle";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  useTitle();
  const [feature, ...rest] = projects;

  return (
    <>
      {/* Abertura: o sujeito travado no foco, uma frase e duas ações. */}
      <section id="inicio" data-reel className="wrap open" aria-labelledby="titulo">
        <p className="open__osd open__osd--tl osd">
          <strong>{site.name}</strong> · Full Stack · Backend
        </p>
        <p className="open__osd open__osd--bl osd">
          <span className="open__osd-role">Full Stack · Backend · </span>
          {site.location} · {site.years}
        </p>
        <div>
          <h1 id="titulo" className="display open__title">
            SISTEMAS QUE RODAM OPERAÇÕES REAIS.
          </h1>
          <p className="lede open__lede">
            APIs, integrações e automação com Node.js, TypeScript, MySQL e React.
          </p>
          <div className="open__actions">
            <a className="btn btn--rec brk brk--osd" href={site.contacts.whatsapp} target="_blank" rel="noreferrer">
              Falar comigo
              <MessageCircle aria-hidden="true" />
              <NewTab />
            </a>
            <a className="btn brk brk--osd" href={site.cv} download>
              Currículo PDF
              <FileDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="subject">
          <div className="subject__frame">
            <span className="subject__af osd" aria-hidden="true">
              <span className="seg">AF</span> Foco
            </span>
            <img src={site.photo} alt="Foto de Rayan Aguiar sorrindo, de camisa branca, ao ar livre." width={400} height={400} />
          </div>
          <figcaption className="sr-only">
            {site.name}, {site.location}
          </figcaption>
        </figure>
      </section>

      {/* Projetos */}
      <section id="projetos" data-reel className="wrap reel" aria-labelledby="projetos-titulo">
        <div className="reel__head">
          <h2 id="projetos-titulo" className="h2">
            Projetos
          </h2>
          <p className="reel__count osd">
            <span className="seg">{pad(projects.length)}</span> clipes
          </p>
        </div>

        <Link
          to={`/projetos/${feature.slug}`}
          className="feature brk brk--osd"
          viewTransition
          aria-labelledby={`t-${feature.slug}`}
          aria-describedby={`s-${feature.slug} st-${feature.slug}`}
        >
          <Scene project={feature} eager shared decorative />
          <div className="feature__body">
            <h3 id={`t-${feature.slug}`} className="feature__title">
              {feature.title}
            </h3>
            <p id={`s-${feature.slug}`}>{feature.summary}</p>
            <p>{feature.problem}</p>
            <div className="feature__meta">
              <span className="tag" aria-hidden="true">
                <span className="seg">C01</span> {feature.kind}
              </span>
              <StatusTag project={feature} id={`st-${feature.slug}`} />
              <span className="tag" aria-hidden="true">
                Ver arquitetura <ArrowRight aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>

        <ol className="clips">
          {rest.map((p, i) => (
            <li key={p.slug}>
              <Link
                to={`/projetos/${p.slug}`}
                className="clip brk"
                viewTransition
                aria-labelledby={`t-${p.slug}`}
                aria-describedby={`s-${p.slug} st-${p.slug}`}
              >
                <span className="clip__no" aria-hidden="true">
                  <span className="seg">C{pad(i + 2)}</span>
                  <span>{p.year}</span>
                </span>
                <Thumb project={p} />
                <div>
                  <h3 id={`t-${p.slug}`} className="clip__title">
                    {p.title}
                  </h3>
                  <p id={`s-${p.slug}`} className="clip__summary">
                    {p.summary}
                  </p>
                </div>
                <p className="clip__stack" aria-hidden="true">
                  {p.stack.slice(0, 4).join(" / ")}
                </p>
                <span className="clip__status">
                  <StatusTag project={p} id={`st-${p.slug}`} />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="archive">
          <h3>Arquivo</h3>
          <ol className="clips" style={{ marginTop: 0 }}>
            {archive.map((p, i) => (
              <li key={p.slug}>
                <Link
                  to={`/projetos/${p.slug}`}
                  className="clip brk"
                  viewTransition
                  aria-labelledby={`t-${p.slug}`}
                  aria-describedby={`s-${p.slug}`}
                >
                  <span className="clip__no" aria-hidden="true">
                    <span className="seg">A{pad(i + 1)}</span>
                  </span>
                  <Thumb project={p} />
                  <div>
                    <h4 id={`t-${p.slug}`} className="clip__title">
                      {p.title}
                    </h4>
                    <p id={`s-${p.slug}`} className="clip__summary">
                      {p.summary}
                    </p>
                  </div>
                  <span className="clip__status tag">
                    <span className="seg">{p.year}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Experiência: o log da fita. */}
      <section id="experiencia" data-reel className="wrap reel" aria-labelledby="exp-titulo">
        <div className="reel__head">
          <h2 id="exp-titulo" className="h2">
            Experiência
          </h2>
          <p className="reel__count osd">
            <span className="seg">2022</span> → <span className="seg">2026</span>
          </p>
        </div>

        <ol className="log">
          {jobs.map((j) => (
            <li
              key={j.role + j.period}
              className={[
                "log__entry",
                j.current ? "log__entry--current" : "",
                j.highlights.length ? "" : "log__entry--minor",
              ].join(" ")}
            >
              <div className="log__when">
                <span className="seg">{j.start}</span>
                <p>{j.period}</p>
              </div>
              <div>
                <h3 className="log__company">{j.company}</h3>
                <p className="log__role">
                  {j.role} · {j.place}
                </p>
                <p className="log__summary">{j.summary}</p>
                {j.highlights.length > 0 && (
                  <ul className="log__list">
                    {j.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                {j.readings && (
                  <dl className="readings" aria-label="Leituras">
                    {j.readings.map((r) => (
                      <div key={r.value} className="reading">
                        <dt className="seg">{r.value}</dt>
                        <dd>{r.label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="edu">
          <h3 className="osd">Formação</h3>
          <ul>
            {education.map((e) => (
              <li key={e.title}>
                {e.title} <span>· {e.org}</span>
                {e.period && (
                  <span>
                    {" "}
                    · <span className="seg">{e.period.replace(/\s/g, "")}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" data-reel className="wrap reel" aria-labelledby="stack-titulo">
        <div className="reel__head">
          <h2 id="stack-titulo" className="h2">
            Stack
          </h2>
          <p className="reel__count osd">O que uso no dia a dia</p>
        </div>
        <dl className="stack">
          {stack.map((s) => (
            <div key={s.area} className="stack__row">
              <dt>{s.area}</dt>
              <dd>
                {s.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Fim da fita */}
      <section id="contato" data-reel className="wrap end" aria-labelledby="contato-titulo">
        <div className="end__band" aria-hidden="true" />
        <h2 id="contato-titulo" className="display end__title">
          Fim da fita.
        </h2>
        <p className="lede end__lede">
          Trabalho hoje como desenvolvedor sênior no Rio e estou <strong>aberto a propostas</strong>{" "}
          presenciais, híbridas ou remotas. O jeito mais rápido de falar comigo é pelo WhatsApp.
        </p>
        <ul className="end__list">
          <li>
            <a className="end__link end__link--rec brk" href={site.contacts.whatsapp} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>{site.contacts.whatsappDisplay}</strong>
              <ArrowUpRight aria-hidden="true" />
              <NewTab />
            </a>
          </li>
          <li>
            <a className="end__link brk" href={`mailto:${site.contacts.email}`}>
              <span>E-mail</span>
              <strong>{site.contacts.email}</strong>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="end__link brk" href={site.contacts.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>{site.contacts.linkedinDisplay}</strong>
              <ArrowUpRight aria-hidden="true" />
              <NewTab />
            </a>
          </li>
          <li>
            <a className="end__link brk" href={site.contacts.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>{site.contacts.githubDisplay}</strong>
              <ArrowUpRight aria-hidden="true" />
              <NewTab />
            </a>
          </li>
          <li>
            <a className="end__link brk" href={site.cv} download>
              <span>Currículo</span>
              <strong>PDF atualizado</strong>
              <FileDown aria-hidden="true" />
            </a>
          </li>
        </ul>
        <p className="colophon">© 2026 {site.fullName} · Nova Iguaçu, RJ</p>
      </section>
    </>
  );
}
