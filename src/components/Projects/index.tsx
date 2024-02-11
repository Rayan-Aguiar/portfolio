import { ChevronRight } from "lucide-react";
import ProjectLeft from "../ProjectLeft";
import ProjectRight from "../ProjectRight";
import { FcFolder } from "react-icons/fc";

export default function Projects() {
    const imgLorem =
    "https://cdn.sanity.io/images/v6oximkk/production/21d23aacc75f36df01310f8782e8102a0882276f-1600x900.jpg?w=1600&h=900&auto=format";
  return (
    <div className="w-4/5 h-fit border border-white/20 rounded-lg mt-6 p-8 text-white">
      <div className="flex items-center justify-between">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcFolder />
          Meus projetos
        </h2>
        <span className="text-lightblue  cursor-pointer flex items-center hover:underline text-xs ">
          Ver todos <ChevronRight className="w-4 h-4" />
        </span>
      </div>
      <ProjectRight
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi, voluptatum? "
        img={imgLorem}
        linkGit="https://www.google.com.br/"
        linkSite="https://www.google.com.br/"
      />

      <ProjectLeft
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi, voluptatum? "
        img={imgLorem}
        linkGit="https://www.google.com.br/"
        linkSite="https://www.google.com.br/"
      />
      <ProjectRight
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi, voluptatum? "
        img={imgLorem}
        linkGit="https://www.google.com.br/"
        linkSite="https://www.google.com.br/"
      />

      <ProjectLeft
        title="Lorem"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Commodi, voluptatum? "
        img={imgLorem}
        linkGit="https://www.google.com.br/"
        linkSite="https://www.google.com.br/"
      />
    </div>
  );
}
