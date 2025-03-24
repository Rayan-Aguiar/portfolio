import Techs from "@/components/Techs";
import { TechProps, tech } from "../../constants/techs";
import { FadeIn } from "@/components/animation/FadeIn";

export default function Technologies() {
  const categories = [
    "Front-end",
    "Back-end",
    "Controle de Versão",
    "Infra",
    "Design",
    "Banco de Dados",
    "Apps",
  ];

  return (
    <main className="text-white">
      <header className="w-4/5">
        <h1 className="text-4xl font-bold">Tecnologias e Ferramentas</h1>
        <p className="text-zinc-500 mt-2">
          Explore as tecnologias e ferramentas que impulsionam a minha
          experiência em desenvolvimento. Eu seleciono e uso meticulosamente
          essas ferramentas para criar soluções robustas e eficientes,
          priorizando sempre a experiência do usuário.
        </p>
      </header>

      <div className="lg:w-4/5 w-full">
        {categories.map((category) => {
          const filteredTechs = tech.filter(
            (t: TechProps) => t.category === category
          );

          return (
            <div key={category}>
              <FadeIn
                to="left"
                delay={0.2}
                duration={0.5}
                startOnScrollIntersect
              >
                <h2 className="font-bold text-2xl mt-8">{category}</h2>
              </FadeIn>

              <div className="mt-2 flex flex-wrap gap-2">
                {filteredTechs.map((t: TechProps, index: number) => (
                  <FadeIn
                    key={index}
                    to="bottom"
                    delay={index * 0.2}
                    duration={0.5}
                    startOnScrollIntersect
                  >
                    <div className="w-full md:w-fit">
                      <Techs title={t.title} image={t.image} link={t.link} />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
