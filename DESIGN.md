---
name: Rayan Aguiar — Portfólio
description: O portfólio visto pelo visor de uma filmadora; o trabalho no centro, os fatos nos cantos.
colors:
  letterbox: "#0a0a0a"
  raise: "#141414"
  osd: "#f2f2ee"
  osd-dim: "#a9adb1"
  hud: "#2a2f33"
  hud-line: "#3a4046"
  amber: "#ffb000"
  amber-ink: "#0a0a0a"
typography:
  display:
    fontFamily: "Doto Variable, Doto, ui-monospace, monospace"
    fontSize: "clamp(2.5rem, 4.6vw, 4.75rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "0em"
  headline:
    fontFamily: "Doto Variable, Doto, ui-monospace, monospace"
    fontSize: "clamp(2.25rem, 4.2vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
  title:
    fontFamily: "Doto Variable, Doto, ui-monospace, monospace"
    fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.05
  title-sm:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  lede:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.16em"
  button:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    letterSpacing: "0.12em"
  readout-seg:
    fontFamily: "DSEG14, Doto Variable, ui-monospace, monospace"
    fontSize: "1.75rem"
    fontWeight: 700
    letterSpacing: "0.06em"
    fontFeature: "tnum"
  readout-dot:
    fontFamily: "Doto Variable, Doto, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 800
    letterSpacing: "0.04em"
    fontFeature: "tnum"
rounded:
  none: "0px"
  rec-dot: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
  safe-inset: "14px"
  bar: "56px"
  gutter: "clamp(20px, 5vw, 88px)"
  wrap-max: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#ffc23d"
    textColor: "{colors.amber-ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.osd}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "52px"
  button-outline-hover:
    backgroundColor: "{colors.osd}"
    textColor: "{colors.letterbox}"
  nav-link:
    textColor: "{colors.osd-dim}"
    typography: "{typography.label}"
    padding: "8px 12px"
  nav-link-active:
    textColor: "{colors.osd}"
  viewfinder-bar:
    backgroundColor: "{colors.letterbox}"
    textColor: "{colors.osd}"
    height: "{spacing.bar}"
    padding: "0 {spacing.gutter}"
  tag:
    textColor: "{colors.osd-dim}"
    typography: "{typography.label}"
  stack-chip:
    backgroundColor: "transparent"
    textColor: "{colors.osd}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  clip-row:
    backgroundColor: "transparent"
    textColor: "{colors.osd}"
    padding: "22px 0"
  clip-row-hover:
    backgroundColor: "{colors.raise}"
  scene:
    backgroundColor: "{colors.letterbox}"
    rounded: "{rounded.none}"
---

# Design System: Rayan Aguiar — Portfólio

## Overview

**Creative North Star: "The Camcorder Viewfinder"**

Everything is seen through a viewfinder. A letterbox-black ground fills the frame, fixed top and bottom bars hold the chrome, and four white safe-area corners mark the picture. Content sits in the middle of the frame. Facts sit in the corners as small uppercase on-screen-display (OSD) readouts: name, REC and a tape counter, location, status. The visitor moves from wide (W) to tele (T). A stepped zoom bar on the bottom bar tracks the scroll, and opening a project zooms to T, where a full-frame architecture diagram or screenshot carries its readouts in its own corners.

The look is dense and mechanical, and it never gets decorative. Surfaces are flat black, separated by hairlines. Type comes in two registers: dot-matrix and segmented faces for headlines and readouts, and a clear grotesk for everything a person actually reads. All motion is stepped, like hardware. The site is pt-BR only, and every label is written in Portuguese.

**Key Characteristics:**
- Letterbox black ground with white OSD ink and one accent, caution amber.
- Corner brackets as the main mark: safe area, autofocus lock, focus/hover ring, resting button frame, diagram nodes, favicon.
- Square everywhere. The only round shape is the blinking REC dot.
- Flat. Depth comes from hairlines, a 1px-dot HUD grid, and the fixed letterbox bars.
- Stepped motion only: `steps()` timing, a single-frame black cut between views.

## Colors

A near-monochrome camera palette: black field, white-and-gray OSD, cool HUD grays, and one amber signal.

### Primary
- **Caution Amber** (amber): the live signal. It marks the primary action ("Falar comigo", the filled button), the status "Aberto a propostas", the REC dot and label, the autofocus brackets, focus brackets on list rows and contacts, the current job's year, metric figures in the experience readings, case-study column labels, and the clip number on hover. It also serves as `::selection`, `accent-color` and `caret-color`.
- **Amber Ink** (amber-ink): the text color on amber fills. It has the same value as Letterbox but stays a separate role.

### Neutral
- **Letterbox Black** (letterbox): page ground, bars, scene backgrounds, diagram canvas, node fills. The OS chrome follows it too (`theme-color`).
- **Raised Black** (raise): the only lifted tone. Used solely as the soft horizontal band behind a hovered clip row.
- **OSD White** (osd): primary text, outline-button stroke, outline-button hover fill, safe-area corners, zebra stripe ink.
- **OSD Dim** (osd-dim): secondary text such as ledes, summaries, metadata, inactive nav, tags, list dashes. About 8.9:1 on Letterbox, so it is safe for running text.
- **HUD Gray** (hud): structural hairlines (1px) for bar borders, row dividers, scene borders, and the stack-section dot grid.
- **HUD Line** (hud-line): a slightly brighter rule for dashed reading dividers, chip borders, the scrollbar thumb, zoom-track ticks, and the diagram dot grid.

### Named Rules
**The One Signal Rule.** Amber is the only hue. It marks what is live, current or actionable: the action, the status, the focused target, the figure that matters. Don't add a second accent, and don't use amber as a surface tint or large decorative field. The filled primary button is the largest amber area.

**The Zebra Reservation Rule.** Diagonal zebra stripes (135°, 6px ink / 6px gap, in OSD White) are the only texture. They mark two things: a project that is still "em evolução" (a 26×14px swatch in its tag) and the end-of-tape band above "Fim da fita."

## Typography

**Display Font:** Doto (variable dot-matrix), with ui-monospace fallback
**Body Font:** Archivo (variable grotesk), with system-ui fallback
**Readout Font:** DSEG14 Modern Bold (self-hosted 14-segment), falling back to Doto

**Character:** The dot-matrix face shouts like a camera's character generator. Archivo stays plain and fully legible underneath it. DSEG14 is the hardware LCD, and it appears only where digits are large enough to read.

### Hierarchy
- **Display** (Doto 800, clamp(2.5rem, 4.6vw, 4.75rem), lh 1.02, balanced): the opening headline. The same face scales up for "Fim da fita." (clamp(3rem, 8vw, 6rem)), "SEM SINAL" and case-study titles. These are uppercase except the hero, whose copy is already set in capitals.
- **Headline** (Doto 800, clamp(2.25rem, 4.2vw, 3.75rem), lh 1, uppercase): section titles (Projetos, Experiência, Stack).
- **Title** (Doto 800, clamp(1.75rem, 2.6vw, 2.5rem), lh 1.05): the featured clip's title.
- **Title Small** (Archivo 700, 1.25rem, lh 1.25): clip titles, company names (1.375rem), next/prev case links.
- **Lede** (Archivo 400, clamp(1.0625rem, 1.3vw, 1.25rem), lh 1.55, OSD Dim, max 58ch): one-paragraph intros. Inline `strong` returns to OSD White at 600.
- **Body** (Archivo 400, 1.0625rem → 1rem under 760px, lh 1.6): running text, max 68–72ch in experience.
- **Label** (Archivo 700, 0.75rem, 0.16em tracking, uppercase, OSD Dim): OSD corner readouts, tags (0.6875rem), fact keys, link-type keys. Bar text is 0.8125rem at 0.14em.
- **Button** (Archivo 700, 0.95rem, 0.12em tracking, uppercase).
- **Readout, segmented** (DSEG14 700, 0.06em tracking, tabular): the tape counter (0.875rem) and large years in the experience log (1.75rem).
- **Readout, dot** (Doto 800, 0.04em tracking, tabular): small numbers such as clip numbers, reel codes, counts, metric figures (1.375rem, amber), project years in scene corners.

### Named Rules
**The Segment-Where-Legible Rule.** DSEG14 has no accented glyphs and blurs at small sizes. Use it only for digits in the tape counter and for large years. Every other readout uses Doto, and any word with Portuguese diacritics uses Doto or Archivo.

**The Readable Floor Rule.** Dot and segment faces are for headlines and short readouts only. Anything a recruiter has to read as a sentence is set in Archivo.

## Layout

The frame is fixed. A 56px top bar (52px under 760px) holds the brand, section nav, REC and counter. A 56px bottom bar holds the reel code and name, the W—T zoom bar, and the status. Under 760px the bottom bar stacks the zoom bar over a four-up icon nav (52px tap targets) and respects `safe-area-inset-bottom`. Safe-area corners (28px arms, 2px; 16px on mobile) sit 14px inside the bars. On mobile they drop behind the content.

Content lives in a centered wrap, max 1320px, with side padding of the gutter (clamp(20px, 5vw, 88px)) plus 14px; on mobile it is 30px flat. The opening fills the viewport between the bars as a 7fr/5fr grid: headline, lede and actions on the left, the framed photo on the right. OSD corner readouts are absolutely placed top-left and bottom-left. Sections are "reels": a headline and a count readout sit on a 1px HUD rule, followed by content. Reels are separated by clamp(80px, 12vh, 140px) of top padding.

Rows dominate over cards. Project clips are full-width grid rows: number, 16:9 thumb, title and summary, stack, status. The experience log, stack and readings are label/value grids (180–220px key column). Under 900px the two-column compositions collapse to one, and the photo moves above the headline. Under 760px clips become thumb plus text. Spacing steps observed: 4, 8, 16, 24, 40, 64px, with 12/14/20/28/48/56 used locally. Breakpoints are 1100, 900 and 760px.

## Elevation & Depth

The system is flat. Nothing floats on a cast shadow. Depth comes from the frame itself: fixed letterbox bars over the scrolling picture, 1px HUD hairlines, a 1px-dot HUD grid (20px pitch; 12px in thumbnails) behind diagrams and the stack list, and translucent black plates (rgba(10,10,10,0.72–0.78)) behind OSD readouts that sit over imagery. The only lift is Raised Black, used as a hover band on clip rows.

### Shadow Vocabulary
- **Focus ring** (`box-shadow: 0 0 0 3px #0a0a0a, 0 0 0 5px #ffb000`): keyboard focus on buttons only, alongside their brackets. This is a ring, not elevation.

### Named Rules
**The Frame-Not-Float Rule.** Separate things with a hairline, a dot grid or a letterbox plate, never a drop shadow. If something needs to stand out, put it in brackets.

## Shapes

Every corner is square (0 radius). The circle appears in exactly one place, the 9px REC dot. The recurring shape is the **corner bracket**: four L-shaped arms drawn with gradient backgrounds (or SVG paths in diagrams and the favicon). It appears at four scales: safe area (28px, OSD White), autofocus lock on the portrait (34px × 3px, amber, snaps from wide to tight on load), focus/hover ring on interactive elements (12px × 2px, OSD White on chrome, amber on list rows), and resting frames inside buttons and clip thumbnails (9px). Borders are 1px HUD hairlines, 1px dashed HUD Line for readings, and 1.5px OSD White for outline buttons. Images keep their own frame: 1:1 portrait, 16:9 thumbs cropped to the top, screenshots letterboxed with 52px black bands so readouts never cover them.

## Components

### Buttons
Hardware keys: square, uppercase, framed.
- **Shape:** square (0), min-height 52px, padding 0 22px, label left and an 18px line icon right (space-between). In the opening, buttons are at least 240px wide; on mobile they go full width.
- **Primary ("rec"):** Caution Amber fill and border, Amber Ink label. Resting brackets are drawn inside in Amber Ink.
- **Outline:** transparent with a 1.5px OSD White border, OSD White label, resting brackets in OSD White.
- **Hover:** the outline button inverts (OSD White fill, Letterbox label and brackets). The primary brightens to #ffc23d. On both, the inner brackets tighten from 5px to 3px inset. Color changes in 120ms `steps(2)`.
- **Focus:** a 2px amber ring offset by 3px of black, in addition to the brackets.

### Corner Focus Brackets
The site's focus and hover indicator. Every link, nav item, clip row, contact row, brand mark and back link carries it. It is invisible at rest. On hover and `:focus-visible` the four corners (12px × 2px) snap in from 112% to 100% scale over 180ms `steps(5)`. It also stays on to show the current nav item (`aria-current`). The bracket color follows the target. Chrome and navigation (brand, nav, featured clip, back and next links, buttons) use OSD White. List targets (clip rows, contact rows) and the status link use Caution Amber. Clip-thumbnail resting brackets use OSD Dim. On an inverted or amber fill, the brackets switch to the ink color. Each element tunes its inset so the brackets frame it with room. Buttons and clip thumbnails show the brackets at rest and skip the snap.

### Chips / Tags
- **Status tag:** uppercase Label at 0.6875rem in OSD Dim, with a 13px line icon. "Em evolução" switches to OSD White and leads with the zebra swatch. "Privado" carries a lock icon.
- **Stack chip** (case study): 1px HUD Line border, square, 6px 12px, 0.875rem Archivo.

### Clip Rows (project list)
The main list unit. Columns: number (Doto readout plus label), 16:9 bracketed thumb with a 1px HUD border, title and summary, stack in OSD Dim, status tag. A 1px HUD rule sits under each row. On hover the row gets a Raised Black band that fades out at the edges, the number turns amber, and the focus brackets frame the row. Archive rows are a compact variant (120px thumb, 14px padding).

### Scene (framed media)
A 1px-HUD-bordered Letterbox box that holds a diagram, a letterboxed screenshot, or a phone shot on the dot grid. OSD readouts sit in its four corners on translucent black plates: kind (top-left), year (top-right), and status (bottom). On mobile only the top two remain.

### Architecture Diagram
An SVG on the dot grid. Nodes are square Letterbox boxes with OSD White strokes. Node type is shown by shape: externals are drawn as corner brackets only, stores get a top rule, queues get vertical ticks, planned nodes are dashed and dimmed. Edges route at right angles. On mobile the case diagram keeps a 760px minimum width and scrolls horizontally.

### Navigation
- **Desktop:** top-bar links in uppercase Label (600, 0.14em), OSD Dim. Hover and current turn OSD White with brackets. The section nav and status hide under 900px.
- **Mobile:** a four-up grid in the bottom bar, each item a 20px line icon over an 0.6875rem label, 52px min-height. The WhatsApp item is amber.

### Readings (experience figures)
A dashed-ruled list. Each row is an amber Doto figure (1.375rem) and a short OSD Dim description in 0.9375rem Archivo. The rows stack under 760px.

### Viewfinder Chrome
Fixed letterbox bars: brand in Doto 800, blinking REC dot (1.2s `steps(1)`), DSEG14 tape counter driven by scroll, reel code and name, W—T zoom bar (ticked track, amber fill, white cursor, 420ms `steps(5)`), and amber status link. A single-frame black cut (110ms) covers each route change.

## Do's and Don'ts

### Do:
- **Do** keep the ground Letterbox Black (#0a0a0a) and separate regions with 1px HUD Gray (#2a2f33) hairlines.
- **Do** put facts in the frame's corners as uppercase OSD Label readouts (0.75rem, 700, 0.16em). Over imagery, place them on a translucent black plate.
- **Do** frame every interactive element with the corner focus brackets, and rely on them as the focus-visible indicator. Buttons also get the 2px amber ring.
- **Do** time every animation with `steps()`, and make everything static under `prefers-reduced-motion`.
- **Do** set sentences in Archivo. Keep Doto for display and short readouts, and DSEG14 for counter and large-year digits only.
- **Do** write all UI copy in pt-BR.

### Don't:
- **Don't** add a second accent hue or use amber as a background wash. It marks the action, the status and the live figure.
- **Don't** use zebra stripes anywhere except an "em evolução" marker or the end-of-tape band.
- **Don't** round corners. The REC dot is the only circle.
- **Don't** add drop shadows or glows for elevation. The only box-shadow is the button focus ring.
- **Don't** set Portuguese words with accents in DSEG14. It has no diacritic glyphs.
- **Don't** stack a small label above a heading. Readouts live in the frame corners or beside a section headline on its rule, never as a kicker over the title.
- **Don't** use smooth eased tweens, fades between routes, or parallax. Cuts are one frame.
