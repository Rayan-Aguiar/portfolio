import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface WorkExperienceProps {
  avatar: string;
  tittle: string;
  description: string;
  duration: string;
}

export const WorkExperienceitems = ({
  avatar,
  duration,
  description,
  tittle,
}: WorkExperienceProps) => {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{tittle}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="font-bold">{tittle}</h3>
        <p className="text-zinc-500 text-sm">{description}</p>
        <p className="text-zinc-500 text-xs font-medium">{duration}</p>
      </div>
    </div>
  );
};
