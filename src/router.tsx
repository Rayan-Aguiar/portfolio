import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Viewfinder } from "./components/Viewfinder";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import RouteError from "./pages/RouteError";

/* Data router: é o modo que habilita as View Transitions do React Router,
   usadas no zoom do clipe para a página do projeto. As páginas de projeto
   entram no bundle principal (≈4 kB) para a transição já encontrar o
   destino renderizado, sem fallback de carregamento no meio do zoom. */
const router = createBrowserRouter(
  [
    {
      element: <Viewfinder />,
      errorElement: <RouteError />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projetos/:slug", element: <Project /> },
        // Endereços do site antigo.
        { path: "/projects", element: <Navigate to="/#projetos" replace /> },
        { path: "/aboutme", element: <Navigate to="/#experiencia" replace /> },
        { path: "/technologies", element: <Navigate to="/#stack" replace /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export default function Router() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}
