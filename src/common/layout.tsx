import { useState } from "react";
import AsideContent from "@/components/Aside";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex relative">
      {!isOpen && (
        <div className="w-full h-20 fixed lg:hidden bg-[#020817] z-50">
          <button
            className="lg:hidden fixed top-4 left-4 bg-darkblue p-2 rounded-md"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="text-white w-6 h-6" />
          </button>
        </div>
      )}
      <aside
        className={`fixed lg:relative top-0 left-0 w-64 bg-darkblue transition-transform duration-300 h-screen border-r border-white/20 p-6 text-white z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:z-auto lg:sticky lg:top-0`}
      >
        <button
          className="lg:hidden absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="text-white w-6 h-6" />
        </button>

        <AsideContent />
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div className="flex flex-1 justify-center w-full  lg:w-4/5 min-h-screen overflow-y-auto py-24 px-6 lg:p-20 text-white">
      <div className="max-w-[1400px]">
        <Outlet />

      </div>
      </div>
    </div>
  );
}
