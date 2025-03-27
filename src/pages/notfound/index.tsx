import Lottie from "lottie-react";
import page404 from "@/assets/animations/404.json";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold text-center mt-8">
        Página não encontrada
      </h1>
      <p className="text-center">
        Você está tentando acessar uma página que não existe.
      </p>
      <p className="text-center">
        Por favor, volte à{" "}
        <Link
          to="/"
          className="text-lightblue font-bold hover:underline hover:underline-offset-2"
        >
          página inicial
        </Link>
        .
      </p>
      <Lottie animationData={page404} loop className="lg:w-[1200px] w-[600px] md:w-[800px]" />
    </div>
  );
}
