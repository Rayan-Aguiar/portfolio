import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FcBriefcase } from "react-icons/fc";
import G1learn from "../../assets/img/G1learn.jpeg";
import Unisuam from "../../assets/img/unisuam.png";

export default function WorkExperience() {
  return (
    <div className="w-4/5 h-fit border border-white/20 rounded-lg mt-6 p-8 text-white">
      <div className="flex items-center justify-between">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcBriefcase />
          Experiências
        </h2>
        <a href="https://www.linkedin.com/in/rayan-siqueira/" target="_blank" rel="noopener noreferrer">
          <span className="text-lightblue  cursor-pointer flex items-center hover:underline text-xs ">
          Contrate-me <ChevronRight className="w-4 h-4" />{" "}
        </span>

        </a>
      </div>

      <div className="grid grid-cols-2 mt-4 items-center ">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={G1learn} />
            <AvatarFallback>G1 learn</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-bold">G1 Learn</h3>
            <p className="text-zinc-500 text-sm">Desenvolvedor Front-end</p>
            <p className="text-zinc-500 text-xs font-medium">
              2022 - Atualmente
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={Unisuam} />
            <AvatarFallback>Unisuam</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="font-bold">Unisuam</h3>
            <p className="text-zinc-500 text-sm">Ciência da Computação</p>
            <p className="text-zinc-500 text-xs font-medium">
              2023 - Concluído
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
