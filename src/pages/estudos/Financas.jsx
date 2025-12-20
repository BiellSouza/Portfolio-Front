import React from 'react'
import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Currency } from 'lucide-react'
import { classNames } from 'primereact/utils'

function Financas() {
  // consts gerais
  const [visibleSomar, setVisibleSomar] = useState(false)
  const [reference, setReference] = useState('')
  const [valorAtual, setValorAtual] = useState(0)
  const [observacao, setObservacao] = useState('')

  // array de historico
  const [historico, setHistorico] = useState([])

  // consts adição
  const [valorSomar, setValorSomar] = useState('')
  const [resultSoma, setResultSoma] = useState()

  // consts subtração
  const [visibleSubtrair, setVisibleSubtrair] = useState(false)
  const [valorSubtrair, setValorSubtrair] = useState('')
  const [resultSubtrai, setResultSubtrai] = useState()

  // Modais
  const ModalSomar = () => {
    setVisibleSomar(true)
  }
  const ModalSubtrair = () => {
    setVisibleSubtrair(true)
  }

  // Funções de somar
  const Somar = () => {
    if (valorSomar > 0 && reference != '') {
      setValorAtual((prev) => prev + valorSomar)
      setHistorico((prev) => [
        ...prev,
        {
          tipo: 'entrada',
          valor: valorSomar,
          reference,
          observacao,
        },
      ])
      setValorSomar('')
      setResultSoma(resultSoma)
      setVisibleSomar(false)
      setReference('')
      setObservacao('')
    } else {
      alert('Os campos de valor e Referência precisam ser preenchidos!')
    }
  }

  const Subtrair = () => {
    if (valorSubtrair > 0 && reference != '') {
      setValorAtual((prev) => prev - valorSubtrair)
      setHistorico((prev) => [
        ...prev,
        {
          tipo: 'saída',
          valor: valorSubtrair,
          reference,
          observacao,
        },
      ])
      setValorSubtrair('')
      setResultSubtrai(resultSubtrai)
      setVisibleSubtrair(false)
      setReference('')
      setObservacao('')
    }
  }

  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col justify-evenly w-[90%] max-w-[600px] border border-white p-8 rounded-t-2xl gap-8">
        <h1 className="text-white font-sans text-[32px] text-center">
          Controle{' '}
          <strong className="text-secondary border-b-2 border-secondary">
            Financeiro
          </strong>
        </h1>
        <div className="flex w-full justify-evenly">
          <div className="bg-green-200/50 p-8 rounded-md boder max-w-[400px] w-[40%] flex flex-col items-center gap-4 border-2 border-green-500">
            <h1 className="font-medium font-sans text-white">Entrada</h1>
            <button
              onClick={ModalSomar}
              className="outline-none font-Roboto bg-white p-3 rounded-md scale-105 hover:scale-100 transition-all duration-500 hover:text-white hover:border hover:border-white/50 hover:bg-green-800"
            >
              Adicionar Valor
            </button>
          </div>
          <div className="bg-red-200/50 p-8 rounded-md boder max-w-[400px] w-[40%] flex flex-col items-center gap-4 border-2 border-red-500">
            <h1 className="font-medium font-sans text-white">Saída</h1>
            <button
              onClick={ModalSubtrair}
              className="outline-none font-Roboto bg-white p-3 rounded-md scale-105 hover:scale-100 transition-all duration-300 hover:text-white hover:border hover:border-white/50 hover:bg-red-800"
            >
              Subtrair Valor
            </button>
          </div>
        </div>

        <h1 className="text-white w-full text-center text-[45px]">
          R$ {valorAtual.toFixed(2)}
        </h1>
      </div>

      <Dialog
        header="Somar"
        visible={visibleSomar}
        onHide={() => setVisibleSomar(false)}
        style={{ width: '641px' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <label>Valor:</label>
            <input
              type="number"
              placeholder="Insira aqui:"
              className="w-full border-b outline-none text-black"
              required
              value={valorSomar}
              onChange={(e) => setValorSomar(Number(e.target.value))}
            />
          </div>
          <div className="flex gap-2">
            <label className=" whitespace-nowrap">Referente a:</label>
            <input
              type="text"
              placeholder="Digite aqui:"
              className="w-full border-b outline-none text-black"
              required
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label>OBS:</label>
            <input
              type="text"
              placeholder="Digite aqui:"
              className="w-full border-b outline-none text-black"
            />
          </div>

          <button
            onClick={Somar}
            className="bg-secondary border-2 border-primary py-2 rounded-md hover:scale-105 transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </Dialog>

      <Dialog
        header="Subtrair"
        visible={visibleSubtrair}
        onHide={() => setVisibleSubtrair(false)}
        style={{ width: '641px' }}
        breakpoints={{ '960px': '75vw', '641px': '100vw' }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <label>Valor:</label>
            <input
              type="number"
              placeholder="Insira aqui:"
              className="w-full border-b outline-none text-black"
              required
              value={valorSubtrair}
              onChange={(e) => setValorSubtrair(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label className=" whitespace-nowrap">Referente a:</label>
            <input
              type="text"
              placeholder="Digite aqui:"
              className="w-full border-b outline-none text-black"
              required
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <label>OBS:</label>
            <input
              type="text"
              placeholder="Digite aqui:"
              className="w-full border-b outline-none text-black"
            />
          </div>
          <button
            onClick={Subtrair}
            className="bg-secondary border-2 border-primary py-2 rounded-md hover:scale-105 transition-all duration-300"
          >
            Enviar
          </button>
        </div>
      </Dialog>

      <div className="w-[90%] max-w-[600px] border border-white p-8 rounded-b-2xl mt-4">
        <h1 className="text-white">Histórico</h1>
        <div className="h-0.5 bg-gradient-to-r from-secondary via-secondary to-secondary my-4"></div>
        <div className="text-white flex justify-between">
          <div className="flex flex-col gap-3 w-full">
            {historico.map((item, index) => (
              <div
                key={index}
                className="text-white flex justify-between items-center border-b border-white/20 pb-2"
              >
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-[18px] font-medium">{item.tipo}</h1>

                  <h1 className="text-[18px] font-medium">{item.reference}</h1>
                  <p className="text-[14px] opacity-80">
                    R$ {Number(item.valor).toFixed(2)}
                  </p>
                </div>

                {item.observacao && (
                  <p className="text-[14px] italic opacity-70">
                    {item.observacao}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Financas
