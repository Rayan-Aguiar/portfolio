import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface WorkExperienceProps {
  avatar: string;
  title: string;
  description: string;
  dateInitial?: string;
  dateEnd: string;
}

export const WorkExperienceitems = ({
  avatar,
  dateEnd,
  dateInitial,
  description,
  title,
}: WorkExperienceProps) => {
  return (
    <div className="flex gap-4">
      <Avatar className="border border-white/20 ">
        <AvatarImage src={avatar}  className="object-contain"/>
        <AvatarFallback>{title}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <p className="text-zinc-500 text-sm">{description}</p>
        <p className="text-zinc-500 text-xs font-medium">{dateInitial ? `${dateInitial} - ` : ''}{dateEnd}</p>
      </div>
    </div>
  );
};
