import Docker from "@/assets/techs/docker.svg";
import Vercel from "@/assets/techs/vercel.svg";
import PhotoShop from "@/assets/techs/photoshop.svg";
import Corel from "@/assets/techs/corel.svg";
import Figma from "@/assets/techs/figma.svg";
import Git from "@/assets/techs/git.svg";
import GitHub from "@/assets/techs/github.svg";
import GitLab from "@/assets/techs/gitlab.svg";
import Postgresql from "@/assets/techs/postgresql.svg";
import MySQL from "@/assets/techs/mysql.svg";
import PlanetScale from "@/assets/techs/planetscale.svg";
import Node from "@/assets/techs/nodejs.svg";
import Prisma from "@/assets/techs/prisma.svg";
import JavaScript from "@/assets/techs/javascript.svg";
import TypeScript from "@/assets/techs/typescript.svg";
import Spotify from "@/assets/techs/spotify.svg";
import Notion from "@/assets/techs/notion.svg";
import Discord from "@/assets/techs/discord.svg";
import VsCode from "@/assets/techs/vscode.svg";
import Postman from "@/assets/techs/postman.svg";
import CSS from "@/assets/techs/css.svg";
import VueJS from "@/assets/techs/Vuejs.svg";
import React from "@/assets/techs/react.svg";
import ReactRouter from "@/assets/techs/react-router.svg";
import HTML from "@/assets/techs/html.svg";
import TailwindCSS from "@/assets/techs/tailwindcss.svg";
import NextJS from "@/assets/techs/nextjs.svg";
import Vite from "@/assets/techs/vite.svg";

export interface TechProps {
  title: string;
  image: string;
  link: string;
  category:
    | "Infra"
    | "Design"
    | "Back-end"
    | "Controle de Versão"
    | "Front-end"
    | "Banco de Dados"
    | "Apps";
}

export const tech: TechProps[] = [
  {
    title: "Docker",
    image: Docker,
    link: "https://www.docker.com/",
    category: "Infra",
  },
  {
    title: "Vercel",
    image: Vercel,
    link: "https://vercel.com/",
    category: "Infra",
  },
  {
    title: "PhotoShop",
    image: PhotoShop,
    link: "https://www.adobe.com/products/photoshop.html",
    category: "Design",
  },
  {
    title: "Corel Draw",
    image: Corel,
    link: "https://www.coreldraw.com/br/",
    category: "Design",
  },
  {
    title: "Figma",
    image: Figma,
    link: "https://www.figma.com/",
    category: "Design",
  },
  {
    title: "Git",
    image: Git,
    link: "https://git-scm.com/",
    category: "Controle de Versão",
  },
  {
    title: "GitHub",
    image: GitHub,
    link: "https://github.com/",
    category: "Controle de Versão",
  },
  {
    title: "GitLab",
    image: GitLab,
    link: "https://about.gitlab.com/",
    category: "Controle de Versão",
  },
  {
    title: "Postgresql",
    image: Postgresql,
    link: "https://www.postgresql.org/",
    category: "Banco de Dados",
  },
  {
    title: "MySQL",
    image: MySQL,
    link: "https://www.mysql.com/",
    category: "Banco de Dados",
  },
  {
    title: "Planet Scale",
    image: PlanetScale,
    link: "https://planetscale.com/",
    category: "Banco de Dados",
  },
  {
    title: "Node",
    image: Node,
    link: "https://nodejs.org/en",
    category: "Back-end",
  },
  {
    title: "Prisma",
    image: Prisma,
    link: "https://www.prisma.io/",
    category: "Back-end",
  },
  {
    title: "JavaScript",
    image: JavaScript,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    category: "Back-end",
  },
  {
    title: "TypeScript",
    image: TypeScript,
    link: "https://www.typescriptlang.org/",
    category: "Back-end",
  },
  {
    title: "VS Code",
    image: VsCode,
    link: "https://code.visualstudio.com/",
    category: "Apps",
  },
  {
    title: "Spotify",
    image: Spotify,
    link: "https://open.spotify.com/intl-pt",
    category: "Apps",
  },
  {
    title: "Notion",
    image: Notion,
    link: "https://www.notion.so/pt-br",
    category: "Apps",
  },
  {
    title: "Discord",
    image: Discord,
    link: "https://discord.com/",
    category: "Apps",
  },
  {
    title: "Postman",
    image: Postman,
    link: "https://www.postman.com/",
    category: "Apps",
  },
  {
    title: "HTML",
    image: HTML,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    category: "Front-end",
  },
  {
    title: "CSS",
    image: CSS,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    category: "Front-end",
  },
  {
    title: "JavaScript",
    image: JavaScript,
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    category: "Front-end",
  },
  {
    title: "React JS",
    image: React,
    link: "https://react.dev/",
    category: "Front-end",
  },
  {
    title: "React Router",
    image: ReactRouter,
    link: "https://reactrouter.com/en/main",
    category: "Front-end",
  },
  {
    title: "VueJS",
    image: VueJS,
    link: "https://vuejs.org/",
    category: "Front-end",
  },
  {
    title: "TypeScript",
    image: TypeScript,
    link: "https://www.typescriptlang.org/",
    category: "Front-end",
  },
  {
    title: "NextJS",
    image: NextJS,
    link: "https://nextjs.org/",
    category: "Front-end",
  },
  {
    title: "Tailwind CSS",
    image: TailwindCSS,
    link: "https://tailwindcss.com/",
    category: "Front-end",
  },
  {
    title: "Vite",
    image: Vite,
    link: "https://vitejs.dev/",
    category: "Front-end",
  },
];
