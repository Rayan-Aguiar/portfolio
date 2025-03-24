import M2 from "@/assets/img/m2.jpg";
import G1 from "@/assets/img/G1learn.jpeg";
import Unisuam from "@/assets/img/unisuam.png";

export interface WorkExperienceProps {
  title: string;
  description: string;
  dateInitial?: string;
  dateEnd: string;
  avatar: string;
  type: "Work" | "Education";
  highlight?: boolean;
}

export const workExperience: WorkExperienceProps[] = [
  {
    title: "M2Flex",
    description: "Desenvolvedor Mobile",
    dateInitial: "2024",
    dateEnd: "atualmente",
    avatar: M2,
    type: "Work",
    highlight: true,
  },
  {
    title: "G1learn",
    description: "Desenvolvedor Full-Stack",
    dateInitial: "2022",
    dateEnd: "2024",
    avatar: G1,
    type: "Work",
  },
  {
    title: "Unisuam",
    description: "Estudante de Ciência da Computação",
    dateEnd: "Concluido",
    avatar: Unisuam,
    type: "Education",
  },
];
