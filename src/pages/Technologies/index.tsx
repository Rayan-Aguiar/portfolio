import Techs from "@/components/Techs";
import { TechProps, tech } from "../../config/techs";

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
          const filteredTechs = tech.filter((t: TechProps) => t.category === category);
          console.log(filteredTechs)
          return (
            <div key={category}>
              <h2 className="font-bold text-2xl mt-8">{category}</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                {filteredTechs.map((t: TechProps, index: number) => {
                  return (
                    <div key={index} className="w-full md:w-fit">
                      <Techs title={t.title} image={t.image} link={t.link} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
