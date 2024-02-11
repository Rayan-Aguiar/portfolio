import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Props {
  image: string;
  title: string;
  description: string;
  linkGit: string;
  linkSite: string;
}

export default function CardProjects({
  image,
  title,
  description,
  linkGit,
  linkSite,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expandedRef.current &&
        !expandedRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  return (
    <Card
      className={`bg-transparent w-80 h-fit p-2 text-white border border-white/20 ${
        isExpanded
          ? "fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-80"
          : ""
      }`}
    >
      <CardHeader>
        <img
          src={image}
          alt="image project"
          className={`opacity-70 hover:opacity-100 duration-150 cursor-zoom-in hover:scale-110 rounded-md ${
            isExpanded
              ? "max-w-screen-lg max-h-screen mx-auto my-auto cursor-zoom-out opacity-100 hover:transform-none"
              : ""
          }`}
          onClick={toggleExpanded}
        />
      </CardHeader>

      <CardContent>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <span className="text-zinc-500">{description}</span>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2 mt-2">
          <a href={linkSite} target="__blank">
            <Button className="bg-lightblue hover:bg-lightblue/75 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" /> Visitar
            </Button>
          </a>
          <a href={linkGit} target="__blank">
            <Button className="flex gap-2 items-center border-lightblue bg-transparent border hover:bg-lightblue/30">
              <GitHubLogoIcon /> Codigo-fonte
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
