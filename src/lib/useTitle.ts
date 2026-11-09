import { useEffect } from "react";

const BASE = "Rayan Aguiar · Full Stack Engineer";

export function useTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} · Rayan Aguiar` : BASE;
  }, [page]);
}
