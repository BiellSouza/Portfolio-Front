/* eslint-disable react/prop-types */
import { ArrowDownRight } from "lucide-react";

export default function ServiceCard({ number, title, description, active }) {
  return (
    <div className="relative flex flex-col justify-between bg-transparent border-b border-neutral-700 py-8 transition-all text-center items-center desktop1:text-start desktop1:items-start">
      {/* Número e ícone */}
      <div className="flex justify-between items-center">
        <h3 className="font-mono text-[42px] font-semibold text-secondary">
          {number}
        </h3>

        {/* Container da seta com hover */}
        {/* <div className="w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 bg-white hover:bg-secondary hover:scale-125 cursor-pointer group">
          <ArrowDownRight
            size={24}
            className="transition-transform duration-300 group-hover:-rotate-45"
            color="#000"
          />
        </div> */}
      </div>

      {/* Título */}
      <h2 className="text-2xl font-mono font-bold text-white mt-4 mb-2">
        {title}
      </h2>

      {/* Descrição */}
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
