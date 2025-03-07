import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  ArrowUpRight,
  BookOpen,
  FolderOpenDot,
  HomeIcon,
  Laptop2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AsideContent() {
  return (
    <>
      <Link to="/">
        <span className="flex gap-2 items-center hover:bg-white/10 p-2 font-bold w-full rounded-md duration-75">
          <HomeIcon className="text-lightblue w-4 h-4" /> Início
        </span>
      </Link>

      <div className="mt-4">
        <span className="font-semibold text-zinc-500 text-sm">Eu</span>
        <ul className="mt-2">
          <Link to='/aboutme'>
            <li className="flex gap-2 items-center hover:bg-white/10 p-2 w-full rounded-md duration-75 cursor-pointer text-sm">
              <BookOpen className="text-lightblue w-4 h-4" />
              Sobre mim
            </li>
          </Link>
          <Link to="/projects">
            <li className="flex gap-2 items-center hover:bg-white/10 p-2 w-full rounded-md duration-75 cursor-pointer text-sm">
            <FolderOpenDot className="text-lightblue w-4 h-4" />
            Projetos
            </li>

          </Link>
          <Link to="/technologies">
            <li className="flex gap-2 items-center hover:bg-white/10 p-2 w-full rounded-md duration-75 cursor-pointer text-sm">
              <Laptop2 className="text-lightblue w-4 h-4" />
              Tecnologias e Ferramentas
            </li>
          </Link>
        </ul>
      </div>

      <div className="mt-4">
        <span className="font-semibold text-zinc-500 text-sm">
          Redes Sociais
        </span>
        <ul className="mt-2">
          <a href="https://github.com/Rayan-Aguiar" target="_blank" rel="noopener noreferrer">
            <li className="flex gap-2 items-center justify-between hover:bg-white/10 p-2 w-full rounded-md duration-75 cursor-pointer text-sm">
              <div className="flex gap-2 items-center">
                <GitHubLogoIcon className="text-lightblue w-4 h-4" />
                GitHub
              </div>
              <div>
                <ArrowUpRight className="text-lightblue w-4 h-4" />
              </div>
            </li>
          </a>
          <a href="https://www.linkedin.com/in/rayan-siqueira/" target="_blank" rel="noopener noreferrer">
            <li className="flex gap-2 items-center justify-between hover:bg-white/10 p-2 w-full rounded-md duration-75 cursor-pointer text-sm">
              <div className="flex gap-2 items-center">
                <LinkedInLogoIcon className="text-lightblue w-4 h-4" />
                Linkedin
              </div>
              <div>
                <ArrowUpRight className="text-lightblue w-4 h-4" />
              </div>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
