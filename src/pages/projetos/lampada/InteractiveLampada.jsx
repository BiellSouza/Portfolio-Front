import React from "react";
import Apagada from "../lampada/desligada.jpg";
import Acesa from "../lampada/ligada.jpg";
import Quebrada from "../lampada/quebrada.jpg";
import { useState } from "react";

function InteractiveLampada() {
  const [lampada, setLampada] = useState("");

  const Estado = () => {
    if (lampada === "acesa") {
      return <img src={Acesa} alt="" />;
    }

    if (lampada === "quebrada") {
      return <img src={Quebrada} alt="" />;
    }

    return <img src={Apagada} alt="" />;
  };

  return (
    <div className="flex justify-center items-center min-h-screen gap-4 bg-white">
      <div className="border rounded-2xl flex flex-col w-[90%] max-w-[425px] desktop1:max-w-[800px] mt-8">
        <div className="flex flex-col desktop1:flex-row">
          <div className="text-black/50 text-center desktop1:text-start desktop1:max-w-[400px] desktop1:p-2">
            <h1 className="text-[22px] mt-8">
              Bem Vindos ao meu <span className="text-red-700">Projeto 00</span>
            </h1>
            <p className="text-[14px] mt-4 w-[80%] desktop1:w-full m-auto">
              Este é um projeto bem simples e iniciante no mundo da programação,
              siga as informações abaixo para entender como funciona...
            </p>

            <div className="border rounded-2xl p-2 w-[90%] mx-auto mt-6 desktop1:mx-0">
              <p className="text-[14px] mt-6 italic">
                1- Clique uma vez no botão "Acenda a lâmpada" para acender.{" "}
                <br /> <br /> 2- Clique uma vez no botão "Apague a lâmpada" para
                apagar. <br /> <br />
                3- Clique uma vez no botão "Quebre a lâmpada" para quebrar.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-[90%] flex justify-center items-center">
              {" "}
              {Estado()}
            </div>
            <div className="flex flex-row gap-8 justify-between">
              <button
                onClick={() => setLampada("acesa")}
                className="cursor-pointer hover:text-yellow-300 outline-none hover:transition-all ease-out hover:scale-105 hover:duration-300"
              >
                Acender
              </button>
              <button
                onClick={setLampada}
                className="cursor-pointer hover:text-yellow-300 outline-none hover:transition-all ease-out hover:scale-105 hover:duration-300"
              >
                Apagar
              </button>
              <button
                onClick={() => setLampada("quebrada")}
                className="cursor-pointer hover:text-yellow-300 outline-none hover:transition-all ease-out hover:scale-105 hover:duration-300"
              >
                Quebrar
              </button>
            </div>
          </div>
        </div>
        <div className="text-black/50 text-center my-6">
          Projeto desenvolvido para treinar o uso do useState no estudo de
          JavaScript.
        </div>
      </div>
    </div>
  );
}

export default InteractiveLampada;
