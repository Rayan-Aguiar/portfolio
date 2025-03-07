import { ChevronRight } from "lucide-react";
import { FcFolder } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CardInfoProject } from "../CardInfoProject";
import { DialogProjectComponent } from "../DialogProject";
import { ProjectList, ProjectListProps } from "@/config/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectListProps | null>(null);
  const openProjectDialog = (project: ProjectListProps) => {
    setSelectedProject(project);
  };


  return (
    <div className="w-4/5 h-fit border border-white/20 rounded-lg mt-6 p-8 text-white">
      <div className="flex items-center justify-between">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcFolder />
          Meus projetos
        </h2>
        <Link to="/projects">
          <span className="text-lightblue  cursor-pointer flex items-center hover:underline text-xs ">
            Ver todos <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
      <div className="mt-8 flex gap-4 flex-wrap">
        {ProjectList.map((project) => (
          <CardInfoProject
            key={project.id}
            onClick={() => openProjectDialog(project)}
            img={project.img}
            name={project.name}
            description={project.description}
          />
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
