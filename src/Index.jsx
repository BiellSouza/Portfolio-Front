import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Service from "./sections/Services";
import ProjectsSection from "./sections/ProjectsSection";
import FormContact from "./sections/FormContact";
import WhyHireMe from "./sections/WhyHireMe";
import SectionTest from "./sections/SectionTest";

function Index() {
  return (
    <div className="max-w-[1215px] w-[90%] m-auto pt-4">
      <Navbar />
      <Hero />
      <hr className="border border-secondary border-opacity-50" />
      <Service />
      <hr className="border border-secondary border-opacity-50" />
      <ProjectsSection />
      <hr className="border border-secondary border-opacity-50" />
      <WhyHireMe />
      {/* <SectionTest /> */}
    </div>
  );
}

export default Index;

// Criar projetos e preparar imagem no figma - Linkar o projeto e repositorio
