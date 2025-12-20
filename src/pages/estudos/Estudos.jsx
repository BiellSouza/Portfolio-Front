import React, { useState } from 'react'
import { Calculator } from 'lucide-react'

function Estudos() {
  // Lógica da Calculadora
  const [numberatual, setNumberAtual] = useState(0)
  const [firstNum, setFirstNumb] = useState()
  const [operator, setOperator] = useState('')

  function inputNumber(e) {
    var input = e.target.value
    if (numberatual === 0) {
      setNumberAtual(input)
    } else {
      setNumberAtual(numberatual + input)
    }
  }

  function porcentage() {
    setNumberAtual(numberatual / 100)
  }

  function resetInput() {
    setNumberAtual(0)
  }

  function sign() {
    setNumberAtual(-numberatual)
  }

  function operatorHandle(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setFirstNumb(numberatual)
    setNumberAtual(0)
  }

  function calculate() {
    // console.log('calculou!')
    // console.log(operator)
    // console.log(numberatual)
    // console.log(firstNum)
    if (operator === '/') {
      setNumberAtual(parseFloat(firstNum) / parseFloat(numberatual))
    } else if (operator === 'x') {
      setNumberAtual(parseFloat(firstNum) * parseFloat(numberatual))
    } else if (operator === '-') {
      setNumberAtual(parseFloat(firstNum) - parseFloat(numberatual))
    } else if (operator === '+') {
      setNumberAtual(parseFloat(firstNum) + parseFloat(numberatual))
    }
  }

  // Ui da Calculadora
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col bg-[#232323] p-2 rounded-[10px] border border-white/30">
        <div className="h-28">
          <h1 className="text-white pb-1 text-[32px] h-full flex justify-end items-end">
            {numberatual}
          </h1>
        </div>
        <div className="text-white w-fit grid grid-cols-4 gap-2">
          <button
            onClick={resetInput}
            className="h-10 w-10 rounded-full text-lg bg-white/30"
          >
            AC
          </button>
          <button
            onClick={sign}
            className="h-10 w-10 rounded-full text-lg bg-white/30"
          >
            +/-
          </button>
          <button
            onClick={porcentage}
            className="h-10 w-10 rounded-full text-lg bg-white/30"
          >
            %
          </button>
          <button
            onClick={operatorHandle}
            value={'/'}
            className="h-10 w-10 rounded-full text-lg bg-[#FF9500]"
          >
            /
          </button>

          <button
            onClick={inputNumber}
            value={7}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            7
          </button>
          <button
            onClick={inputNumber}
            value={8}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            8
          </button>
          <button
            onClick={inputNumber}
            value={9}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            9
          </button>
          <button
            onClick={operatorHandle}
            value={'x'}
            className="h-10 w-10 rounded-full text-lg bg-[#FF9500]"
          >
            x
          </button>

          <button
            onClick={inputNumber}
            value={4}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            4
          </button>
          <button
            onClick={inputNumber}
            value={5}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            5
          </button>
          <button
            onClick={inputNumber}
            value={6}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            6
          </button>
          <button
            onClick={operatorHandle}
            value={'-'}
            className="h-10 w-10 rounded-full text-lg bg-[#FF9500]"
          >
            -
          </button>

          <button
            onClick={inputNumber}
            value={1}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            1
          </button>
          <button
            onClick={inputNumber}
            value={2}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            2
          </button>
          <button
            onClick={inputNumber}
            value={3}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            3
          </button>
          <button
            onClick={operatorHandle}
            value="+"
            className="h-10 w-10 rounded-full text-lg bg-[#FF9500]"
          >
            +
          </button>

          <button className="h-10 w-10 rounded-full text-lg bg-red-800 flex justify-center items-center">
            <Calculator width={15} />
          </button>
          <button
            onClick={inputNumber}
            value={0}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            0
          </button>
          <button
            onClick={inputNumber}
            value={'.'}
            className="h-10 w-10 rounded-full text-lg bg-white/20"
          >
            ,
          </button>
          <button
            onClick={calculate}
            className="h-10 w-10 rounded-full text-lg bg-[#FF9500]"
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default Estudos
