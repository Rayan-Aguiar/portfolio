import { CiCirclePlus } from "react-icons/ci";
import { Card, CardContent } from "../ui/card";
import { Github, Link2 } from "lucide-react";

interface CardInfoProjectProps {
  img: string;
  onClick: () => void;
  name: string;
  description: string;
  showLinks?: boolean;
  linkGit?: string;
  linkSite?: string;
}

export const CardInfoProject: React.FC<CardInfoProjectProps> = ({
  description,
  img,
  name,
  onClick,
  showLinks = false,
  linkGit,
  linkSite,
}) => {
  return (
    <Card
      className={`w-72 min-h-96 overflow-hidden bg-transparent border-2 group border-slate-800 hover:border-slate-300 duration-300 ${
        showLinks ? "cursor-zoom-in" : "cursor-pointer"
      }`}
      onClick={onClick}
    >
      <img
        src={img}
        alt="preview"
        className="transform group-hover:scale-105 duration-500"
      />
      <CardContent className="p-4 text-white  h-full">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className=" text-slate-400 ">{description}</p>

        {showLinks === false && (
          <p className="flex items-center gap-1 mt-2">
            <CiCirclePlus />
            Detalhes
          </p>
        )}
        {showLinks && (
          <div className="w-full text-white mt-4 flex justify-around  items-center ">
            {linkGit && (
              <div className="p-2 border border-lightblue hover:bg-lightblue duration-150 rounded-lg">
                <a
                  href={
                    linkGit.startsWith("http") ? linkGit : `https://${linkGit}`
                  }
                  target="__blank"
                  className="flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="" size={25} />
                  GitHub
                </a>
              </div>
            )}
            {linkSite && (
              <div className="p-2 border border-lightblue hover:bg-lightblue duration-150 rounded-lg">
                <a
                  href={
                    linkSite.startsWith("http")
                      ? linkSite
                      : `https://${linkSite}`
                  }
                  target="__blank"
                  className="flex items-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link2 className="-rotate-45" size={25} />
                  Visitar
                </a>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
