import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/scroll";

/** Ritmo do gerador de caracteres, em ms. */
const TYPE_MS = 55;
const ERASE_MS = 26;
const HOLD_MS = 3400;
const GAP_MS = 380;

/** Retângulo de um caractere do nó de texto, na linha em que ele caiu. */
function charRect(text: Node | null | undefined, i: number) {
  if (!text?.textContent || i < 0 || i >= text.textContent.length) return undefined;
  const range = document.createRange();
  range.setStart(text, i);
  range.setEnd(text, i + 1);
  const rects = range.getClientRects();
  return rects[rects.length - 1];
}

/**
 * Título que escreve e apaga frases, como o gerador de caracteres de uma
 * câmera. A primeira frase já chega inteira (é o que o leitor de tela, o
 * buscador e quem pediu menos movimento recebem).
 *
 * Nada muda de linha enquanto o texto surge: a frase inteira está sempre no
 * fluxo (o trecho ainda não digitado só fica transparente), a altura fica
 * reservada para a frase mais longa e o cursor fica fora do texto,
 * posicionado sobre o último caractere digitado. Um cursor dentro do texto
 * cria um ponto de quebra de linha no meio da palavra, e a palavra pularia
 * de linha a cada letra.
 */
export function Typewriter({ phrases }: { phrases: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(phrases[0].length);
  const [phase, setPhase] = useState<"hold" | "erase" | "type">("hold");
  const [paused, setPaused] = useState(false);
  const box = useRef<HTMLSpanElement>(null);
  const line = useRef<HTMLSpanElement>(null);
  const typed = useRef<HTMLSpanElement>(null);
  const rest = useRef<HTMLSpanElement>(null);
  const cursor = useRef<HTMLSpanElement>(null);

  // Só anima com a abertura na tela e a aba à vista.
  useEffect(() => {
    const el = box.current;
    if (!el || phrases.length < 2 || prefersReducedMotion()) {
      setPaused(true);
      return;
    }
    let onScreen = true;
    const update = () => setPaused(!onScreen || document.hidden);
    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      update();
    });
    io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [phrases.length]);

  useEffect(() => {
    if (paused) return;
    const phrase = phrases[index];
    let delay: number;
    let step: () => void;

    if (phase === "hold") {
      delay = HOLD_MS;
      step = () => setPhase("erase");
    } else if (phase === "erase") {
      if (shown === 0) {
        delay = GAP_MS;
        step = () => {
          setIndex((index + 1) % phrases.length);
          setPhase("type");
        };
      } else {
        delay = ERASE_MS;
        step = () => setShown(shown - 1);
      }
    } else if (shown < phrase.length) {
      delay = TYPE_MS;
      step = () => setShown(shown + 1);
    } else {
      delay = 0;
      step = () => setPhase("hold");
    }

    const t = window.setTimeout(step, delay);
    return () => window.clearTimeout(t);
  }, [paused, phase, shown, index, phrases]);

  // O cursor fica logo depois do último caractere digitado. Sem nada
  // digitado, ou logo depois de um espaço (que pode ser a quebra de linha),
  // fica onde a próxima letra vai aparecer.
  useLayoutEffect(() => {
    const place = () => {
      const l = line.current;
      const c = cursor.current;
      if (!l || !c) return;
      const afterSpace = phrases[index][shown - 1] === " " && shown < phrases[index].length;
      const last = afterSpace ? undefined : charRect(typed.current?.firstChild, shown - 1);
      const first = last ? undefined : charRect(rest.current?.firstChild, 0);
      const rect = last ?? first;
      if (!rect) return;
      const base = l.getBoundingClientRect();
      const x = (last ? rect.right : rect.left) - base.left;
      c.style.transform = `translate(${x}px, ${rect.top - base.top}px)`;
      c.style.height = `${rect.height}px`;
    };
    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [shown, index, phrases]);

  const phrase = phrases[index];

  return (
    <span ref={box} className="typer">
      <span className="sr-only">{phrases[0]}</span>
      {/* Todas as frases empilhadas e invisíveis: reservam a altura da maior. */}
      {phrases.map((p) => (
        <span key={p} className="typer__ghost" aria-hidden="true">
          {p}
        </span>
      ))}
      <span ref={line} className="typer__line" aria-hidden="true">
        <span ref={typed}>{phrase.slice(0, shown)}</span>
        <span ref={rest} className="typer__off">
          {phrase.slice(shown)}
        </span>
        <span ref={cursor} className={phase === "hold" ? "typer__cursor is-idle" : "typer__cursor"} />
      </span>
    </span>
  );
}
