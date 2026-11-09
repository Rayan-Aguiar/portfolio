import { useEffect, useSyncExternalStore } from "react";

/* Estado de rolagem fora do React. Os leitores contínuos (contador, zoom)
   escrevem direto no DOM; componentes só re-renderizam quando um valor
   derivado muda (ex.: passou de 80% da página). */

type Snapshot = { y: number; progress: number };
let snap: Snapshot = { y: 0, progress: 0 };
const listeners = new Set<() => void>();
let frame = 0;
let started = false;

function read() {
  frame = 0;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  snap = { y: window.scrollY, progress: max > 0 ? window.scrollY / max : 0 };
  listeners.forEach((l) => l());
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(read);
}

function start() {
  if (started) return;
  started = true;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule);
  read();
}

export function subscribeScroll(listener: () => void) {
  start();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Re-lê a rolagem (ex.: depois de trocar de página, quando a altura muda). */
export function refreshScroll() {
  schedule();
}

/** Valor derivado da rolagem: o componente só re-renderiza quando ele muda. */
export function useScrollSelector<T>(select: (s: Snapshot) => T): T {
  return useSyncExternalStore(subscribeScroll, () => select(snap), () => select(snap));
}

/** Liga um efeito contínuo à rolagem sem passar pelo React. */
export function useScrollEffect(effect: (s: Snapshot) => void, deps: unknown[]) {
  useEffect(() => {
    effect(snap);
    return subscribeScroll(() => effect(snap));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
