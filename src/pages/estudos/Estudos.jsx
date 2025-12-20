import React, { useState } from 'react'
import { Calculator } from 'lucide-react'

function Estudos() {
  // Lógica da Calculadora

  // constantes (variáveis) da calculadora
  const [num, setNum] = useState(0)
  const [operator, setOperator] = useState('')
  const [oldNum, setOldNum] = useState('')

  // funções da Calculadora

  //---- Pegar número clicado
  function inputNumber(e) {
    var escolha = e.target.value

    if (num === 0) {
      setNum(escolha)
    } else {
      setNum(num + escolha)
    }
  }

  //---- Resetar numero clicado
  function reset() {
    setNum(0)
  }

  // ---- Procentagem
  function porcentagem() {
    setNum(num / 100)
  }

  // ---- Inverte sinal
  function signal() {
    setNum(-num)
  }

  // ---- Realiza operações
  function operatorHandle(e) {
    var operatorInput = e.target.value
    setOldNum(num)
    setNum(0)
    setOperator(operatorInput)
  }

  // --- Calcular
  function calculate() {
    if (operator === '/') {
      setNum(oldNum / num)
    } else if (operator === 'x') {
      setNum(oldNum * num)
    } else if (operator === '-') {
      setNum(oldNum - num)
    } else if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    }
  }

  // Ui da Calculadora
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 w-[90%]">
        <div className="w-80 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl p-4">
          {/* Display */}
          <div className="mb-4 h-20 overflow-hidden rounded-xl bg-black/60 px-4 flex items-center justify-end">
            <span className="text-3xl font-mono text-white select-none">
              {num}
            </span>
          </div>

          {/* Botões */}
          <div className="grid grid-cols-4 gap-3">
            {/* Linha 1 */}
            <button
              onClick={reset}
              className=" h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
            >
              AC
            </button>

            <button
              onClick={signal}
              className=" h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
            >
              +/-
            </button>

            <button
              onClick={porcentagem}
              className="h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
            >
              %
            </button>

            <button
              onClick={operatorHandle}
              value="/"
              className="h-14 rounded-xl bg-indigo-500 text-white text-lg font-semibold shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 transition active:scale-95 active:shadow-inner"
            >
              ÷
            </button>

            {/* Linha 2 */}
            {['7', '8', '9'].map((n) => (
              <button
                key={n}
                value={n}
                onClick={inputNumber}
                className="h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
              >
                {n}
              </button>
            ))}

            <button
              onClick={operatorHandle}
              value="x"
              className="h-14 rounded-xl bg-indigo-500 text-white text-lg font-semibold shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 transition active:scale-95 active:shadow-inner"
            >
              ×
            </button>

            {/* Linha 3 */}
            {['4', '5', '6'].map((n) => (
              <button
                key={n}
                value={n}
                onClick={inputNumber}
                className="h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
              >
                {n}
              </button>
            ))}

            <button
              onClick={operatorHandle}
              value="-"
              className="h-14 rounded-xl bg-indigo-500 text-white text-lg font-semibold shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 transition active:scale-95 active:shadow-inner"
            >
              −
            </button>

            {/* Linha 4 */}
            {['1', '2', '3'].map((n) => (
              <button
                key={n}
                value={n}
                onClick={inputNumber}
                className="h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
              >
                {n}
              </button>
            ))}

            <button
              onClick={operatorHandle}
              value="+"
              className="h-14 rounded-xl bg-indigo-500 text-white text-lg font-semibold shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 transition active:scale-95 active:shadow-inner"
            >
              +
            </button>

            {/* Linha 5 */}
            <button
              value={0}
              onClick={inputNumber}
              className="col-span-2 h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
            >
              0
            </button>

            <button
              onClick={inputNumber}
              value="."
              className="h-14 rounded-xl bg-zinc-800 text-white text-lg font-semibold shadow-lg shadow-black/40 hover:bg-zinc-700 transition active:scale-95 active:shadow-inner"
            >
              .
            </button>

            <button
              onClick={calculate}
              className="h-14 rounded-xl bg-emerald-500 text-black text-lg font-bold shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transitio active:scale-95 active:shadow-inner"
            >
              =
            </button>
          </div>
        </div>
        <div className="flex">
          <h1 className="text-white text-center m-auto w-[90%]">
            Bem vindos a mais um projeto, aprecie com moderação!
          </h1>
        </div>
        <div className="flex">
          <h1 className="text-white text-sm text-center m-auto w-full">
            Desenvolvido pelo{' '}
            <span className="border-b border-secondary">
              <span className="text-secondary">Dev Front</span> Biell
            </span>
            ...{' '}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Estudos
