import { ChevronRight } from "lucide-react";
import { FcKindle } from "react-icons/fc";

export default function MiniAboutMe() {
  return (
    <div className="w-full h-fit border border-white/20 rounded-lg mt-10 p-8 text-white">
      <div className="flex items-center justify-between">
        <h2 className="flex gap-2 items-center text-xl font-semibold">
          <FcKindle />
          Sobre mim
        </h2>
        <span className="text-lightblue  cursor-pointer flex items-center hover:underline text-xs ">
          Saiba mais <ChevronRight className="w-4 h-4" />{" "}
        </span>
      </div>
      <p className="text-zinc-500 text-justify mt-4">
        Desenvolvedor com experiência no ecossistema JavaScript, atuando com
        React.js, TypeScript, Node.js, React Native, TailwindCSS, Styled
        Components, Prisma e PostgreSQL para criar soluções completas e
        impactantes. Tenho capacidade de atuar em todas as camadas do
        desenvolvimento, do front-end ao back-end, entregando produtos robustos
        e funcionais.
      </p>
    </div>
  );
}
