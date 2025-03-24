import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  ArrowUpRight,
  BookOpen,
  FolderOpenDot,
  HomeIcon,
  Laptop2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function AsideContent() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const activeClass = "bg-lightblue/20";
  const defaultClass = "hover:bg-lightblue/20";

  return (
    <nav aria-label="Menu lateral">
      <ul>
        <li>
          <Link
            to="/"
            className={`group flex gap-2 items-center p-2 font-bold w-full rounded-md duration-75 text-white ${
              isActive("/") ? activeClass : defaultClass
            }`}
          >
            <HomeIcon
              className={`w-4 h-4 duration-150 ${
                isActive("/") ? "text-lightblue" : "text-white group-hover:text-lightblue"
              }`}
            />
            Início
          </Link>
        </li>
      </ul>

      <section className="mt-4">
        <h2 className="font-semibold text-zinc-500 text-sm">Eu</h2>
        <ul className="mt-2">
          <li>
            <Link
              to="/aboutme"
              className={`group flex gap-2 items-center p-2 w-full rounded-md duration-75 text-sm text-white ${
                isActive("/aboutme") ? activeClass : defaultClass
              }`}
            >
              <BookOpen
                className={`w-4 h-4 duration-150 ${
                  isActive("/aboutme") ? "text-lightblue" : "text-white group-hover:text-lightblue"
                }`}
              />
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`group flex gap-2 items-center p-2 w-full rounded-md duration-75 text-sm text-white ${
                isActive("/projects") ? activeClass : defaultClass
              }`}
            >
              <FolderOpenDot
                className={`w-4 h-4 duration-150 ${
                  isActive("/projects") ? "text-lightblue" : "text-white group-hover:text-lightblue"
                }`}
              />
              Projetos
            </Link>
          </li>
          <li>
            <Link
              to="/technologies"
              className={`group flex gap-2 items-center p-2 w-full rounded-md duration-75 text-sm text-white ${
                isActive("/technologies") ? activeClass : defaultClass
              }`}
            >
              <Laptop2
                className={`w-4 h-4 duration-150 ${
                  isActive("/technologies") ? "text-lightblue" : "text-white group-hover:text-lightblue"
                }`}
              />
              Tecnologias e Ferramentas
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="font-semibold text-zinc-500 text-sm">Redes Sociais</h2>
        <ul className="mt-2">
          <li>
            <a
              href="https://github.com/Rayan-Aguiar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-2 items-center justify-between hover:bg-white/10 p-2 w-full rounded-md duration-75 text-sm text-white"
            >
              <span className="flex gap-2 items-center">
                <GitHubLogoIcon className="w-4 h-4 text-white group-hover:text-lightblue duration-150" />
                GitHub
              </span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-lightblue duration-150" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rayan-siqueira/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex gap-2 items-center justify-between hover:bg-white/10 p-2 w-full rounded-md duration-75 text-sm text-white"
            >
              <span className="flex gap-2 items-center">
                <LinkedInLogoIcon className="w-4 h-4 text-white group-hover:text-lightblue duration-150" />
                Linkedin
              </span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-lightblue duration-150" />
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
