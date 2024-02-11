import { ChevronRight } from "lucide-react";
import { FcKindle } from "react-icons/fc";

export default function MiniAboutMe() {
  return (
    <div className="w-4/5 h-fit border border-white/20 rounded-lg mt-10 p-8 text-white">
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea cumque cum
        placeat. Labore laborum eveniet sint maxime autem excepturi aspernatur
        quos, facere ad? Debitis tenetur neque officia? Porro, ad magnam.
      </p>
    </div>
  );
}
