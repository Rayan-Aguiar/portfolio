import fotoRayan from "@/assets/img/rayan.jpg";

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Sobre mim</h1>
      <div className="border border-white/20 rounded-lg h-fit p-6 mt-8">
        <h2 className="text-2xl font-bold">Minha Jornada</h2>
        <div className="flex gap-8 text-justify">
          <div>
            <p className="mt-6">
              Desde pequeno, sempre fui fascinado por criatividade e tecnologia.
              Meu primeiro contato profissional foi como designer gráfico, onde
              atuei por <strong>10 anos</strong> criando identidades visuais,
              materiais publicitários e interfaces digitais. Nesse período,
              percebi que minha paixão ia além da estética: queria criar
              experiências interativas que unissem design e funcionalidade. Foi
              assim que mergulhei no mundo da programação. A transição do design
              para o desenvolvimento foi desafiadora, mas extremamente
              gratificante. Hoje, sou um desenvolvedor Full Stack, especializado
              no ecossistema JavaScript, criando aplicações que combinam
              performance, usabilidade e um design pensado para o usuário.
            </p>
            <h3 className="text-xl font-bold mt-4">O Que Eu Faço 💡</h3>
            <p>
              Atualmente, trabalho no desenvolvimento de soluções digitais,
              atuando tanto no <strong>front-end </strong> quanto no{" "}
              <strong>back-end</strong>. Meu foco principal está em criar
              aplicações{" "}
              <strong>
                eficientes, escaláveis e com interfaces intuitivas
              </strong>
              .
            </p>
            <p className="mt-6">
              🛠️ Tecnologias principais:
              <ul className="ml-4 mt-2">
                <li><strong>• Front-end:</strong> React, React Native, TailwindCSS</li>
                <li><strong>• Back-end:</strong> Node.js, TypeScript, Prisma, PostgreSQL</li>
                <li><strong>• Ferramentas:</strong> Docker, Jest, Git, Figma</li>
              </ul>
            </p>
          </div>
          <div className="w-full">
            <img src={fotoRayan} alt="minha foto" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <p className="mt-2 text-justify">Trabalho com metodologias ágeis, versionamento de código e boas práticas de desenvolvimento para garantir a qualidade e a manutenção dos projetos.</p>

        <p className="mt-6 text-justify">
          🚀 Meu objetivo é unir tecnologia e design para criar soluções
          inovadoras que fazem a diferença. Estou sempre aberto a novos desafios
          que me tirem da zona de conforto e me permitam crescer
          profissionalmente.
        </p>
      </div>
    </div>
  );
}
