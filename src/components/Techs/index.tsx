interface Props {
  image: string;
  title: string;
  link: string;
}
export default function Techs({ title, image, link }: Props) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-52 h-14 rounded-md bg-white/10 hover:bg-white/20 duration-150 flex items-center p-4 gap-4">
          <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
            <img src={image} className="w-6 h-6 aspect-video" alt="Logo" />
          </div>
          <div>
            <span>{title}</span>
          </div>
        </div>
      </a>
    </>
  );
}
