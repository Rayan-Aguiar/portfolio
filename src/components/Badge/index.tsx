interface BagdeProps {
  title: string;
}

export const Bagde = ({ title }: BagdeProps) => {
  return (
    <span className="bg-darkblue2 w-18 h-fit px-2 py-1 rounded-md text-sm font-semibold text-zinc-200">
      {title}
    </span>
  );
};
