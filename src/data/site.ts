const whatsappText = encodeURIComponent(
  "Olá, Rayan! Vi seu portfólio e gostaria de conversar.",
);

export const site = {
  name: "Rayan Aguiar",
  fullName: "Rayan Siqueira de Aguiar",
  role: "Full Stack Engineer",
  focus: "foco em backend",
  location: "Nova Iguaçu · RJ",
  years: "4+ anos",
  status: "Aberto a propostas",
  cv: "/docs/curriculo-rayan-aguiar.pdf",
  photo: "/imagens/rayan.webp",
  contacts: {
    whatsapp: `https://wa.me/5521991460601?text=${whatsappText}`,
    whatsappDisplay: "(21) 99146-0601",
    email: "rayansiqueira@gmail.com",
    linkedin: "https://www.linkedin.com/in/rayan-siqueira/",
    linkedinDisplay: "in/rayan-siqueira",
    github: "https://github.com/Rayan-Aguiar",
    githubDisplay: "Rayan-Aguiar",
  },
} as const;

/** Seções da home, na ordem da fita. */
export const reels = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "stack", label: "Stack" },
  { id: "contato", label: "Contato" },
] as const;

export const stack: { area: string; items: string[] }[] = [
  {
    area: "Backend",
    items: ["Node.js", "TypeScript", "Fastify", "Express", "APIs REST", "OAuth2", "JWT", "Zod"],
  },
  {
    area: "Arquitetura",
    items: ["Clean Architecture", "DDD", "Arquitetura modular", "Microsserviços", "Mensageria (RabbitMQ)", "Redis"],
  },
  { area: "Dados", items: ["MySQL", "MongoDB", "PostgreSQL", "Drizzle ORM", "Prisma"] },
  {
    area: "Frontend e mobile",
    items: ["React", "Next.js", "React Native", "TanStack Query/Router", "Tailwind CSS"],
  },
  {
    area: "Infra e qualidade",
    items: ["Docker", "GitHub Actions", "Azure", "AWS S3", "Grafana", "Vitest", "Playwright"],
  },
  { area: "Outras linguagens", items: ["Go", "PHP", "Python"] },
];
