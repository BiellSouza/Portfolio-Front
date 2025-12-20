import React, { useState } from 'react'
import state0 from '../../assets/project2/desligado.png'
import state1 from '../../assets/project2/vermelho.png'
import state2 from '../../assets/project2/amarelo.png'
import state3 from '../../assets/project2/verde.png'

function Semaforo() {
  const [luzes, setLuzes] = useState()
  const SemaforoLuz = () => {
    if (luzes === 'vermelho') {
      return <img src={state1} alt="" />
    }
    if (luzes === 'amarelo') {
      return <img src={state2} alt="" />
    }
    if (luzes === 'verde') {
      return <img src={state3} alt="" />
    }
    return <img src={state0} alt="" />
  }
  return (
    <div className="flex justify-center items-center min-h-screen gap-4 bg-white">
      <div className="border rounded-2xl flex flex-col w-[90%] max-w-[425px] desktop1:max-w-[800px] mt-8">
        <div className="flex flex-col desktop1:flex-row">
          <div className="text-black/50 text-center desktop1:text-start desktop1:max-w-[400px] desktop1:p-2">
            <h1 className="text-[22px] mt-8 max-w-[250px] m-auto desktop1:w-full">
              Bem Vindos ao meu <span className="text-red-700">Projeto 02</span>
            </h1>
            <p className="text-[14px] mt-4 w-[80%] desktop1:w-full m-auto">
              Este é um projeto bem simples e iniciante no mundo da programação,
              siga as informações abaixo para entender como funciona...
            </p>
            <hr className="max-w-[250px] mx-auto my-4" />
            <p className="text-[14px] mt-4 w-[80%] desktop1:w-full m-auto">
              Clique no botão abaixo referente a cor que deseja ver no Semáforo.
            </p>
          </div>
          <div className="flex justify-center items-center mt-4 desktop1:mt-0">
            {SemaforoLuz()}
          </div>
          <div className="flex flex-col gap-4 max-w-[350px] w-[90%] mt-8 desktop1:mt-0 mx-auto">
            <button
              onClick={(e) => setLuzes('vermelho')}
              className=" border-b border-l border-r rounded-md px-4 py-1 scale-110 hover:scale-100 transition-all duration-300 text-white bg-red-900 hover:bg-red-600"
            >
              Vermelho
            </button>
            <button
              onClick={(e) => setLuzes('amarelo')}
              className=" border-b border-l border-r rounded-md px-4 py-1 scale-110 hover:scale-100 transition-all duration-300 text-white bg-yellow-900 hover:bg-yellow-600"
            >
              Amarelo
            </button>
            <button
              onClick={(e) => setLuzes('verde')}
              className=" border-b border-l border-r rounded-md px-4 py-1 scale-110 hover:scale-100 transition-all duration-300 text-white bg-green-900 hover:bg-green-600"
            >
              Verde
            </button>
            <button
              onClick={(e) => setLuzes('desligado')}
              className=" border-b border-l border-r rounded-md px-4 py-1 scale-110 hover:scale-100 transition-all duration-300 text-white bg-black/70 hover:bg-black"
            >
              Desligar
            </button>
          </div>
        </div>
        <div className="text-black/50 text-center my-6">
          Projeto desenvolvido para treinar o uso do useState no estudo de
          JavaScript.
        </div>
      </div>
    </div>
  )
}

export default Semaforo
