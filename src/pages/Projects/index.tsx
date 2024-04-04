import AsideContent from "@/components/Aside";
import CardProjects from "@/components/CardProjects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
  const imgLorem =
    "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format";

  return (
    <div className="min-h-screen w-full flex">
      <aside className="w-1/5 h-screen bg-darkblue sticky top-0 left-0 overflow-y-auto border-r-white/20 border-r p-6 text-white">
        <AsideContent />
      </aside>

      <main className="w-4/5 min:h-screen h-fit flex flex-col items-center overflow-y-auto p-8 text-white">
        <header className="flex flex-col  md:w-[1000px] ">
          <h1 className="text-4xl font-bold">Meus Projetos</h1>
          <div className="text-zinc-500 flex gap-2">
            <span>
              Aqui estão alguns de meus projetos que desenvolvi, você pode
              encontra mais em meu
            </span>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-lightblue hover:underline"
            >
              Github <GitHubLogoIcon />
            </a>
          </div>
          
        </header>
        <div>
        <h2 className="text-2xl text-zinc-200 font-semibold mt-8">
            Front-end
          </h2>
          <div className="flex flex-wrap gap-4">
            <CardProjects
              title="Lorem"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              id saepe tenetur."
              image={imgLorem}
              linkGit="https://github.com/"
              linkSite="https://github.com"
            />
            <CardProjects
              title="Lorem"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              id saepe tenetur."
              image={imgLorem}
              linkGit="https://github.com/"
              linkSite="https://github.com"
            />
            <CardProjects
              title="Lorem"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              id saepe tenetur."
              image={imgLorem}
              linkGit="https://github.com/"
              linkSite="https://github.com"
            />
          </div>
        </div>
        <div>
        <h2 className="text-2xl text-zinc-200 font-semibold mt-8">
            Back-End
          </h2>
          <div className="flex flex-wrap  gap-4">
            <CardProjects
              title="Lorem"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              id saepe tenetur."
              image={imgLorem}
              linkGit="https://github.com/"
              linkSite="https://github.com"
            />
            <CardProjects
              title="Lorem"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              id saepe tenetur."
              image={imgLorem}
              linkGit="https://github.com/"
              linkSite="https://github.com"
            />
            <CardProjects
              title="Lorem"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              id saepe tenetur."
              image={imgLorem}
              linkGit="https://github.com/"
              linkSite="https://github.com"
            />

          </div>
        </div>
      </main>
    </div>
  );
}
