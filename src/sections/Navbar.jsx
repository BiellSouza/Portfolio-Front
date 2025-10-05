import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Calcula o espaço ocupado pela scrollbar
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // evita o "pulo"
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  const links = ["Início", "Serviços", "Trabalhos", "Resumo"];

  return (
    <>
      {/* NAVBAR - Versão desktop */}
      <div className="hidden desktop1:flex justify-between items-center w-full fixed top-0 left-0 bg-[#0d0d0f]/80 backdrop-blur-md border-b border-secondary border-opacity-50 z-50">
        <div className="w-[90%] max-w-[1215px] mx-auto flex justify-between items-center p-4 ">
          <div>
            <h1 className="text-white text-[32px]">
              Biell<span className="text-secondary">Dev</span>
            </h1>
          </div>

          <div className="flex gap-3 desktop2:gap-10">
            <ul className="flex items-center gap-8 desktop2:gap-12 text-terciary relative">
              {links.map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary"
                >
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={600}
                    offset={-70}
                  >
                    {item}
                  </ScrollLink>
                  <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            {/* <button className="bg-secondary py-2 px-4 rounded-full text-black hover:scale-110 transition-transform duration-300 hover:bg-primary hover:text-secondary hover:border hover:border-secondary">
            <ScrollLink to="sobre" smooth={true} duration={600} offset={-70}>
              Sobre mim
            </ScrollLink>
          </button> */}
          </div>
        </div>
      </div>

      {/* SIDEBAR - Versão mobile/tablet */}
      <div className="lg:hidden fixed top-0 left-0 w-full flex justify-center bg-black border-b border-secondary border-opacity-50 z-50">
        {/* Container centralizado com max-width */}
        <div className="w-[90%] max-w-[1215px] flex justify-between items-center p-4 ">
          {/* Logo */}
          <h1 className="text-white text-[28px]">
            Biell<span className="text-secondary">Dev</span>
          </h1>

          {/* Botão abrir menu (fora) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="w-10 h-10 flex items-center justify-center text-white hover:text-secondary transition"
          >
            <Menu
              size={24}
              className={`${
                open ? "opacity-0" : "opacity-100"
              } transition-opacity duration-200`}
            />
          </button>

          {/* SIDEBAR */}
          <div
            className={`fixed top-0 left-0 h-full w-[80%] bg-black border-r border-secondary border-opacity-40 transform ${
              open ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out p-8 flex flex-col gap-8 z-50`}
          >
            {/* Header interno (logo + botão fechar) */}
            <div className="flex justify-between items-center mb-8 gap-6">
              <h1 className="text-white text-[22px]">
                Biell<span className="text-secondary">Dev</span>
              </h1>

              {/* Botão fechar */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="w-10 h-10 flex items-center justify-center text-white hover:text-secondary transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Lista de links */}
            <ul className="flex flex-col gap-8 text-white">
              {links.map((item) => (
                <li
                  key={item}
                  className="relative cursor-pointer group transition-colors duration-300 hover:text-secondary"
                >
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </ScrollLink>
                  <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
