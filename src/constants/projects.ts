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
    type: "Full-Stack",
    linkGit: "https://github.com/Rayan-Aguiar/rifa_mania",
    featured: true,
    descriptionImage: [
      'Screenshot Landing Page',
      'Screenshot Login',
      'Screenshot Cadastro',
      'Screenshot Dashboard',
      'Screenshot Página de Venda',
      'Screenshot Sorteio/Vencedor',
      'Screenshot Checkout',
    ],
    images: [
      "/imagens/rifa/landing-page.png",
      "/imagens/rifa/Login.png",
      "/imagens/rifa/Cadastro.png",
      "/imagens/rifa/dashboard.png",
      "/imagens/rifa/pagina-venda.png",
      "/imagens/rifa/sorteio.png",
      "/imagens/rifa/checkout.png",
    ]
  },
  {
    id: 2,
    name: 'Pousada Litorânea',
    description: 'Projeto desenvolvido com HTML, CSS e JavaScript.',
    descriptionFull: 'Este projeto foi desenvolvido como um Freelancer para a Pousada Litorânea, com o objetivo de proporcionar uma experiência mais envolvente e visualmente atraente para os visitantes. O site destaca as comodidades e os quartos da pousada, além de integrar-se diretamente com o sistema de reservas do Booking, facilitando o processo de reserva para os hóspedes.',
    img: '/imagens/pousada/home.png',
    type: 'Front-End',
    linkSite: 'https://litoranearj.com.br/index.html',
    featured: true,
    descriptionImage: [
      'Screenshot da página inicial',
      'Screenshot da galeria de fotos',
      'Screenshot da página de contato'
    ],
    images: [
      '/imagens/pousada/home.png',
      '/imagens/pousada/galeria.png',
      '/imagens/pousada/contato.png'
    ]
  }
  
];
