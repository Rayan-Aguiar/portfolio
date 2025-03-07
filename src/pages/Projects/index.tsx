import AsideContent from "@/components/Aside";
import { CardInfoProject } from "@/components/CardInfoProject";
import { ProjectModal } from "@/components/ProjectModal";

import { ProjectList, ProjectListProps } from "@/config/projects";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Projects() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectListProps | null>(null); 

  const handleOpenModal = (project: ProjectListProps) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const frontEndProjects = ProjectList.filter(
    (project) => project.type === "Front-End"
  );
  const backEndProjects = ProjectList.filter(
    (project) => project.type === "Back-End"
  );
  const mobileProjects = ProjectList.filter(
    (project) => project.type === "Mobile"
  );
  const FullStackProjects = ProjectList.filter(
    (project) => project.type === "Full-Stack"
  );

  return (
    <div className="min-h-screen w-full flex">
      <aside className="w-1/5 h-screen bg-darkblue sticky top-0 left-0 overflow-y-auto border-r-white/20 border-r p-6 text-white">
        <AsideContent />
      </aside>

      <main className="w-4/5 min:h-screen h-fit flex flex-col items-center overflow-y-auto p-8 text-white ">
      <div className="">
        <header className="flex flex-col md:w-[1000px] ">
          <h1 className="text-4xl font-bold">Meus Projetos</h1>
          <div className="text-zinc-500 flex gap-2">
            <span>
              Aqui estão alguns de meus projetos que desenvolvi, você pode
              encontra mais em meu
            </span>
            <a
              href="https://github.com/Rayan-Aguiar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 items-center text-lightblue hover:underline"
            >
              Github <GitHubLogoIcon />
            </a>
          </div>
        </header>
        
          <div>
            {FullStackProjects.length > 0 && (
              <div>
                <h2 className="text-2xl text-zinc-200 font-semibold mt-8 mb-3">
                  FullStack
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {FullStackProjects.map((project) => (
                    <CardInfoProject
                      key={project.id}
                      description={project.description}
                      img={project.img}
                      name={project.name}
                      onClick={() => handleOpenModal(project)}
                      showLinks={true}
                      linkGit={project?.linkGit}
                      linkSite={project?.linkSite}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          {frontEndProjects.length > 0 && (
            <div>
              <h2 className="text-2xl text-zinc-200 font-semibold mt-8 mb-3">
                Front-End
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {frontEndProjects.map((project) => (
                  <CardInfoProject
                    key={project.id}
                    description={project.description}
                    img={project.img}
                    name={project.name}
                    onClick={() => handleOpenModal(project)}
                    showLinks={true}
                    linkGit={project?.linkGit}
                    linkSite={project?.linkSite}
                  />
                ))}
              </div>
            </div>
          )}
          <div>
            {backEndProjects.length > 0 && (
              <div>
                <h2 className="text-2xl text-zinc-200 font-semibold mt-8 mb-3">
                  Back-End
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {backEndProjects.map((project) => (
                    <CardInfoProject
                      key={project.id}
                      description={project.description}
                      img={project.img}
                      name={project.name}
                      onClick={() => handleOpenModal(project)}
                      showLinks={true}
                      linkGit={project?.linkGit}
                      linkSite={project?.linkSite}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            {mobileProjects.length > 0 && (
              <div>
                <h2 className="text-2xl text-zinc-200 font-semibold mt-8 mb-3">
                  Mobile
                </h2>
                <div className="grid grid-cols-4 gap-4">
                  {mobileProjects.map((project) => (
                    <CardInfoProject
                      key={project.id}
                      description={project.description}
                      img={project.img}
                      name={project.name}
                      onClick={() => handleOpenModal(project)}
                      showLinks={true}
                      linkGit={project?.linkGit}
                      linkSite={project?.linkSite}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
        {currentProject && (
          <ProjectModal
            name={currentProject.name}
            images={currentProject.images} 
            description={currentProject.description}
            open={isModalOpen}
            onClose={handleCloseModal} 
          />
        )}
        
      </main>
    </div>
  );
}
