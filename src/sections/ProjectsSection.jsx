import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/Imagens/project1.png";
import project2 from "../assets/Imagens/project2.png";

export default function ProjectsSection() {
  const projects = [
    {
      number: "01",
      title: "Portfolio Website",
      description: "Meu site pessoal feito com React e TailwindCSS.",
      technologies: ["React", "TailwindCSS", "Vite"],
      image: project1,
      projectLink: "https://portfolio-front-tan.vercel.app/",
      githubLink: "https://github.com/BiellSouza/Portfolio-Front",
    },
    {
      number: "02",
      title: "Buscador de Cep",
      description: "Buscador de CEP simples utilizando api 'ViaCep'.",
      technologies: ["Html", "Css", "javaScript"],
      image: project2,
      projectLink: "https://busca-cep-d007c8.netlify.app/",
      githubLink: "https://github.com/BiellSouza/Spck-Buscacep-",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-[96px] relative" id="trabalhos">
      <h2 className="text-3xl font-bold text-white mb-8 text-center desktop1:text-start">
        Projetos
      </h2>

      <div className="flex justify-center">
        <div className="max-w-[576px] desktop1:max-w-full bg-white/10 p-4 rounded-md ">
          <ProjectCard {...projects[current]} />

          {/* Setas abaixo do card */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-secondary hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-black" />
            </button>
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-secondary hover:bg-white hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={24} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
