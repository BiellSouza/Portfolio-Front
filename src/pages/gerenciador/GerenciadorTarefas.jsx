import React, { useState } from "react";
import { ChevronDown, Settings, X } from "lucide-react";

function GerenciadorTarefas() {
  const [menuPerfil, setmenuPerfil] = useState(null);

  const abreMenuPerfil = () => {
    setmenuPerfil(true);
    console.log("funcionando");
  };

  const fecharMenuPerfil = () => {
    setmenuPerfil(false);
    console.log("btn fechar funcionando");
  };

  const itens = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
  ];

  return (
    <div className="bg-white py-2">
      <div className="max-w-[1215px] bg-white w-[90%] mt-4 m-auto">
        <div className="max-w-[1215px] flex flex-col gap-8">
          <header className="px-6">
            <div className="flex justify-between items-center ">
              <h1>Gerenciador</h1>
              <div className="flex items-center gap-4 text-amber-800">
                <img
                  src="https://i.pinimg.com/736x/b1/b3/8d/b1b38d3a6d168fb170365e9106be9c9f.jpg"
                  alt=""
                  className="w-10 rounded-full border border-amber-800"
                />
                <div className="flex gap-4">
                  <h1>Nome</h1>
                  <button onClick={abreMenuPerfil} className="">
                    {" "}
                    <Settings width="16" />
                  </button>

                  {menuPerfil && (
                    <div className="relative">
                      <div className="flex bg-white flex-col gap-2 rounded-md absolute right-[1px] top-6 border w-[250px] ">
                        <div className="flex justify-between px-4 pt-2">
                          <h1>Menu</h1>
                          <X onClick={fecharMenuPerfil} width="22" />
                        </div>
                        <hr />

                        <button
                          className="bg-white px-8 py-1.5 hover:bg-black/10 duration-300
                         ease-in-out rounded-tl-md rounded-tr-md"
                        >
                          Option1
                        </button>
                        <hr />
                        <button
                          className="bg-white px-8 py-1.5 hover:bg-black/10 duration-300
                         ease-in-out"
                        >
                          Option2
                        </button>
                        <hr />
                        <button
                          className="bg-white px-8 py-1.5 hover:bg-black/10 duration-300
                         ease-in-out"
                        >
                          Option3
                        </button>
                        <hr />
                        <button
                          className="bg-white px-8 py-1.5 hover:bg-black/10 duration-300
                         ease-in-out rounded-bl-md rounded-br-md"
                        >
                          Option4
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
          <hr className="border border-amber-800" />
          <main className="bg-amber-900 text-white p-3 rounded-md">
            {" "}
            {itens.map((index) => (
              <div className=" flex gap-4 items-center border-[1px] p-2">
                <label>{index}</label>
                <input type="checkbox" className="bg-white" />
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default GerenciadorTarefas;
