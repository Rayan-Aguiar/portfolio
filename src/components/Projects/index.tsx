import { ChevronRight } from "lucide-react";
import { FcFolder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CardInfoProject } from "../CardInfoProject";
import { DialogProjectComponent } from "../DialogProject";
import { ProjectList, ProjectListProps } from "@/constants/projects";
import { FadeIn } from "../animation/FadeIn";

export default function Projects() {
  const [selectedProject, setSelectedProject] =
    useState<ProjectListProps | null>(null);
  const openProjectDialog = (project: ProjectListProps) => {
    setSelectedProject(project);
  };
  const featuredProjects = ProjectList.filter((project) => project.featured);

  return (
    <div className="w-full h-fit border border-white/20 rounded-lg mt-6 p-8 text-white">
      <div className="flex items-center justify-between flex-wrap">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcFolder />
          Principais Projetos
        </h2>
        <Link to="/projects">
          <span className="text-lightblue  cursor-pointer flex items-center hover:underline text-xs ">
            Ver todos <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
      <div className="mt-8 flex gap-6 flex-wrap justify-center lg:justify-start">
        {featuredProjects.map((project, index) => (
          <FadeIn
            key={project.id}
            to="bottom"
            delay={index * 0.3}
            duration={0.5}
            startOnScrollIntersect
          >
            <CardInfoProject
              key={project.id}
              onClick={() => openProjectDialog(project)}
              img={project.img}
              name={project.name}
              description={project.description}
            />
          </FadeIn>
        ))}
      </div>

      {selectedProject && (
        <DialogProjectComponent
          openDialog={!!selectedProject}
          setOpenDialog={() => setSelectedProject(null)}
          img={selectedProject.img}
          description={selectedProject.descriptionFull}
          name={selectedProject.name}
          type={selectedProject.type}
          linkSite={selectedProject.linkSite}
          linkGitHub={selectedProject?.linkGit}
        />
      )}
    </div>
  );
}
