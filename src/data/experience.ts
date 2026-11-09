export interface Reading {
  value: string;
  label: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  start: number;
  place: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  readings?: Reading[];
}

/** Fonte: ~/projetos/career-ops/cv.md. Nada aqui é inventado. */
export const jobs: Job[] = [
  {
    company: "Fadel Transportes e Logística",
    role: "Desenvolvedor Full Stack Sênior",
    period: "dez/2025 – atual",
    start: 2025,
    place: "Rio de Janeiro · presencial",
    current: true,
    summary:
      "Principal desenvolvedor da equipe. Conduzo a modernização dos sistemas internos com Clean Architecture e DDD, saindo de um monólito para módulos por domínio de negócio.",
    highlights: [
      "Desenvolvo o sistema principal de logística e operações com Node.js, Fastify, React, TypeScript e MySQL (Drizzle, Zod).",
      "Servidor OAuth2 próprio para login único entre o sistema principal e os sistemas paralelos.",
      "Integrações com ERP TOTVS, seis provedores de telemetria de frota e APIs de WhatsApp; reescrevi em TypeScript uma integração legada em PHP.",
      "Agente desktop em Go que alerta a equipe de monitoramento e bloqueia a máquina até um supervisor liberar via QR Code.",
      "Plataforma de vídeos de treinamento em Next.js, feita sozinho de ponta a ponta, usada por 4 filiais.",
      "CI/CD no GitHub Actions com testes, build e deploy em VPS Azure com Docker; health checks monitorados no Grafana.",
    ],
    readings: [
      { value: "2.000+", label: "testes unitários e de integração (Vitest), além de e2e com Playwright" },
      { value: "185 ms", label: "abertura de um dashboard que levava 3–4 s, com cache em memória" },
      { value: "54", label: "automações de processos operacionais, cerca de 30% mais produtividade segundo a diretoria" },
      { value: "500 h", label: "assistidas na plataforma de treinamento, com mais de 40 vídeos" },
    ],
  },
  {
    company: "Fadel Transportes e Logística",
    role: "Desenvolvedor Full Stack Pleno",
    period: "mai/2025 – nov/2025",
    start: 2025,
    place: "Rio de Janeiro · presencial",
    summary:
      "APIs, serviços e aplicações internas para operações logísticas, financeiro e gestão de frotas, além da manutenção de legados em Node.js, PHP e Python.",
    highlights: [],
  },
  {
    company: "M2 Flex Soluções Visuais",
    role: "Desenvolvedor Front-end / Mobile",
    period: "set/2024 – mai/2025",
    start: 2024,
    place: "Rio de Janeiro · presencial",
    summary: "Modernização dos sistemas usados pela operação logística da empresa.",
    highlights: [
      "App mobile em React Native para motoristas, digitalizando processos operacionais.",
      "Leitura de QR Code para listar materiais entregues e registrar pagamentos, integrada ao sistema de crédito dos clientes.",
    ],
  },
  {
    company: "Galax Suport",
    role: "Desenvolvedor React (freelance)",
    period: "jul/2024 – out/2024",
    start: 2024,
    place: "Remoto",
    summary:
      "Plataforma para empresas atendidas por uma gráfica oferecerem uma loja personalizada aos seus usuários.",
    highlights: [
      "Multitenancy por domínio: identidade visual do cliente e roteamento dos pedidos para a gráfica certa.",
      "Login com Google (OAuth) e ciclo completo do pedido, da personalização do produto ao envio.",
    ],
  },
  {
    company: "G1 Learn",
    role: "Desenvolvedor Full Stack",
    period: "jun/2023 – mar/2024",
    start: 2023,
    place: "Rio de Janeiro · híbrido",
    summary: "Plataforma LMS usada por mais de 64.000 alunos, com React, Next.js, Node.js, Laravel, Prisma e MySQL.",
    highlights: [
      "Integrações com Pagar.me e Mercado Pago, automatizando cobranças.",
      "Melhorias de performance que reduziram em cerca de 12% o tempo de carregamento.",
    ],
  },
  {
    company: "Hubfy",
    role: "Estagiário de QA e Análise de Produto",
    period: "ago/2022 – jan/2023",
    start: 2022,
    place: "Rio de Janeiro",
    summary: "Testes exploratórios e análise de concorrentes numa plataforma de ensino a distância.",
    highlights: [],
  },
];

export const education = [
  { title: "Ciência da Computação", org: "UNISUAM", period: "2020 – 2023" },
  { title: "Formação Node.js e TypeScript", org: "Rocketseat", period: "" },
  { title: "Formação React e React Native", org: "Rocketseat", period: "" },
  { title: "React e Next.js (intermediário e avançado)", org: "Udemy", period: "" },
];
