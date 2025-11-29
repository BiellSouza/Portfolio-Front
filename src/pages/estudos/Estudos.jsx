import React from "react";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";
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
        <Dialog
          header="Header"
          visible={explicacaoAcrescentar}
          style={{ width: "50vw" }}
          onHide={() => {
            if (!explicacaoAcrescentar) return;
            setExplicacaoAcrescentar(false);
          }}
        >
          Modal Berto
          <br />
          <br />
          <p>Aperta o 'X' para fechar o modal...</p>
        </Dialog>
      )}
    </div>
  );
}

export default Estudos;
