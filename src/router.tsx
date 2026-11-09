import { lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Viewfinder } from "./components/Viewfinder";
import Home from "./pages/Home";

const Project = lazy(() => import("./pages/Project"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function Router() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Viewfinder />}>
          <Route path="/" element={<Home />} />
          <Route path="/projetos/:slug" element={<Project />} />
          {/* Endereços do site antigo. */}
          <Route path="/projects" element={<Navigate to="/#projetos" replace />} />
          <Route path="/aboutme" element={<Navigate to="/#experiencia" replace />} />
          <Route path="/technologies" element={<Navigate to="/#stack" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
