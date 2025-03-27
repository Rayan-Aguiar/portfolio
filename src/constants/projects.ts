export interface ProjectListProps {
  id: number;
  name: string;
  description: string;
  descriptionFull: string;
  img: string;
  descriptionImage: string[];
  linkGit?: string;
  linkSite?: string;
  type: "Front-End" | "Mobile" | "Full-Stack" | "Back-End";
  featured: boolean
  images: string[];
}

export const ProjectList: ProjectListProps[] = [
  {
    id: 1,
    name: "Rifa Mania",
    description: "Projeto feito como React, TypeScript, NodeJs, Prisma e SQL",
    descriptionFull:
      "Este é um projeto completo que envolve o desenvolvimento de um sistema de rifas online, com um backend em Node.js e um frontend em React. O objetivo do projeto é permitir aos usuários participarem de rifas online, com sorteios e atualizações automáticas de status, venda de tickets e links de venda compartilháveis.",
    img: "/imagens/rifa/landing-page.png",
    type: "Front-End",
    linkGit: "https://github.com/Rayan-Aguiar/rifa_mania",
    featured: true,
    descriptionImage: [
      'Screenshot Landing Page',
      'Screenshot Login',
      'Screenshot Cadastro',
      'Screenshot Dashboard',
      'Screenshot Página de Venda',
      'Screenshot Checkout',
    ],
    images: [
      "/imagens/rifa/landing-page.png",
      "/imagens/rifa/Login.png",
      "/imagens/rifa/Cadastro.png",
      "/imagens/rifa/dashboard.png",
      "/imagens/rifa/pagina-venda.png",
      "/imagens/rifa/checkout.png",
    ]
  },
];
