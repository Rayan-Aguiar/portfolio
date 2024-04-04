import AsideContent from "@/components/Aside";
import Techs from "@/components/Techs";
import { Techs as techs} from "../../config/techs"
import { techsBack } from "@/config/techsBack";
import { techsControls } from "@/config/techsControls"
import { techsApp } from "@/config/techsApp"
import { techsDesigner } from "@/config/techsDesigners"
import { techsInfra } from "@/config/techsInfra"
import { techsBD } from "@/config/techsBD"


export default function Technologies() {
  return (
    <div className="min-h-screen w-full flex">
      <aside className="w-1/5 h-screen bg-darkblue sticky top-0 left-0 overflow-y-auto border-r-white/20 border-r p-6 text-white">
        <AsideContent />
      </aside>

      <main className="w-4/5 min:h-screen h-fit flex flex-col items-center overflow-y-auto p-8 text-white">
        <header className="w-4/5">
          <h1 className="text-4xl font-bold">Tecnologias e Ferramentas</h1>
            <p className="text-zinc-500 mt-2">
            Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento. Eu seleciono e uso meticulosamente essas ferramentas para criar soluções robustas e eficientes, priorizando sempre a experiência do usuário.
            </p>                  
        </header>
        <div className="w-4/5 ">
            <div>
                <h2 className="font-bold text-2xl mt-8">Front-End</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techs.map((tech, index)=>(
                        <div key={index}>
                            <Techs title={tech.title} image={tech.image} link={tech.link} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-8">Back-End</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techsBack.map((techBack, index)=>(
                        <div key={index}>
                            <Techs title={techBack.title} image={techBack.image} link={techBack.link} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-8">Controle de versões</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techsControls.map((techControls, index)=>(
                        <div key={index}>
                            <Techs title={techControls.title} image={techControls.image} link={techControls.link} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-8">Infraestrutura</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techsInfra.map((techInfra, index)=>(
                        <div key={index}>
                            <Techs title={techInfra.title} image={techInfra.image} link={techInfra.link} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-8">Designer</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techsDesigner.map((techDesigner, index)=>(
                        <div key={index}>
                            <Techs title={techDesigner.title} image={techDesigner.image} link={techDesigner.link} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-8">Banco de dados</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techsBD.map((techBD, index)=>(
                        <div key={index}>
                            <Techs title={techBD.title} image={techBD.image} link={techBD.link} />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-bold text-2xl mt-8">Aplicativos</h2>
                <div className="mt-2 flex flex-wrap w-fit gap-2">
                    {techsApp.map((techApp, index)=>(
                        <div key={index}>
                            <Techs title={techApp.title} image={techApp.image} link={techApp.link} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
