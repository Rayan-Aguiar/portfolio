
import AsideContent from "../Aside";
import Header from "../Header";
import MiniAboutMe from "../MiniAboutMe";
import Projects from "../Projects";
import WorkExperience from "../Work";


export default function Home() {
  

  return (
    <>
      <div className="min-h-screen w-full flex">
        <aside className="w-1/5 h-screen bg-darkblue sticky top-0 left-0 overflow-y-auto border-r-white/20 border-r p-6 text-white">
          <AsideContent />
        </aside>

        <main className="w-4/5 min:h-screen h-fit flex flex-col items-center overflow-y-auto p-8">
          <Header />
          <MiniAboutMe />
          <WorkExperience />
          <Projects />          
        </main>
      </div>
    </>
  );
}
