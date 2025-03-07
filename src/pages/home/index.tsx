import Header from "../../components/Header";
import MiniAboutMe from "../../components/MiniAboutMe";
import Projects from "../../components/Projects";
import WorkExperience from "../../components/Work";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <MiniAboutMe />
      <WorkExperience />
      <Projects />
    </main>
  );
}
