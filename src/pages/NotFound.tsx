import { Link } from "react-router-dom";
import { useTitle } from "@/lib/useTitle";

export default function NotFound() {
  useTitle("Sem sinal");
  return (
    <section className="wrap nosignal" aria-labelledby="nosignal-titulo">
      <h1 id="nosignal-titulo" className="display nosignal__title">
        Sem sinal
      </h1>
      <p>Esta página não existe ou mudou de lugar. Os projetos e o contato continuam na fita principal.</p>
      <Link to="/" className="btn btn--rec brk brk--osd">
        Voltar ao início
      </Link>
    </section>
  );
}
