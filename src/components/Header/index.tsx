import Rayan from "../../assets/img/rayan.jpg";
import { FadeIn } from "../animation/FadeIn";
import { Bagde } from "../Badge";

const stacks = [
  "React JS",
  "React Native",
  "NextJS",
  "Node Js",
  "TypeScript",
  "JavaScript",
];

export default function Header() {
  return (
    <header>
      <FadeIn
        to="right"
        duration={0.5}
        className="w-full flex items-center gap-8 flex-col lg:flex-row"
      >
        <picture>
          <img
            src={Rayan}
            alt="Minha foto"
            className="lg:w-32 lg:h-32 rounded-3xl object-cover md:w-64 md:h-64"
          />
        </picture>
        <section className="text-white">
          <FadeIn delay={0.2} duration={0.5}>
            <h1 className="font-bold text-4xl">Rayan Siqueira</h1>
          </FadeIn>
          <h2 className="text-zinc-500 text-lg">
            Desenvolvedor FullStack - Mobile
          </h2>
          <div className="flex flex-wrap gap-4 mt-2">
            {stacks.map((stack, index) => (
              <FadeIn to="top" duration={0.5} delay={index * 0.2} key={index}>
                <Bagde key={index} title={stack} />
              </FadeIn>
            ))}
          </div>
        </section>
      </FadeIn>
    </header>
  );
}
