import { ChevronRight } from "lucide-react";
import { FcKindle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function MiniAboutMe() {
  return (
    <article className="w-full h-fit border border-white/20 rounded-lg mt-10 p-8 text-white">
      <header className="flex items-center justify-between flex-wrap">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcKindle />
          Sobre mim
        </h2>
        <Link 
          to="/aboutme" 
          className="text-lightblue cursor-pointer flex items-center hover:underline text-xs"
        >
          Saiba mais <ChevronRight className="w-4 h-4" />
        </Link>
      </header>

      <section>
        <p className="text-zinc-400 text-justify mt-4 text-lg">
          Desenvolvedor com experiência no ecossistema JavaScript, atuando com
          React.js, TypeScript, Node.js, React Native, TailwindCSS, Styled
          Components, Prisma e PostgreSQL para criar soluções completas e
          impactantes. Tenho capacidade de atuar em todas as camadas do
          desenvolvimento, do front-end ao back-end, entregando produtos robustos
          e funcionais.
        </p>
      </section>
    </article>
  );
}
