import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Props {
  title: string;
  description: string;
  linkGit?: string;
  linkSite?: string;
  img: string;
}

export default function ProjectLeft({ title, description, linkGit, linkSite, img }: Props) {
  
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="ml-2">
        <h4 className="font-bold text-2xl">{title}</h4>
        <p className="text-sm text-zinc-500">
          {description}
        </p>
        <div className="flex gap-2 mt-2">
          {linkSite && (
            <a href={linkSite} target="__blank">
              <Button className="bg-lightblue hover:bg-lightblue/75 flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4" /> Visitar
              </Button>
            </a>
          )}
          {linkGit && (
            <a href={linkGit} target="__blank">
              <Button className="flex gap-2 items-center border-lightblue bg-transparent border hover:bg-lightblue/30">
                <GitHubLogoIcon /> Codigo-fonte
              </Button>
            </a>
          )}
        </div>
      </div>
      <div className="w-1/2">
        <img src={img} alt="image project" className="rounded-lg transform hover:scale-105 duration-300" />
      </div>
    </div>
  );
}
