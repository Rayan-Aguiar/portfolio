import { ChevronRight } from "lucide-react";
import { FcBriefcase } from "react-icons/fc";
import { WorkExperienceitems } from "../WorkExperienceitems";

import G1learn from "../../assets/img/G1learn.jpeg";
import Unisuam from "../../assets/img/unisuam.png";
import M2 from "../../assets/img/m2.jpg";

export default function WorkExperience() {
  return (
    <div className="w-4/5 h-fit border border-white/20 rounded-lg mt-6 p-8 text-white">
      <div className="flex items-center justify-between">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcBriefcase />
          Experiências
        </h2>
        <a
          href="https://www.linkedin.com/in/rayan-siqueira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-lightblue  cursor-pointer flex items-center hover:underline text-xs ">
            Contrate-me <ChevronRight className="w-4 h-4" />{" "}
          </span>
        </a>
      </div>

      <div className="grid grid-cols-3 mt-4 items-center gap-6">
        <WorkExperienceitems
          avatar={M2}
          description="Desenvolvedor Mobile"
          duration="Atualmente"
          tittle="M2Flex"
        />
        <WorkExperienceitems
          avatar={G1learn}
          description="Desenvolvedor Full-Stack"
          duration="2022 - 2024"
          tittle="G1learn"
        />
        <WorkExperienceitems
          avatar={Unisuam}
          description="Estudante de Ciência da Computação"
          duration="Concluido"
          tittle="Unisuam"
        />
        
        
      </div>
    </div>
  );
}
