/**
 * Projetos do portfólio. Os projetos privados NUNCA citam empresa, cliente
 * ou empregador: só o projeto, a arquitetura e a stack (regra do Rayan).
 */

export type NodeKind = "client" | "service" | "store" | "queue" | "external" | "planned";

export interface DiagramNode {
  id: string;
  label: string;
  sub?: string;
  /** Centro do nó, no viewBox 1200 × 600. */
  x: number;
  y: number;
  w?: number;
  kind?: NodeKind;
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: string;
  /** Comunicação assíncrona (fila, evento): traço tracejado. */
  async?: boolean;
  /** Caminho principal do fluxo: âmbar. */
  main?: boolean;
}

export interface Diagram {
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

export type Media =
  | { type: "image"; src: string; alt: string; frame?: "phone" }
  | { type: "diagram"; diagram: Diagram; alt: string };

export interface Project {
  slug: string;
  title: string;
  kind: string;
  year: number;
  status: "estável" | "em evolução" | "arquivo";
  visibility: "privado" | "código aberto";
  summary: string;
  problem: string;
  built: string[];
  architecture: string[];
  stack: string[];
  media: Media;
  gallery?: { src: string; alt: string }[];
  links?: { repo?: string; site?: string };
}

export const projects: Project[] = [
  {
    slug: "roteirizacao-multi-pais",
    title: "API de roteirização multi-país",
    kind: "API",
    year: 2025,
    status: "estável",
    visibility: "privado",
    summary: "Rotas, distâncias e matrizes de tempo para cinco países, numa API REST única sobre OSRM.",
    problem:
      "Calcular rotas e matrizes de distância em escala sem depender de APIs pagas de mapas, e atender países diferentes pela mesma porta de entrada.",
    built: [
      "API REST em Node.js e TypeScript com Fastify, validação de entrada com Zod e autenticação por token.",
      "Roteamento por país via header x-country: Brasil, México, África do Sul, Gana e Paraguai.",
      "Endpoints de rota, ponto mais próximo (nearest) e matriz de distâncias/tempos (table).",
      "Documentação Swagger protegida e uma página simples com Leaflet para conferir as rotas no mapa.",
    ],
    architecture: [
      "Cada país roda o seu próprio container OSRM, com o mapa do OpenStreetMap pré-processado.",
      "Os países ativos são definidos por variável de ambiente; o deploy sobe só os containers necessários.",
      "A API não guarda estado: só valida, escolhe o motor do país e repassa a consulta.",
    ],
    stack: ["Node.js", "TypeScript", "Fastify", "Zod", "OSRM", "Docker Compose", "Swagger", "Leaflet"],
    media: {
      type: "diagram",
      alt: "Diagrama: o cliente chama a API Fastify, que valida o token e encaminha a consulta para o container OSRM do país informado no header.",
      diagram: {
        nodes: [
          { id: "client", label: "Cliente", sub: "x-country · token", x: 130, y: 300, kind: "client" },
          { id: "api", label: "API Fastify", sub: "Zod · auth · Swagger", x: 430, y: 300 },
          { id: "router", label: "Seletor de país", sub: "ATIVOS no .env", x: 720, y: 300 },
          { id: "br", label: "OSRM · BR", x: 1030, y: 90, kind: "store" },
          { id: "mx", label: "OSRM · MX", x: 1030, y: 195, kind: "store" },
          { id: "za", label: "OSRM · ZA", x: 1030, y: 300, kind: "store" },
          { id: "gh", label: "OSRM · GH", x: 1030, y: 405, kind: "store" },
          { id: "py", label: "OSRM · PY", x: 1030, y: 510, kind: "store" },
          { id: "map", label: "Mapa Leaflet", sub: "conferência visual", x: 430, y: 500, kind: "client" },
        ],
        edges: [
          { from: "client", to: "api", label: "GET /route", main: true },
          { from: "api", to: "router", main: true },
          { from: "router", to: "br", main: true },
          { from: "router", to: "mx" },
          { from: "router", to: "za" },
          { from: "router", to: "gh" },
          { from: "router", to: "py" },
          { from: "map", to: "api" },
        ],
      },
    },
  },
  {
    slug: "ocr-documentos",
    title: "Validação de documentos por OCR",
    kind: "API",
    year: 2025,
    status: "estável",
    visibility: "privado",
    summary: "Extração de texto de imagens com pré-processamento e um pool de workers do Tesseract.",
    problem:
      "Ler documentos enviados como foto sem travar a API: o OCR é pesado, e cada imagem chega com qualidade diferente.",
    built: [
      "API Fastify com upload multipart e respostas tipadas com Zod.",
      "Pré-processamento das imagens com Sharp antes do reconhecimento.",
      "Pool de workers do Tesseract.js, reaproveitados entre requisições, com o modelo de português em cache local.",
      "Limpeza automática dos arquivos temporários e documentação Swagger.",
    ],
    architecture: [
      "Camadas separadas: rotas, controller, serviço de OCR, processamento de imagem e pool de workers.",
      "O pool limita a concorrência e evita carregar o modelo a cada requisição.",
    ],
    stack: ["Node.js", "TypeScript", "Fastify", "Tesseract.js", "Sharp", "Zod", "Swagger"],
    media: {
      type: "diagram",
      alt: "Diagrama: a imagem enviada passa pelo pré-processamento com Sharp, entra no pool de workers do Tesseract e volta como texto.",
      diagram: {
        nodes: [
          { id: "client", label: "Cliente", sub: "upload multipart", x: 130, y: 220, kind: "client" },
          { id: "api", label: "API Fastify", sub: "rotas · Zod", x: 410, y: 220 },
          { id: "sharp", label: "Pré-processamento", sub: "Sharp", x: 690, y: 220 },
          { id: "pool", label: "Pool de workers", sub: "Tesseract.js", x: 980, y: 220 },
          { id: "model", label: "Modelo por", sub: "cache local", x: 980, y: 430, kind: "store" },
          { id: "clean", label: "Limpeza", sub: "arquivos temporários", x: 410, y: 430, kind: "planned" },
        ],
        edges: [
          { from: "client", to: "api", label: "imagem", main: true },
          { from: "api", to: "sharp", main: true },
          { from: "sharp", to: "pool", main: true },
          { from: "model", to: "pool" },
          { from: "api", to: "clean", async: true },
        ],
      },
    },
  },
  {
    slug: "pipeline-video-hls",
    title: "Pipeline de vídeo HLS em Go",
    kind: "Backend",
    year: 2026,
    status: "estável",
    visibility: "código aberto",
    summary: "Upload, fila, worker com FFmpeg e playback adaptativo, com progresso em tempo real e observabilidade.",
    problem:
      "Transformar uploads de vídeo em streaming adaptativo sem deixar a API lenta, e sem perder jobs quando algo falha no meio do caminho.",
    built: [
      "API HTTP em Go com upload multipart, validação e persistência imediata do job no PostgreSQL.",
      "Fila em Redis com worker pool de concorrência configurável, timeout por job, retry com backoff exponencial e dead-letter queue.",
      "Conversão para HLS em várias qualidades com FFmpeg, mais thumbnail por vídeo.",
      "Progresso em tempo real via SSE e Redis Pub/Sub, sem polling.",
      "Recovery automático de jobs presos em processamento.",
    ],
    architecture: [
      "PostgreSQL é a fonte da verdade; Redis só orquestra a fila e os eventos.",
      "API, worker, fila e storage separados, para escalar cada parte de forma independente.",
      "Métricas no Prometheus e dashboards provisionados no Grafana.",
    ],
    stack: ["Go", "PostgreSQL", "Redis", "FFmpeg", "SSE", "Prometheus", "Grafana", "Docker"],
    media: {
      type: "diagram",
      alt: "Diagrama: o upload chega na API Go, vira um job no PostgreSQL e na fila Redis; o worker converte com FFmpeg para HLS e publica o progresso por Pub/Sub e SSE.",
      diagram: {
        nodes: [
          { id: "client", label: "Upload", sub: "navegador", x: 120, y: 160, kind: "client" },
          { id: "api", label: "API Go", sub: "multipart · SSE", x: 390, y: 160 },
          { id: "pg", label: "PostgreSQL", sub: "jobs · metadados", x: 390, y: 400, kind: "store" },
          { id: "queue", label: "Fila Redis", sub: "retry · DLQ", x: 660, y: 160, kind: "queue" },
          { id: "worker", label: "Worker pool", sub: "Go", x: 930, y: 160 },
          { id: "ffmpeg", label: "FFmpeg", sub: "HLS multi-qualidade", x: 930, y: 400, kind: "external" },
          { id: "pubsub", label: "Pub/Sub", sub: "SSE no navegador", x: 660, y: 400, kind: "queue" },
          { id: "metrics", label: "Prometheus", sub: "métricas · Grafana", x: 120, y: 400, kind: "external" },
        ],
        edges: [
          { from: "client", to: "api", main: true },
          { from: "api", to: "queue", label: "job", main: true, async: true },
          { from: "queue", to: "worker", main: true, async: true },
          { from: "worker", to: "ffmpeg", main: true },
          { from: "api", to: "pg" },
          { from: "ffmpeg", to: "pubsub", async: true },
        ],
      },
    },
    links: { repo: "https://github.com/Rayan-Aguiar/go-hls-processor" },
  },
  {
    slug: "ecommerce-b2b-grafico",
    title: "E-commerce B2B de produtos gráficos",
    kind: "Web + app",
    year: 2024,
    status: "estável",
    visibility: "privado",
    summary: "Catálogo com variações de impressão, pedidos personalizados e checkout, na web e num app Expo.",
    problem:
      "Vender produtos gráficos em que cada item tem papel, gramatura, cor, formato e acabamento, e acompanhar pedidos que exigem envio de arquivos.",
    built: [
      "Front-end web em React e TypeScript: catálogo por categorias, variações customizáveis, carrinho persistente e checkout.",
      "Gestão de pedidos com previsão de entrega e reenvio de arquivos, sem duplicar os acabamentos já vinculados.",
      "Tabela de preços por categoria e variação, com TanStack Table.",
      "App em React Native (Expo) com login, pedidos, detalhes, pagamentos e tabela de preços.",
    ],
    architecture: [
      "Web e app consomem a mesma API REST, com formulários validados por React Hook Form e Zod.",
      "Qualidade garantida com ESLint, Prettier, Husky e lint-staged; deploy em Docker.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Native", "Expo", "Zod"],
    media: {
      type: "diagram",
      alt: "Diagrama: a loja web e o app mobile consomem a mesma API REST de pedidos, catálogo e preços.",
      diagram: {
        nodes: [
          { id: "web", label: "Loja web", sub: "React · Vite", x: 170, y: 170, kind: "client" },
          { id: "app", label: "App mobile", sub: "Expo · RN", x: 170, y: 430, kind: "client" },
          { id: "forms", label: "Variações", sub: "RHF · Zod", x: 470, y: 170 },
          { id: "orders", label: "Pedidos", sub: "arquivos · entrega", x: 470, y: 430 },
          { id: "api", label: "API REST", sub: "catálogo · preços", x: 820, y: 300, kind: "external" },
          { id: "checkout", label: "Checkout", x: 1060, y: 300 },
        ],
        edges: [
          { from: "web", to: "forms", main: true },
          { from: "forms", to: "api", main: true },
          { from: "app", to: "orders" },
          { from: "orders", to: "api" },
          { from: "api", to: "checkout", main: true },
        ],
      },
    },
  },
  {
    slug: "saas-marmoraria",
    title: "SaaS para marmorarias",
    kind: "Plataforma",
    year: 2026,
    status: "estável",
    visibility: "privado",
    summary: "Monorepo com API em Clean Architecture, web em TanStack Router e banco MySQL com Drizzle.",
    problem:
      "Organizar pedidos, usuários e configurações de uma marmoraria num produto único, pronto para rodar em qualquer ambiente com a mesma imagem.",
    built: [
      "API Fastify dividida em domínio, casos de uso e infraestrutura, com JWT, rate limit, Helmet e testes com Vitest.",
      "Upload de arquivos com validação de segurança e URLs assinadas no S3.",
      "Web em React com TanStack Router e Query, formulários com React Hook Form e geração de PDF.",
      "Schema e migrations com Drizzle ORM num pacote compartilhado.",
    ],
    architecture: [
      "Turborepo com apps/web, apps/server e pacotes ui e db compartilhados.",
      "Docker Compose de produção: a web lê a URL da API em runtime, então a mesma imagem serve em qualquer ambiente.",
    ],
    stack: ["TypeScript", "Fastify", "React", "TanStack Router", "Drizzle", "MySQL", "AWS S3", "Turborepo", "Docker"],
    media: {
      type: "diagram",
      alt: "Diagrama: a web em React fala com a API Fastify organizada em domínio, casos de uso e infraestrutura, que persiste no MySQL via Drizzle e guarda arquivos no S3.",
      diagram: {
        nodes: [
          { id: "web", label: "Web", sub: "TanStack Router", x: 140, y: 300, kind: "client" },
          { id: "http", label: "HTTP", sub: "Fastify · JWT", x: 420, y: 300 },
          { id: "uc", label: "Casos de uso", sub: "application", x: 680, y: 160 },
          { id: "domain", label: "Domínio", sub: "entidades", x: 680, y: 440 },
          { id: "db", label: "MySQL", sub: "Drizzle · pacote db", x: 990, y: 160, kind: "store" },
          { id: "s3", label: "S3", sub: "URLs assinadas", x: 990, y: 440, kind: "external" },
        ],
        edges: [
          { from: "web", to: "http", main: true },
          { from: "http", to: "uc", main: true },
          { from: "uc", to: "domain" },
          { from: "uc", to: "db", main: true },
          { from: "uc", to: "s3" },
        ],
      },
    },
  },
  {
    slug: "reconhecimento-facial",
    title: "API de reconhecimento facial",
    kind: "API",
    year: 2026,
    status: "estável",
    visibility: "privado",
    summary: "Cadastro e verificação de rostos por embeddings, testada com um milhão de registros.",
    problem:
      "Verificar se um rosto já está cadastrado comparando vetores, e saber como a busca se comporta com uma base grande.",
    built: [
      "Geração de embeddings faciais de 128 dimensões com face-api.js e TensorFlow.js.",
      "API Fastify com rotas de cadastro (/register) e verificação (/verify), que devolve o registro correspondente.",
      "Persistência dos embeddings em MySQL, com tabela criada automaticamente.",
      "Script que popula a base com um milhão de embeddings para testar carga.",
    ],
    architecture: [
      "A captura e a extração do vetor acontecem no cliente; a API só compara e guarda vetores.",
    ],
    stack: ["Node.js", "Fastify", "face-api.js", "TensorFlow.js", "MySQL"],
    media: {
      type: "diagram",
      alt: "Diagrama: o cliente extrai o embedding do rosto e envia para a API, que cadastra ou compara com os vetores guardados no MySQL.",
      diagram: {
        nodes: [
          { id: "cam", label: "Câmera", sub: "navegador", x: 130, y: 300, kind: "client" },
          { id: "emb", label: "Embedding", sub: "face-api.js · 128 floats", x: 420, y: 300 },
          { id: "reg", label: "POST /register", x: 720, y: 170 },
          { id: "ver", label: "POST /verify", x: 720, y: 430 },
          { id: "db", label: "MySQL", sub: "1M embeddings", x: 1020, y: 300, kind: "store" },
        ],
        edges: [
          { from: "cam", to: "emb", main: true },
          { from: "emb", to: "ver", main: true },
          { from: "emb", to: "reg" },
          { from: "reg", to: "db" },
          { from: "ver", to: "db", label: "match", main: true },
        ],
      },
    },
  },
  {
    slug: "app-entregas",
    title: "App de entregas para motoristas",
    kind: "Mobile",
    year: 2025,
    status: "estável",
    visibility: "privado",
    summary: "Motoristas registram a entrega pelo celular: QR Code, foto de comprovante e uso de crédito.",
    problem:
      "Tirar do papel a conclusão das entregas, para que o motorista confirme materiais e pagamento na hora, em qualquer celular ou tablet.",
    built: [
      "App em React Native com Expo, Expo Router e NativeWind.",
      "Leitura de QR Code pela câmera para listar os materiais da entrega.",
      "Fluxo de checkout em etapas, com foto de comprovante, motivo de ocorrência e uso de crédito do cliente.",
      "Formulários com React Hook Form e Zod, sessão com AsyncStorage.",
    ],
    architecture: [
      "Contextos separados para autenticação e para o pedido em andamento, compartilhados pelas telas do checkout.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "NativeWind", "Expo Camera", "Zod"],
    media: {
      type: "diagram",
      alt: "Diagrama do fluxo do app: login, lista de pedidos, leitura do QR Code, foto do comprovante, uso de crédito e conclusão enviada à API.",
      diagram: {
        nodes: [
          { id: "login", label: "Login", x: 120, y: 160, w: 160, kind: "client" },
          { id: "orders", label: "Pedidos", x: 340, y: 160, w: 160 },
          { id: "qr", label: "QR Code", sub: "câmera", x: 560, y: 160, w: 160 },
          { id: "photo", label: "Comprovante", sub: "foto", x: 780, y: 160, w: 160 },
          { id: "credit", label: "Crédito", sub: "do cliente", x: 1010, y: 160, w: 160 },
          { id: "api", label: "API REST", sub: "conclusão da entrega", x: 1010, y: 430, kind: "external" },
          { id: "ctx", label: "OrderContext", sub: "estado do checkout", x: 560, y: 430, kind: "store" },
        ],
        edges: [
          { from: "login", to: "orders", main: true },
          { from: "orders", to: "qr", main: true },
          { from: "qr", to: "photo", main: true },
          { from: "photo", to: "credit", main: true },
          { from: "credit", to: "api", main: true },
          { from: "qr", to: "ctx", async: true },
        ],
      },
    },
  },
  {
    slug: "nosend",
    title: "NoSend",
    kind: "Extensão Chrome",
    year: 2026,
    status: "estável",
    visibility: "código aberto",
    summary: "Bloqueia as requisições de uma página antes de saírem do navegador e mostra o que teria sido enviado.",
    problem:
      "Inspecionar formulários, checkouts e integrações sem tocar no servidor: nada é criado, cobrado ou enviado do outro lado.",
    built: [
      "Bloqueio na pilha de rede do Chrome com declarativeNetRequest, antes de qualquer conexão.",
      "Captura de fetch, XHR, sendBeacon, WebSocket e EventSource, com headers e body interpretados (JSON, form e multipart).",
      "Modo Segurar: a requisição fica pendente até você Liberar (uma vez) ou Descartar.",
      "Status que só mostra PROTEGIDO depois de verificar o bloqueio; copiar como cURL.",
    ],
    architecture: [
      "Manifest V3, TypeScript strict e 100% local: sem analytics e sem chamadas externas.",
      "Testes e2e com Playwright provam que o servidor recebe zero requisições.",
    ],
    stack: ["TypeScript", "Chrome MV3", "declarativeNetRequest", "Playwright"],
    media: {
      type: "image",
      src: "/imagens/projetos/nosend-dark.webp",
      alt: "Visualizador do NoSend em tema escuro mostrando um upload multipart bloqueado, com headers e o arquivo interpretado.",
    },
    gallery: [
      { src: "/imagens/projetos/nosend.webp", alt: "Visualizador do NoSend com um POST JSON bloqueado e seu payload." },
    ],
    links: { repo: "https://github.com/Rayan-Aguiar/NoSend" },
  },
  {
    slug: "atlas-odonto-3d",
    title: "Atlas Odonto 3D",
    kind: "Web 3D",
    year: 2026,
    status: "em evolução",
    visibility: "privado",
    summary: "Atlas interativo de anatomia de cabeça e pescoço para estudantes de odontologia, com modelo 3D real.",
    problem:
      "Estudar anatomia com um modelo navegável em que cada estrutura pode ser selecionada, filtrada e consultada com fontes citadas.",
    built: [
      "Visualizador em React Three Fiber com 507 malhas individualizadas em 8 módulos carregados sob demanda.",
      "Seleção por raycasting com BVH, destaque em raio-X para estruturas encobertas e vistas predefinidas.",
      "Catálogo anatômico tipado com 343 registros e verificação calculada a partir das citações.",
      "Filtros que controlam a cena e a lista ao mesmo tempo, busca global por teclado e modo de estudo.",
    ],
    architecture: [
      "Cada malha corresponde a exatamente um registro do catálogo, garantido por teste (60 testes com Vitest).",
      "Acessível: navegação por teclado, foco visível, alvos de 44 px e prefers-reduced-motion.",
    ],
    stack: ["React", "TypeScript", "Three.js", "React Three Fiber", "Vite", "Vitest"],
    media: {
      type: "image",
      src: "/imagens/projetos/atlas-odonto-3d.webp",
      alt: "Atlas Odonto 3D: crânio em 3D no centro, filtros de camadas à esquerda e a lista de estruturas para começar à direita.",
    },
    links: { site: "https://atlas-odonto-3d.vercel.app" },
  },
  {
    slug: "phone-simulator",
    title: "Phone Simulator",
    kind: "Extensão Chrome",
    year: 2026,
    status: "estável",
    visibility: "código aberto",
    summary: "Abre qualquer site dentro de um aparelho simulado, com o mesmo login, cookies e User-Agent.",
    problem:
      "Testar um site como no celular sem perder a sessão, coisa que o modo responsivo do DevTools não resolve.",
    built: [
      "61 aparelhos com moldura própria e recorte de tela por máscara SVG (notch, Dynamic Island, cantos).",
      "Spoofing de navigator, screen, devicePixelRatio, matchMedia e User-Agent, inclusive no cabeçalho HTTP.",
      "Até 6 aparelhos lado a lado com sincronização de rolagem, cliques e digitação.",
      "Captura de tela com editor de imagem e gravação de vídeo em WebM.",
    ],
    architecture: [
      "Service worker MV3 cria regras de rede só naquela aba; a página de cima vira uma casca sem scripts do site.",
      "O site roda num iframe do mesmo domínio e um content script no mundo MAIN falsifica as APIs antes de tudo.",
    ],
    stack: ["JavaScript", "Chrome MV3", "declarativeNetRequest", "SVG"],
    media: {
      type: "image",
      src: "/imagens/projetos/phone-simulator.webp",
      alt: "Página do Google aberta dentro de um Xiaomi Mi 11i simulado pela extensão.",
      frame: "phone",
    },
    links: { repo: "https://github.com/Rayan-Aguiar/phone-simulator" },
  },
  {
    slug: "delivery-microsservicos",
    title: "Plataforma de delivery em microsserviços",
    kind: "Backend",
    year: 2026,
    status: "em evolução",
    visibility: "código aberto",
    summary: "Laboratório de arquitetura distribuída em Go: eventos, mensageria, resiliência e observabilidade.",
    problem:
      "Praticar os problemas reais de sistemas distribuídos (consistência, falhas, filas, rastreio) num domínio parecido com apps de delivery.",
    built: [
      "Auth Service com JWT, refresh token e revogação de sessão.",
      "Fundação compartilhada: contratos de eventos, broker, middlewares, logger e erros.",
      "API Gateway como entrada única, com autenticação e roteamento.",
      "Retry, tratamento de falhas e dead-letter queues no RabbitMQ.",
    ],
    architecture: [
      "Um banco por domínio (MongoDB e PostgreSQL), comunicação assíncrona por eventos.",
      "Restaurant, Order (saga), Payment, Delivery e Notification estão planejados, em fases.",
      "Observabilidade com Prometheus, Grafana e Jaeger.",
    ],
    stack: ["Go", "RabbitMQ", "Redis", "MongoDB", "PostgreSQL", "Docker", "Jaeger"],
    media: {
      type: "diagram",
      alt: "Diagrama: o API Gateway autentica pelo Auth Service e publica eventos no RabbitMQ; os serviços de pedido, pagamento e entrega aparecem tracejados como planejados.",
      diagram: {
        nodes: [
          { id: "client", label: "Apps", x: 110, y: 300, w: 150, kind: "client" },
          { id: "gw", label: "API Gateway", sub: "auth · rotas", x: 350, y: 300 },
          { id: "auth", label: "Auth Service", sub: "JWT · refresh", x: 350, y: 90 },
          { id: "redis", label: "Redis", sub: "cache", x: 350, y: 510, kind: "store" },
          { id: "mq", label: "RabbitMQ", sub: "eventos · DLQ", x: 640, y: 300, kind: "queue" },
          { id: "rest", label: "Restaurant", x: 940, y: 90, kind: "planned" },
          { id: "order", label: "Order · saga", x: 940, y: 230, kind: "planned" },
          { id: "pay", label: "Payment", x: 940, y: 370, kind: "planned" },
          { id: "deliv", label: "Delivery", x: 940, y: 510, kind: "planned" },
        ],
        edges: [
          { from: "client", to: "gw", main: true },
          { from: "gw", to: "auth", main: true },
          { from: "gw", to: "redis" },
          { from: "gw", to: "mq", async: true },
          { from: "mq", to: "rest", async: true },
          { from: "mq", to: "order", async: true },
          { from: "mq", to: "pay", async: true },
          { from: "mq", to: "deliv", async: true },
        ],
      },
    },
    links: { repo: "https://github.com/Rayan-Aguiar/food_delivery_platform" },
  },
];

/** Projetos antigos, mantidos como arquivo no fim da fita. */
export const archive: Project[] = [
  {
    slug: "rifa-mania",
    title: "Rifa Mania",
    kind: "Full stack",
    year: 2024,
    status: "arquivo",
    visibility: "código aberto",
    summary: "Sistema de rifas online com venda de tickets, links compartilháveis e sorteio automático.",
    problem: "Permitir que qualquer pessoa crie uma rifa, venda tickets por link e acompanhe o sorteio sem planilhas.",
    built: [
      "Backend em Node.js com Prisma e banco SQL; frontend em React e TypeScript.",
      "Painel do organizador, página de venda compartilhável, checkout e tela de sorteio com o vencedor.",
    ],
    architecture: ["Status das rifas atualizados automaticamente conforme vendas e data do sorteio."],
    stack: ["React", "TypeScript", "Node.js", "Prisma", "SQL"],
    media: {
      type: "image",
      src: "/imagens/rifa/landing-page.webp",
      alt: "Landing page do Rifa Mania.",
    },
    gallery: [
      { src: "/imagens/rifa/dashboard.webp", alt: "Painel do organizador com as rifas." },
      { src: "/imagens/rifa/pagina-venda.webp", alt: "Página de venda de tickets." },
      { src: "/imagens/rifa/checkout.webp", alt: "Checkout da compra de tickets." },
      { src: "/imagens/rifa/sorteio.webp", alt: "Tela de sorteio mostrando o vencedor." },
    ],
    links: { repo: "https://github.com/Rayan-Aguiar/rifa_mania" },
  },
  {
    slug: "pousada-litoranea",
    title: "Pousada Litorânea",
    kind: "Site",
    year: 2022,
    status: "arquivo",
    visibility: "privado",
    summary: "Site de uma pousada real, feito como freelance, integrado ao sistema de reservas do Booking.",
    problem: "Dar à pousada um site próprio que mostre quartos e comodidades e leve o hóspede direto à reserva.",
    built: [
      "Site em HTML, CSS e JavaScript com galeria de fotos, quartos, comodidades e contato.",
      "Integração com o motor de reservas do Booking.",
    ],
    architecture: ["Site estático, leve e sem dependências."],
    stack: ["HTML", "CSS", "JavaScript"],
    media: {
      type: "image",
      src: "/imagens/pousada/home.webp",
      alt: "Página inicial do site da Pousada Litorânea.",
    },
    gallery: [
      { src: "/imagens/pousada/galeria.webp", alt: "Galeria de fotos da pousada." },
      { src: "/imagens/pousada/contato.webp", alt: "Página de contato da pousada." },
    ],
    links: { site: "https://litoranearj.com.br/index.html" },
  },
];

export const allProjects = [...projects, ...archive];

export function findProject(slug: string | undefined) {
  return allProjects.find((p) => p.slug === slug);
}
