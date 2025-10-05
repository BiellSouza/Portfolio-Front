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
      projectLink: "https://meusite.com",
      githubLink: "https://github.com/usuario/portfolio",
    },
    {
      number: "02",
      title: "Buscador de Cep",
      description:
        "Projeto simples utilizando api 'ViaCep' para fornecer informações so cep, basta apenas digitar o Cep e clicar em enviar, e todas as outras informações aparecerão.",
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
    <section className="py-[96px] relative">
      <h2 className="text-3xl font-bold text-white mb-8">Projetos</h2>

      <div className="flex justify-center">
        <div className="w-full">
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
