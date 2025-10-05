/* eslint-disable react/prop-types */
export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  projectLink,
  githubLink,
  number,
}) {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center bg-black/30 p-6 rounded-xl gap-6">
      {/* Imagem */}
      <div className="flex-1">
        <img src={image} alt={title} className="rounded-lg shadow-lg w-full" />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-[100px] text-white">{number}</h1>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-green-500 text-black px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="flex gap-4 mt-4">
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-4 rounded-full transition hover:scale-110 hover:bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-move-up-right-icon lucide-move-up-right"
              >
                <path d="M13 5H19V11" />
                <path d="M19 5L5 19" />
              </svg>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-white p-4 rounded-full transition hover:scale-110 hover:bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
