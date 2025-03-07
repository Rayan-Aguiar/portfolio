import AsideContent from "@/components/Aside";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen w-full flex">
      <aside className="w-1/5 h-screen bg-darkblue sticky top-0 left-0 overflow-y-auto border-r-white/20 border-r p-6 text-white">
        <AsideContent />
      </aside>
      <div className="w-4/5 min:h-screen h-fit overflow-y-auto flex flex-col items-center justify-center py-8 px-48">
        <Outlet />
      </div>
    </div>
  );
}
