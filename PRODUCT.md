# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Principal: recrutadores e empresas de tecnologia** avaliando Rayan para uma vaga (CLT ou PJ). Chegam pelo LinkedIn, pelo currículo ou por um link enviado. Têm poucos segundos para decidir se vale abrir projetos, baixar o currículo ou entrar em contato. Muitas vezes estão no celular.

Clientes de freelance não são o público-alvo. Podem existir, mas o site não é otimizado para eles.

## Product Purpose

Portfólio pessoal de **Rayan Aguiar**, desenvolvedor full-stack. Precisa mostrar quem ele é hoje e transformar uma visita em conversa, seja um contato ou o download do currículo.

Sucesso é o recrutador sair sabendo três coisas:
- o que Rayan faz;
- quais projetos provam isso;
- como falar com ele.

## Positioning

**Full Stack Engineer com foco em backend**, com mais de 4 anos de experiência (fonte: `~/projetos/career-ops/cv.md`). O diferencial são sistemas corporativos reais:
- integrações entre plataformas e sistemas legados;
- arquitetura modular (Clean Architecture/DDD);
- autenticação centralizada (OAuth2);
- automação;
- testes em escala.

Também aprofunda arquitetura distribuída (Go, RabbitMQ, Redis, observabilidade). O front-end (React, React Native) é competência sólida, mas secundária.

**A carreira anterior em design gráfico NÃO aparece no site.** Decisão do usuário, para alinhar com o currículo.

## Operating Context

- Situação atual: **trabalha na Fadel Transportes** como desenvolvedor full-stack (desde 2025) e está **aberto a propostas**.
- Localização: Nova Iguaçu - RJ (fonte: cv.md).
- O visitante costuma vir do LinkedIn, do currículo em PDF ou de um link compartilhado no WhatsApp. O preview Open Graph importa.
- Contatos: LinkedIn `linkedin.com/in/rayan-siqueira`, GitHub `github.com/Rayan-Aguiar`, e-mail `rayansiqueira@gmail.com`, WhatsApp `+55 21 99146-0601` (fonte: `src/constants/contacts.ts`).

## Capabilities and Constraints

- Stack existente: React 18, Vite, TypeScript, Tailwind, Radix/shadcn, Framer Motion e React Router. Deploy na Vercel (`portfolio-eta-seven-32.vercel.app`).
- Idioma: **só português (pt-BR)**.
- Nome público: **Rayan Aguiar**. A URL antiga do LinkedIn ("rayan-siqueira") continua válida como link.
- Currículo: o PDF atual em `public/docs/` está obsoleto. Será substituído por um PDF **genérico** gerado a partir de `~/projetos/career-ops/cv.md`, sem adaptação para empresa nenhuma.
- **Projetos privados liberados:** forsends (web + mobile), fordriver, api-roteirizacao-brasil, facial, saas-marmoaria e OCR. Regras para eles:
  - **Nunca citar empresa, cliente ou empregador.** Falar só do projeto, da arquitetura e da stack.
  - Sem link para o código.
  - A imagem é um diagrama de arquitetura, não um print.
- Torre Movimentações e binha-finance **não** foram liberados.

## Brand Commitments

- O nome é "Rayan Aguiar". O nome completo, Rayan Siqueira de Aguiar, pode aparecer como apoio.
- A voz é em primeira pessoa, em português, direta e sem exagero.
- Não há logo nem identidade visual que precise ser preservada. O visual atual será substituído.

## Evidence on Hand

**Experiência profissional:**

| Empresa | Cargo | Período |
|---|---|---|
| Fadel Transportes | Full-Stack | 2025 até hoje |
| M2Flex | Mobile | 2024–2025 |
| G1learn | Full-Stack | 2022–2024 |

Os logos estão em `src/assets/img/`.

**Experiências e conquistas (do cv.md):** Fadel (Sênior desde dez/2025, Pleno mai–nov/2025), M2 Flex, Galax Suport (freela), G1 Learn (LMS com 64 mil alunos) e Hubfy (QA).

Conquistas mensuráveis que podem ser usadas, sempre na experiência da empresa e nunca nos cards de projeto:
- mais de 2.000 testes;
- dashboard de 3–4 s para 185 ms;
- 54 automações e cerca de 30% de produtividade, segundo a diretoria;
- plataforma de vídeos com 40 vídeos e mais de 500 horas assistidas;
- servidor OAuth2 próprio;
- agente desktop em Go.

**Formação e cursos:**
- Ciência da Computação na Unisuam (2020–2023).
- Formações Rocketseat (Node/TS e React/RN).
- Udemy React/Next.

**Idiomas:** inglês intermediário.

**Projetos já no site:**
- **Rifa Mania:** full-stack, repositório público, prints em `public/imagens/rifa/`.
- **Pousada Litorânea:** freela para cliente real, site no ar em litoranearj.com.br, prints em `public/imagens/pousada/`.

**Projetos novos que vão entrar** (confirmados pelo usuário):

| Projeto | O que é | Situação |
|---|---|---|
| NoSend | Extensão Chrome MV3, intercepta requisições, testes Playwright e2e | Público, prints em `docs/images/` do repo |
| Phone Simulator | Extensão Chrome que abre sites dentro de um aparelho simulado | Público, preview em `docs/` do repo |
| Atlas Odonto 3D | Atlas 3D de anatomia para estudantes de odontologia, 60 testes | Repo privado, site em atlas-odonto-3d.vercel.app |
| go-hls-processor | Pipeline de vídeo em Go: HLS, Redis, FFmpeg, Prometheus/Grafana | Público |
| food_delivery_platform | Microsserviços em Go com RabbitMQ, Redis e MongoDB | Público, parte "em evolução" |
| forsends (web + mobile) | E-commerce B2B de produtos gráficos (variações, pedidos, checkout) e app Expo | Privado, anônimo |
| fordriver | App React Native/Expo para motoristas: QR Code, câmera, crédito, checkout de entrega | Privado, anônimo |
| api-roteirizacao-brasil | API Node/TS sobre OSRM multi-país, Docker por país, Zod, Leaflet | Privado, anônimo |
| facial | API Fastify + face-api.js/TensorFlow, embeddings em MySQL, teste com 1 milhão de registros | Privado, anônimo |
| saas-marmoaria | Monorepo Turborepo: React + TanStack Router, Fastify, Drizzle/MySQL, Docker | Privado, anônimo |
| OCR | API Fastify + Tesseract.js com pool de workers, Sharp, Swagger | Privado, anônimo |

**O que não existe e não pode ser inventado:**
- depoimentos;
- métricas de resultado (usuários, performance, receita);
- nomes de clientes além dos já citados;
- prints dos projetos privados.

## Product Principles

1. **Prova antes de adjetivo.** Mostrar projetos reais e o que cada um resolve, em vez de afirmar que é "eficiente, escalável, inovador".
2. **Contato sempre a um passo.** Falar com Rayan ou baixar o currículo precisa estar disponível no topo e no fim da página.
3. **Atual ou fora.** O site reflete o que Rayan faz hoje. Projetos e tecnologias antigos saem ou ficam em segundo plano.
4. **Engenharia visível.** Mostrar como as coisas funcionam (arquitetura, fluxos, decisões) em vez de só telas.
5. **Leve e acessível.** Carrega rápido no celular e funciona por teclado e leitor de tela.

## Accessibility & Inclusion

Mínimo WCAG 2.2 AA:
- contraste de texto mínimo AA;
- navegação completa por teclado, inclusive nos cards e modais de projeto;
- texto alternativo descritivo nas imagens;
- respeito a `prefers-reduced-motion`.
