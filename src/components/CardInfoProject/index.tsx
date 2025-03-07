import { CiCirclePlus } from "react-icons/ci";
import { Card, CardContent } from "../ui/card";

interface CardInfoProjectProps {
  img: string;
  onClick: () => void;
  name: string;
  description: string;
}

export const CardInfoProject: React.FC<CardInfoProjectProps> = ({
  description,
  img,
  name,
  onClick,
}) => {
  return (
    <Card
      className="w-72 min-h-96 overflow-hidden bg-transparent border-2 group cursor-pointer border-slate-800 hover:border-slate-300 duration-300"
      onClick={onClick}
    >
      <img
        src={img}
        alt="preview"
        className="transform group-hover:scale-105 duration-500"
      />
      <CardContent className="p-4 text-white  h-full">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className=" text-slate-400 ">{description}</p>

        <p className="flex items-center gap-1 mt-2">
          <CiCirclePlus />
          Detalhes
        </p>
      </CardContent>
    </Card>
  );
};
