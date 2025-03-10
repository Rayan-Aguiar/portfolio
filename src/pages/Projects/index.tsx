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

  const projectsByType = ProjectList.reduce((acc, project) => {
    if (!acc[project.type]) {
      acc[project.type] = [];
    }
    acc[project.type].push(project);
    return acc;
  }, {} as Record<string, ProjectListProps[]>);

  const renderProjectSection = (type: string, projects: ProjectListProps[]) => (
    <>
      {projects.length > 0 && (
        <div>
          <h2 className="text-2xl text-zinc-200 font-semibold mt-8 mb-3 flex justify-center md:justify-start">{type}</h2>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {projects.map((project) => (
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
    </>
  );

  return (
    <main className="text-white w-full">
      <div>
        <header className="flex flex-col">
          <h1 className="text-4xl font-bold">Meus Projetos</h1>
          <div className="text-zinc-500 flex gap-2 flex-wrap">
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
        {Object.entries(projectsByType).map(([type, projects]) => 
          renderProjectSection(type, projects)
        )}
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
  );
}