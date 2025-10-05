import React from "react";

function Navbar({ navigate }) {
  return (
    <div className="flex justify-between items-center w-full p-4 border-b border-secondary border-opacity-50">
      <div className="">
        <h1 className="text-white text-[32px]">
          Biell<span className="text-secondary">Dev</span>
        </h1>
      </div>
      <div className="flex gap-6">
        <ul className="flex items-center gap-12 text-terciary relative">
          <li className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary">
            Início
            <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary">
            Serviços
            <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary">
            Resumo{" "}
            <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary">
            Trabalhos
            <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary">
            Contato
            <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <button className="bg-secondary py-2 px-4 rounded-full text-black hover:scale-110 transition-transform duration-300 hover:bg-primary hover:text-secondary hover:border hover:border-secondary">
          Sobre mim
        </button>
      </div>
    </div>
  );
}

export default Navbar;
