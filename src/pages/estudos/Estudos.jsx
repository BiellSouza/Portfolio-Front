import React from "react";
import { useState } from "react";

function Estudos() {
  const [count, setCount] = useState(0);
  const [explicacaoAcrescentar, setExplicacaoAcrescentar] = useState(null);
  const [explicacaoZerar, setexplicacaoZerar] = useState(null);

  const soma = () => {
    setCount((valor) => valor + 1);
    console.log("Função soma funcionando, Dev!");
  };

  const subtrair = () => {
    setCount((valor) => valor - 1);
    console.log("Função subtrair funcionando, Dev!");
  };

  const apagar = () => {
    setCount(0);
    console.log("Função apagar funcionando, Dev!");
  };

  const infoAcrescentar = () => {
    setExplicacaoAcrescentar(true);
    console.log("Modal info Acrescentar funcionando, Dev!");
  };

  const fecharModal = () => {
    setExplicacaoAcrescentar(null);
    console.log("Função fechar modal funcionando, Dev!");
  };

  const infoZerar = () => {
    setexplicacaoZerar(true);
    alert("Função em Desenvolvimento!");
    console.log("Função info Zerar funcionando, Dev!");
  };

  //fazer aparecer um tipo de modal explicando cada um dos botões

  return (
    <div className="text-white translate-y-[50%] w-fit p-8 border-2 border-secondary flex flex-col gap-4 mt-32 items-center m-auto">
      <h1 className="text-[32px]">
        Contador utilizando{" "}
        <span className="text-secondary border-b border-b-secondary">
          useState
        </span>
      </h1>
      <p className="text-[20px] text-white/50">
        Este botão foi clicado <span className="text-secondary">{count}</span>{" "}
        vezes...{" "}
      </p>
      <div className="flex gap-5">
        {" "}
        <button
          onClick={soma}
          className="p-3 bg-secondary text-primary rounded-md hover:scale-110 duration-300 ease-out"
        >
          Somar
        </button>{" "}
        <button
          onClick={subtrair}
          className="p-3 bg-secondary text-primary rounded-md hover:scale-110 duration-300 ease-out"
        >
          Diminuir
        </button>{" "}
        <button
          onClick={apagar}
          className="p-3 bg-secondary text-primary rounded-md hover:scale-110 duration-300 ease-out"
        >
          Zerar
        </button>
        <button
          onClick={infoAcrescentar}
          className="p-3 bg-secondary text-primary rounded-md hover:scale-110 duration-300 ease-out"
        >
          Modal
        </button>
      </div>

      {explicacaoAcrescentar && (
        <div className="relative">
          <div className="absolute translate-x-[-50%] translate-y-[-89%] w-[700px] p-4 bg-black border-2 border-secondary">
            <div className="flex justify-between mb-6">
              {" "}
              <h1>Modal...</h1>{" "}
              <button
                onClick={fecharModal}
                className=" flex w-fit hover:scale-125 hover:text-secondary duration-300 ease-out"
              >
                X
              </button>
            </div>
            {/* <p className="">
              Primeiro, eu codei a seguinte linha: <br /> <br />{" "}
              <span className="text-secondary border-b border-b-secondary">
                const [count, setCount] = useState(0);
              </span>{" "}
              <br />
              <br /> Nela, eu declaro as variáveis{" "}
              <span className="text-blue-600">count</span> que será{" "}
              <span className="text-blue-600">meu valor atual</span> e{" "}
              <span className="text-red-600">setCount</span> que será meu valor
              <span className="text-red-600"> atualizado</span>, repare que é
              regra ter o{" "}
              <span className="text-secondary border-b border-b-secondary">
                `set`
              </span>{" "}
              na variável atualizada pois é com esse começo{" "}
              <span className="text-secondary border-b border-b-secondary">
                `set`
              </span>{" "}
              que o React identifica que o valor foi{" "}
              <span className="text-secondary border-b border-b-secondary">
                `atualizado.`
              </span>{" "}
              <br /> <br />
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Estudos;
