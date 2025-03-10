import Rayan from "../../assets/img/rayan.jpg";
import { Bagde } from "../Badge";


const stacks = ["React JS", 'React Native', "NextJS", "Node Js", "TypeScript", "JavaScript"];

export default function Header() {
  return (
    <div className="flex w-full h-fit gap-8 items-center flex-col lg:flex-row">
      <div>
        {" "}
        <img src={Rayan} alt="Minha foto" className="lg:w-32 lg:h-32 rounded-3xl object-cover md:w-64 md:h-64" />
      </div>
      <div className="text-white">
        <h1 className="font-bold text-4xl">Rayan Siqueira</h1>
        <span className="text-zinc-500 text-lg">Desenvolvedor FullStack - Mobile</span>
        <div className="flex flex-wrap gap-4 mt-2">
          {stacks.map((stack, index) =>(<Bagde  key={index} title={stack}/> ))}          
        </div>
      </div>
    </div>
  );
}
