import AsideContent from "../Aside";

export default function Home() {
  

  
  return (
    <>
      <div className="min-h-screen w-full flex">

        <aside className="w-1/5 h-screen bg-darkblue sticky top-0 left-0 overflow-y-auto border-r-white/20 border-r p-6 text-white">
          <AsideContent />
        </aside>

        <div className="w-4/5 h-screen  overflow-y-auto p-6"></div>
      </div>
    </>
  );
}
