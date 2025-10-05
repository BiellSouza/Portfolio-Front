import { useState } from "react";

export default function WhyHireMe() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experiência" },
    { id: "education", label: "Educação" },
    { id: "skills", label: "Habilidades" },
    { id: "about", label: "Sobre mim" },
  ];

  return (
    <div
      className="flex flex-col md:flex-row gap-16 desktop1:gap-8 text-white min-h-[600px] justify-between py-[96px]"
      id="resumo"
    >
      {/* Left Section */}
      <div className=" flex flex-col gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-3">Sobre mim?</h2>
          <p className="text-gray-400 text-[16px] leading-relaxed">
            Conheça um pouco da minha trajetória até aqui..
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full py-3 rounded-md font-medium text-left px-4 transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-green-400 text-black border-2 border-primary"
                  : "bg-[#1a1a1a] hover:bg-[#2a2a2a] border-2 border-secondary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="desktop1:w-[50%] justify-center">
        {activeTab === "experience" && <ExperienceContent />}
        {activeTab === "education" && <EducationContent />}
        {activeTab === "skills" && <SkillsContent />}
        {activeTab === "about" && <AboutContent />}
      </div>
    </div>
  );
}

/* ==============================
   EXPERIENCE SECTION
============================== */
function ExperienceContent() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-semibold mb-3">
        <span className="py-1 text-[42px] rounded">Minha Experiência</span>
      </h3>
      <p className="text-gray-400 mb-6 text-[16px] leading-relaxed">
        Embora com pouco tempo programando, possuo experiência em alguns pontos
        importantes e interessantes..
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            title: "Estagiário FrontEnd",
            date: "2024 - 2025",
            place: "Iniciado em Fevereiro.",
          },
          {
            title: "Desenvolvedor JavaScript",
            date: "2025 - Atual",
            place: "Iniciado em Março.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-secondary min-h-[200px] flex flex-col justify-between p-5 desktop1:py-8 desktop1:px-8 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col">
              <p className="text-green-400 text-[18px] mt-1">{item.date}</p>
              <h4 className="font-semibold text-[22px]">{item.title}</h4>
            </div>
            <p className="flex">
              <span className="text-secondary mr-2">∆</span> {item.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==============================
   EDUCATION SECTION
============================== */
function EducationContent() {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">
        <span className="py-1 text-[42px] rounded ">Minha Educação</span>
      </h3>
      <p className="text-gray-400 mb-6 text-[16px] leading-relaxed">
        Abaixo alguns dos cursos que possuo incluindo a faculdade atual que
        curso..
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {[
          {
            title: "Análise e Desenvolvimento de Sistemas",
            date: "2023 - Atual",
            place: "EAD - Estácio",
          },
          {
            title: "Curso de Interfaces",
            date: "2024 - 2024",
            place: "Udemy - Online",
          },
          {
            title: "Curso de Inglês",
            date: "2025 - Atual",
            place: "Curso Online",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-secondary min-h-[200px] flex flex-col justify-between p-5 desktop1:py-8 desktop1:px-8 rounded-md hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col">
              <p className="text-green-400 text-[18px] mt-1">{item.date}</p>
              <h4 className="font-semibold text-[22px] my-2 leading-6">
                {item.title}
              </h4>
            </div>
            <p className="flex">
              <span className="text-secondary mr-2">∆</span> {item.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==============================
   SKILLS SECTION
============================== */
function SkillsContent() {
  const skills = [
    "html5",
    "css3",
    "javascript",
    "react",
    "nextjs",
    "tailwindcss",
    "nodejs",
    "figma",
  ];

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-3">
        <span className="py-1 text-[42px] rounded">Minhas Habilidades</span>
      </h3>
      <p className="text-gray-400 mb-6 text-[16px] leading-relaxed">
        Abaixo algumas das habilidades que adquiri ao longo de meus estudos até
        o presente momento..
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-[#1a1a1a] border border-secondary rounded-md flex items-center justify-center py-8 hover:bg-[#222] hover:scale-110 transition-all duration-300"
          >
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill}/${skill}-original.svg`}
              alt={skill}
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ==============================
   ABOUT SECTION
============================== */
function AboutContent() {
  return (
    <div className="flex flex-col text-ce">
      <h3 className="text-2xl font-semibold mb-3">
        <span className="py-1 text-[42px] rounded">Sobre mim</span>
      </h3>
      <p className="text-gray-400 mb-6 text-[16px] leading-relaxed">
        Abaixo um pequeno resumo de quem sou eu:
      </p>

      <div className="grid md:grid-cols-2 gap-4 text-[16px]">
        <p className="hover:text-secondary cursor-pointer transition-all duration-300">
          <strong>Nome:</strong> Gabriel de Souza
        </p>
        <p className="hover:text-secondary cursor-pointer transition-all duration-300">
          <strong>Número:</strong> (21) 97261 - 3067
        </p>
        <p className="hover:text-secondary cursor-pointer transition-all duration-300">
          <strong>Experiência:</strong> 2 anos
        </p>
        <p className="hover:text-secondary cursor-pointer transition-all duration-300">
          <strong>Nacionalidade:</strong> Brasileiro
        </p>
        <p className="hover:text-secondary cursor-pointer transition-all duration-300">
          <strong>E-mail:</strong> biel65115@gmail.com
        </p>
        <p className="hover:text-secondary cursor-pointer transition-all duration-300">
          <strong>Idiomas:</strong> Inglês (básico), Português (nativo)
        </p>
      </div>
    </div>
  );
}
