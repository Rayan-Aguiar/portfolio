---
version: 1
slug: "src-pages-home-index-tsx"
primary_target: "src/pages/home/index.tsx"
related_targets: ["src/router.tsx"]
---

# Surface: portfólio (home + /projetos/:slug + 404)

Mode: Experience. Build path: code-led (no image generation).

## Scope
- Audience: recrutadores e líderes técnicos (BR), chegando por LinkedIn ou WhatsApp, muitas vezes no celular.
- Job: em poucos segundos entender o que Rayan faz (full stack com foco em backend), as provas e o contato.
- Action: "Falar comigo" (WhatsApp). Secundária: "Currículo PDF".
- Routes:
  - `/` com os clipes Projetos, Experiência, Stack e Contato;
  - `/projetos/:slug` com o estudo de caso;
  - `*` com "SEM SINAL".
  - /aboutme e /technologies saem.
- Content:
  - 11 projetos atuais;
  - Rifa Mania e Pousada como arquivo no fim;
  - experiência e números do cv.md;
  - foto atual enquadrada (sem tela cheia).
- Private projects: sem empresa, sem link de código, imagem é diagrama de arquitetura.

## Direction contract
THESIS: The portfolio is seen through a camcorder viewfinder. The subject and the work sit in the center, and the OSD ranks one fact per corner. It refuses the category default: a dark navy hero with name and badges over an equal-weight card grid.

OWN-WORLD:
- Letterbox black ground (#0A0A0A) and white OSD ink.
- Caution amber as the only accent, used for the action, warnings and "aberto a propostas".
- HUD gray hairlines and a 1px-dot HUD grid.
- Diagonal zebra stripes as the only texture, reserved for "em evolução" and for highlights.
- Segmented display face for headlines, readouts and counters; readable mono/grotesk for body.
- Corner focus brackets on every interactive element. They are also the focus-visible ring.

STORY: The visitor sees Rayan locked in focus, reads one line of what he builds, and sees two bracketed actions. They scroll W→T: project clips, then a tape log of experience with real figures, then stack, then an end card with contacts. Opening a clip zooms to T: a full-frame architecture diagram, with stack, type and status as OSD readouts.

FIRST VIEWPORT:
- A full-bleed viewfinder frame with safe-area corner brackets.
- Center-right: the photo framed inside focus brackets that snap tight on load.
- Corners:
  - top-left: name and "Full Stack · Backend";
  - top-right: "● REC" and the tape counter;
  - bottom-left: Nova Iguaçu/RJ and "4+ anos";
  - bottom-right: "Aberto a propostas", in amber.
- Left column: a segmented headline (2–3 lines), one body line, an amber bracketed "Falar comigo" and an outlined "Currículo PDF".
- Bottom center: the W—T zoom bar.

FORM: Camcorder viewfinder (challenger pop-culture-shelf-viewfinder-bracket-hud), adopted by the user over the assigned direction. seed:b6626d5c6f6385ab

Signature interaction: the zoom bar glides W→T with stepped easing as you scroll and when you open a project. The cut between views is a single-frame cut. Focus brackets snap around the targeted element. Under reduced motion, everything is static.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open decisions
- Generic CV PDF is generated from ~/projetos/career-ops/cv.md.
