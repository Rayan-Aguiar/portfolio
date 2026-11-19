import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { prefersReducedMotion } from "@/lib/scroll";
import { refreshScroll } from "@/lib/scrollStore";

export interface Capture {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  /** Código do clipe (C08, A01…), quando houver. */
  code?: string;
}

export interface CaptureZoomHandle {
  /** Amplia a captura a partir da imagem dentro de `trigger`. */
  open: (capture: Capture, trigger: HTMLElement) => void;
}

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const SHADE = "rgba(10, 10, 10, 0.96)";
const CLEAR = "rgba(10, 10, 10, 0)";

type Box = { left: number; top: number; width: number; height: number; bottom: number };

/** Área real da imagem na caixa: com object-fit: contain sobram faixas vazias. */
function picture(img: HTMLImageElement): Box {
  const b = img.getBoundingClientRect();
  if (getComputedStyle(img).objectFit !== "contain" || !img.naturalWidth) return b;
  const ratio = img.naturalWidth / img.naturalHeight;
  let width = b.width;
  let height = width / ratio;
  if (height > b.height) {
    height = b.height;
    width = height * ratio;
  }
  const left = b.left + (b.width - width) / 2;
  const top = b.top + (b.height - height) / 2;
  return { left, top, width, height, bottom: top + height };
}

/**
 * Zoom W→T das capturas: a imagem cresce do lugar onde está até ocupar o
 * visor entre as barras, com o OSD nos cantos. Clique ou Esc devolve a
 * imagem ao lugar de origem.
 */
export const CaptureZoom = forwardRef<CaptureZoomHandle>(function CaptureZoom(_, ref) {
  const dialog = useRef<HTMLDialogElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const [capture, setCapture] = useState<Capture | null>(null);
  const origin = useRef<HTMLElement | null>(null);
  /** Entre o clique e o showModal() há uma espera (decode): impede abrir duas vezes. */
  const opening = useRef(false);

  const flip = (from: Box, to: Box, back = false) => {
    const frames: Keyframe[] = [
      { transform: `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width})` },
      { transform: "none" },
    ];
    return img.current!.animate(back ? frames.reverse() : frames, {
      duration: back ? 360 : 460,
      easing: EASE,
      fill: "both",
    });
  };

  useImperativeHandle(ref, () => ({
    async open(next, trigger) {
      const d = dialog.current;
      if (!d || d.open || opening.current) return;
      opening.current = true;
      origin.current = trigger;
      // Renderiza já a imagem nova: a animação precisa medir o quadro final.
      flushSync(() => setCapture(next));
      const im = img.current;
      if (!im) {
        opening.current = false;
        return;
      }

      // O visor ampliado fica entre as barras, que continuam à vista.
      const top = document.querySelector(".vf-top")?.getBoundingClientRect();
      const bottom = document.querySelector(".vf-bottom")?.getBoundingClientRect();
      d.style.setProperty("--zt", `${Math.max(0, top?.bottom ?? 0)}px`);
      d.style.setProperty("--zb", `${Math.max(0, window.innerHeight - (bottom?.top ?? window.innerHeight))}px`);

      try {
        await im.decode();
      } catch {
        /* a imagem aparece mesmo sem decodificar antes */
      }

      opening.current = false;
      if (d.open) return;
      d.showModal();
      d.classList.remove("is-on", "is-off");
      void d.offsetWidth;
      d.classList.add("is-on");
      document.querySelector<HTMLElement>(".zoom")?.style.setProperty("--z", "1");

      const source = trigger.querySelector("img");
      if (!prefersReducedMotion() && source) {
        flip(picture(source), im.getBoundingClientRect());
        d.animate([{ backgroundColor: CLEAR }, { backgroundColor: SHADE }], { duration: 200, easing: "steps(3, end)" });
      }
    },
  }));

  const close = () => {
    const d = dialog.current;
    const im = img.current;
    if (!d || !im || !d.open || d.classList.contains("is-off")) return;
    d.classList.remove("is-on");
    d.classList.add("is-off");

    const done = () => d.close(); // a limpeza roda no evento close

    const source = origin.current?.isConnected ? origin.current.querySelector("img") : null;
    const back = source ? picture(source) : null;
    const visible = back && back.width > 0 && back.bottom > 0 && back.top < window.innerHeight;
    if (prefersReducedMotion() || !visible) return done();

    d.animate([{ backgroundColor: SHADE }, { backgroundColor: CLEAR }], {
      duration: 300,
      easing: "steps(3, end)",
      fill: "both",
    });
    flip(back, im.getBoundingClientRect(), true).finished.then(done, done);
  };

  // Roda em todo fechamento, inclusive quando o navegador fecha o diálogo
  // sem passar por close() (ex.: Esc repetido no Chrome).
  const cleanup = () => {
    const d = dialog.current;
    if (!d) return;
    d.classList.remove("is-on", "is-off");
    [...(img.current?.getAnimations() ?? []), ...d.getAnimations()].forEach((a) => a.cancel());
    refreshScroll(); // a barra de zoom volta para a posição da rolagem
  };

  return (
    <dialog
      ref={dialog}
      className="zoomer"
      aria-label="Captura ampliada"
      onClick={close}
      onClose={cleanup}
      onCancel={(e) => {
        e.preventDefault();
        close();
      }}
    >
      <div className="zoomer__pic">
        {capture && <img ref={img} src={capture.src} alt={capture.alt} width={capture.width} height={capture.height} />}
      </div>
      <span className="zoomer__safe" aria-hidden="true" />
      <span className="scene__osd scene__osd--tl osd" aria-hidden="true">
        <span className="seg">{capture?.code}</span>
        <b>{capture?.title}</b>
      </span>
      <span className="scene__osd scene__osd--tr osd" aria-hidden="true">
        <b className="zoomer__t">T</b> Zoom
      </span>
      <span className="scene__osd scene__osd--bl osd" aria-hidden="true">
        Captura · <span className="seg">{capture && `${capture.width}×${capture.height}`}</span>
      </span>
      <span className="scene__osd scene__osd--br">
        <button type="button" className="zoomer__close osd brk brk--osd">
          Fechar · Esc
        </button>
      </span>
    </dialog>
  );
});
