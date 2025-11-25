import React from "react";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function ListaInterativa() {
  const [modalList, setModalList] = useState(false);
  const [visible, setVisible] = useState(false);
  const [valor, setValor] = useState("");
  const [dateValor, setDateValor] = useState("");
  const [salvar, setSalvar] = useState([]);

  const expandirModal = () => {
    if (salvar.length === 0) {
      alert("Nehum item salvo ainda!");
    } else {
      setVisible(true);
      setModalList(true);
    }
  };

  const SalvarItem = () => {
    if (valor.length === 0 || dateValor === "") {
      alert("Insira um texto e uma data");
    } else {
      setSalvar((prev) => [...prev, `${valor} - ${dateValor}`]);
      alert("Item salvo. Confira a lista!");
      setValor("");
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <div className=" flex p-3 rounded-md w-[80%] max-w-[400px] ">
        <input
          type="text"
          className="bg-transparent text-white outline-none border-b w-[80%] max-w-[400px]"
          placeholder="Digite ..."
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />{" "}
        <input
          type="date"
          value={dateValor}
          onChange={(e) => setDateValor(e.target.value)}
          className="bg-white rounded-tr-md px-2 outline-none border-b w-[80%] max-w-[400px]"
        />
      </div>

      <div className="flex flex-col phone3:flex-row gap-6">
        <button
          className="bg-white/20 text-white/50 outline-none border border-white p-2 rounded-md"
          onClick={SalvarItem}
        >
          Salvar Item
        </button>

        <button
          className="bg-white/20 text-white/50 outline-none border border-white p-2 rounded-md"
          onClick={expandirModal}
        >
          Abrir Modal
        </button>
      </div>

      {modalList && (
        <div className="card flex justify-content-center">
          <Dialog
            header="Header"
            visible={visible}
            style={{ width: "50vw" }}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}
          >
            {salvar.map((item, index) => (
              <div key={index}>
                <li key={index}>{item}</li>
              </div>
            ))}
          </Dialog>
        </div>
      )}
    </div>
  );
}

export default ListaInterativa;
