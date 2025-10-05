import React from "react";
import imgProfile from "../assets/Imagens/GabrielBlack.png";
import ButtonsSocial from "../components/ButtonsSocial";
import AnimatedCounter from "../components/AnimatedCounter";
import curriculo from "../../public/curriculo.pdf";

function Hero() {
  return (
    <div className="flex flex-col py-[96px] m-auto" id="início">
      <div className="flex flex-col-reverse gap-6 desktop1:flex-row w-full justify-between p-4 items-center">
        <div className="">
          <div className="text-white flex flex-col">
            <h3 className="desktop2:text-[22px] text-center desktop1:text-start mb-2">
              Desenvolvedor FrontEnd
            </h3>
            <h1 className="text-[32px] leading-9 text-center desktop1:text-start font-bold text-white desktop1:text-[38px] desktop2:text-[72px] desktop2:leading-[70px]">
              Gabriel de
              <br /> <span className="text-secondary">Souza da Silva</span>
            </h1>
            <div className="pt-4 w-[95%] m-auto text-center desktop1:text-start desktop1:m-0">
              <p>
                Sou especialista em criar experiências digitais elegantes e sou
                proficiente em diversas linguagens de programação e tecnologias.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center w-full gap-6 pt-6 desktop1:justify-start ">
              <a
                href={curriculo}
                download="Curriculo_Gabriel_Souza.pdf"
                aria-label="Currículo de Gabriel"
                className="flex gap-2 items-center bg-primary hover:bg-secondary  hover:scale-110 transition-all duration-300 px-6 py-2 rounded-full border border-secondary text-secondary hover:text-primary hover:border-primary cursor-pointer"
              >
                Baixar Currículo{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-download-icon lucide-download"
                  >
                    <path d="M12 15V3" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                </span>
              </a>
              <div className="flex gap-8">
                <ButtonsSocial
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#22FA9D"
                      stroke="#1A1A1F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-github-icon lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  }
                  link="https://github.com/BiellSouza"
                />
                <ButtonsSocial
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#22FA9D"
                      stroke="#1A1A1F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-instagram-icon lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  }
                  link="https://www.instagram.com/biel.souza.904/"
                />
                <ButtonsSocial
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#22FA9D"
                      stroke="#1A1A1F"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-linkedin-icon lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  }
                  link="https://www.linkedin.com/in/gabriel-souza-b9945929a/"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[80%] max-w-[350px] desktop1:max-w-full flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="48" // Sempre perto do limite da viewBox
              fill="none"
              stroke="#22FA9D"
              strokeWidth="2"
              strokeDasharray="20 10 5 10"
              strokeLinecap="round"
              className="animate-dash"
            />
          </svg>

          <img
            src={imgProfile}
            alt="Imagem do Desenvolvedor"
            className=" object-cover rounded-full"
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap  gap-12 justify-between pt-[4%]">
        <AnimatedCounter end={2} label="Anos de Experiência" />
        <AnimatedCounter end={26} label="Projetos Completos" />
        <AnimatedCounter end={8} label="Tecnologias Utilizadas" />
        <AnimatedCounter end={4700} label="Commits Feitos" />
      </div>
    </div>
  );
}

export default Hero;
