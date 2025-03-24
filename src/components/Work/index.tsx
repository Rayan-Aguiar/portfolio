import { ChevronRight, Download } from "lucide-react";
import { FcBriefcase } from "react-icons/fc";
import { WorkExperienceitems } from "../WorkExperienceitems";
import { workExperience } from "@/constants/workExperience";
import { FadeIn } from "../animation/FadeIn";
import { Button } from "../ui/button";

export default function WorkExperience() {
  const getWorkExperience = () => {
    const workExperiences = workExperience.filter(
      (item) => item.type === "Work"
    );
    const educationExperiences = workExperience.filter(
      (item) => item.type === "Education"
    );

    const sortedWorkExperiences = workExperiences.sort((a, b) => {
      if (a.highlight && !b.highlight) return -1;
      if (!a.highlight && b.highlight) return 1;
      return 0;
    });

    return { sortedWorkExperiences, educationExperiences };
  };

  const { sortedWorkExperiences, educationExperiences } = getWorkExperience();

  return (
    <>
      <section className="flex w-full gap-6">
        <article className="w-full min-h-44 border border-white/20 rounded-lg mt-6 p-8 text-white flex-1">
          <FadeIn to="left" delay={0.2} duration={0.5} startOnScrollIntersect>
            <header className="flex items-center justify-between flex-wrap">
              <h2 className="flex gap-2 items-center text-xl font-semibold">
                <FcBriefcase />
                Experiências
              </h2>
              <a
                href="https://www.linkedin.com/in/rayan-siqueira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-lightblue cursor-pointer flex items-center hover:underline text-xs">
                  Contrate-me <ChevronRight className="w-4 h-4" />
                </button>
              </a>
            </header>

            <ul className="mt-4 items-center">
              {sortedWorkExperiences.map((experience, index) => (
                <li key={index} className="mb-4">
                  <WorkExperienceitems
                    avatar={experience.avatar}
                    description={experience.description}
                    dateEnd={experience.dateEnd}
                    dateInitial={experience.dateInitial}
                    title={experience.title}
                  />
                </li>
              ))}
            </ul>
          </FadeIn>
          <Button className="w-full bg-lightblue hover:bg-lightblue/80 duration-150 mt-8">
            Baixar meu currículo <Download size={18} />
          </Button>
        </article>

        <article className="w-full min-h-44 border border-white/20 rounded-lg mt-6 p-8 text-white flex-1">
          <FadeIn to="left" delay={0.3} duration={0.5} startOnScrollIntersect>
            <header className="flex items-center justify-between flex-wrap">
              <h2 className="flex gap-2 items-center text-xl font-semibold">
                🎓 Educação
              </h2>
            </header>

            <ul className="mt-4 items-center flex-col">
              {educationExperiences.map((experience, index) => (
                <li key={index} className="mb-4">
                  <WorkExperienceitems
                    avatar={experience.avatar}
                    description={experience.description}
                    dateEnd={experience.dateEnd}
                    dateInitial={experience.dateInitial}
                    title={experience.title}
                  />
                </li>
              ))}
            </ul>
          </FadeIn>
        </article>
      </section>
    </>
  );
}
