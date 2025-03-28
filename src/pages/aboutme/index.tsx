import fotoRayan from "@/assets/img/rayan.jpg";

export default function AboutMe() {
  return (
    <section>
      <header>
        <h1 className="text-4xl font-bold">Sobre mim</h1>
      </header>

      <article className="border border-white/20 rounded-lg h-fit p-6 mt-8">
        <header>
          <h2 className="text-2xl font-bold">Minha Jornada</h2>
        </header>

        <div className="flex gap-8 text-justify flex-col lg:flex-row">
          <figure className="w-full lg:hidden block mt-6">
            <img 
              src={fotoRayan} 
              alt="Foto de Rayan" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <figcaption className="sr-only">Foto de Rayan</figcaption>
          </figure>

          <div>
            <p className="mt-6">
              Desde pequeno, sempre fui fascinado por criatividade e tecnologia.
              Meu primeiro contato profissional foi como designer gráfico, onde
              atuei por <strong>10 anos</strong> criando identidades visuais,
              materiais publicitários e interfaces digitais. Nesse período,
              percebi que minha paixão ia além da estética: queria criar
              experiências interativas que unissem design e funcionalidade. Foi
              assim que mergulhei no mundo da programação.
            </p>

            <p className="mt-4">
              A transição do design para o desenvolvimento foi desafiadora, mas
              extremamente gratificante. Hoje, sou um <strong>desenvolvedor Full Stack</strong>,
              especializado no ecossistema JavaScript, criando aplicações que
              combinam performance, usabilidade e um design pensado para o usuário.
            </p>

            <section className="mt-6">
              <h3 className="text-xl font-bold">O Que Eu Faço 💡</h3>
              <p>
                Atualmente, trabalho no desenvolvimento de soluções digitais,
                atuando tanto no <strong>front-end</strong> quanto no <strong>back-end</strong>.
                Meu foco principal está em criar aplicações{" "}
                <strong>eficientes, escaláveis e com interfaces intuitivas</strong>.
              </p>
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-bold">🛠️ Tecnologias principais:</h3>
              <ul className="ml-4 mt-2 list-disc list-inside">
                <li><strong>Front-end:</strong> React, React Native, TailwindCSS</li>
                <li><strong>Back-end:</strong> Node.js, TypeScript, Prisma, PostgreSQL</li>
                <li><strong>Ferramentas:</strong> Docker, Jest, Git, Figma</li>
              </ul>
            </section>
          </div>

          <figure className="w-full hidden lg:block">
            <img 
              src={fotoRayan} 
              alt="Foto de Rayan" 
              className="w-full h-full object-cover rounded-lg" 
            />
            <figcaption className="sr-only">Foto de Rayan</figcaption>
          </figure>
        </div>

        <p className="mt-2 text-justify">
          Trabalho com metodologias ágeis, versionamento de código e boas práticas 
          de desenvolvimento para garantir a qualidade e a manutenção dos projetos.
        </p>

        <p className="mt-6 text-justify">
          🚀 Meu objetivo é unir tecnologia e design para criar soluções
          inovadoras que fazem a diferença. Estou sempre aberto a novos desafios
          que me tirem da zona de conforto e me permitam crescer profissionalmente.
        </p>
      </article>

      {/* CTA - Chamada para ação */}
      <section className="mt-6 p-6 border border-slate-100/20 text-white text-center rounded-lg">
        <h2 className="text-3xl font-bold">Gostou da minha trajetória? 😊</h2>
        <p className="mt-4 text-lg">
          Vamos conversar! Se você quer trocar ideias sobre tecnologia, design ou
          oportunidades, estou disponível para um bate-papo.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/seu-perfil" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-lightblue text-white font-bold py-3 px-6 rounded-lg hover:bg-lightblue transition"
          >
            💼 LinkedIn
          </a>
          <a 
            href="mailto:seuemail@email.com" 
            className="border border-lightblue text-white font-bold py-3 px-6 rounded-lg hover:bg-lightblue transition"
          >
            ✉️ E-mail
          </a>
          <a 
            href="https://wa.me/seu-numero" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-lightblue text-white font-bold py-3 px-6 rounded-lg hover:bg-lightblue transition"
          >
            📱 WhatsApp
          </a>
        </div>
      </section>
    </section>
  );
}
