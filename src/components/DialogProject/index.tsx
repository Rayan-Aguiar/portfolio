import { Github, Link2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

interface DialogProjectComponentProps {
  openDialog: boolean;
  setOpenDialog: (value: boolean) => void;
  img: string;
  name: string;
  description: string;
  type: "App Web" | "Mobile" | "Full Stack" | "Backend";
  linkGitHub?: string;
  linkSite?: string;
}

export const DialogProjectComponent: React.FC<DialogProjectComponentProps> = ({
  description,
  img,
  name,
  openDialog,
  setOpenDialog,
  type,
  linkGitHub,
  linkSite,
}) => {
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogContent className="bg-darkblue border-none text-white">
        <img
          src={img}
          className="mt-6 rounded-lg transform hover:scale-105 duration-500"
        />
        <div className="border-t border-b py-4 border-slate-700 mt-6 flex justify-between items-center">
          <div>
            <DialogTitle className="text-3xl font-bold capitalize ">
              {name}
            </DialogTitle>
            <DialogDescription>{type}</DialogDescription>
          </div>
          <div className="flex gap-2 items-center">
            {linkGitHub && (
              <div className="p-2 border border-lightblue rounded-lg hover:bg-lightblue/75 duration-150 cursor-pointer">
                <a
                  href={
                    linkGitHub.startsWith("http")
                      ? linkGitHub
                      : `https://${linkGitHub}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={25} />
                </a>
              </div>
            )}
            {linkSite && (
              <div className="p-2 border border-lightblue rounded-lg hover:bg-lightblue/75 duration-150 cursor-pointer">
                <a
                  href={
                    linkSite.startsWith("http")
                      ? linkSite
                      : `https://${linkSite}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Link2 className="-rotate-45" size={25} />
                </a>
              </div>
            )}
          </div>
        </div>
        <p>{description}</p>
      </DialogContent>
    </Dialog>
  );
};
