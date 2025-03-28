import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface ProjectModalProps {
  name: string;
  images: string[];
  descriptionImage: string[];
  description: string;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  images,
  descriptionImage,
  name,
  onClose,
  description,
  open,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-none lg:w-[70vw] lg:h-[70vh] bg-darkblue text-white border-none">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription className="md:block hidden">
            {description}
          </DialogDescription>
        </DialogHeader>
        <Carousel className="w-full h-full mx-auto rounded-lg">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={descriptionImage[index]}
                  className="rounded-lg  w-full md:h-4/5 object-contain"
                />
                <span className="text-center w-full absolute  mt-1 italic text-sm text-slate-400 ">
                  {descriptionImage[index]}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-slate-900/30 hover:bg-lightblue/50 border-none left-2 top-[45%] text-white w-6 h-6 md:w-12 md:h-12" />
          <CarouselNext className="bg-slate-900/30 hover:bg-lightblue/50 border-none right-2 top-[45%] text-white w-6 h-6 md:w-12 md:h-12" />
        </Carousel>
        <DialogDescription className="md:hidden block">
          {description}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
