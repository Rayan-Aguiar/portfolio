import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface ProjectModalProps {
  name: string;
  images: string[];
  description: string;
  open: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  images,
  name,
  onClose,
  open,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-none w-[80vw] h-[80vh] bg-darkblue text-white border-none  ">
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle> 
        </DialogHeader>
        <Carousel className="w-full h-full mx-auto rounded-lg">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="rounded-lg  w-full h-4/5 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-slate-900/30 hover:bg-lightblue/50 border-none left-2 top-[45%]  text-white w-20 h-20"/>
          <CarouselNext className="bg-slate-900/30 hover:bg-lightblue/50 border-none right-2 top-[45%]  text-white w-20 h-20" /> 
        </Carousel>        
      </DialogContent>
    </Dialog>
  );
};
