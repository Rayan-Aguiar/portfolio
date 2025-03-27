import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitle: { [key: string]: string } = {
  "/": "Inicio - Meu Portfolio",
  "/aboutme": "Sobre Mim - Meu Portfólio",
  "/projects": "Projetos - Meu Portfólio",
  "/technologies": "Tecnologias - Meu Portfólio",
  "*": "Página Não Encontrada - Meu Portfólio", 
};

export default function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitle[location.pathname] || pageTitle["*"];
  }, [location.pathname]);

  return null;
}
