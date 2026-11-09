import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { site } from "@/data/site";
import { useTitle } from "@/lib/useTitle";
import { NewTab } from "@/components/NewTab";

/** Falha inesperada: mantém a linguagem do visor e oferece saídas. */
export default function RouteError() {
  const error = useRouteError();
  useTitle("Sem sinal");
  const detail = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : null;
  return (
    <main id="conteudo" className="wrap nosignal" aria-labelledby="erro-titulo">
      <h1 id="erro-titulo" className="display nosignal__title">
        Sem sinal
      </h1>
      <p>
        Algo falhou ao carregar esta tela{detail ? ` (${detail})` : ""}. Recarregue a página ou volte ao início. Se
        preferir, fale direto comigo pelo WhatsApp.
      </p>
      <div className="open__actions" style={{ justifyContent: "center", marginTop: 8 }}>
        <a href="/" className="btn btn--rec brk brk--osd">
          Voltar ao início
        </a>
        <a href={site.contacts.whatsapp} className="btn brk brk--osd" target="_blank" rel="noreferrer">
          WhatsApp
          <NewTab />
        </a>
      </div>
    </main>
  );
}
