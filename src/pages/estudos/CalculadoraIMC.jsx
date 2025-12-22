import React, { useState } from 'react'

// Peso / pela (altura x altura)

function CalculadoraIMC() {
  // Consts para coletar dados
  const [name, setName] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  // Consts de resposta
  const [result, setResult] = useState('')
  const [message, setMessage] = useState(false)

  // Consts para mostrar dados
  const [nameDado, setNameDado] = useState('')
  const [alturaDado, setAlturaDado] = useState('')
  const [pesoDado, setPesoDado] = useState('')

  function calculate(e) {
    const alturaMetros = parseFloat(altura) / 100
    const imc = parseFloat(peso) / (alturaMetros * alturaMetros)

    if (peso === '' || altura === '' || name === '') {
      alert('Nome, peso ou altura sem valor definido!')
    } else {
      setNameDado(name.charAt(0).toUpperCase() + name.slice(1))
      setAlturaDado(altura)
      setPesoDado(peso)
      setResult(imc.toFixed(1))
      setMessage(true)
    }

    if (imc >= 18.5 && imc <= 24.9) {
      alert(
        'Seu IMC é considerado bom, pois está entre  18,5 e 24,9 kg. Veja como é o cáculo no quadrado abaixo das informações!'
      )
    } else if (imc < 18.5) {
      alert(
        'Cuide-se pois seu IMC está abaixo do considerado bom. O indicativo bom começa a partir de 18.5 Kg. Veja como é o cáculo no quadrado abaixo das informações!!'
      )
    } else {
      alert(
        'Cuide-se pois seu IMC está acima do considerado bom. O indicativo bom chega a no máximo 24.9 kg. Veja como é o cáculo no quadrado abaixo das informações!'
      )
    }
  }

  function reset() {
    setName('')
    setPeso('')
    setAltura('')
    setMessage(false)
  }

  return (
    <div className="h-screen w-auto flex justify-center items-center">
      <div className=" border border-secondary bg-white/10 rounded-lg p-8">
        <h1 className="text-white text-[32px] text-center">
          Calcular <span className="text-secondary">IMC</span>
        </h1>
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex border-b border-secondary text-white gap-3 pb-1">
            <label className="w-[50px]" htmlFor="">
              Nome:
            </label>
            <input
              type="text"
              placeholder="Digite seu Nome"
              className="bg-transparent outline-none
              "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex border-b border-secondary text-white gap-3 pb-1">
            <label className="w-[50px]" htmlFor="">
              Altura:
            </label>
            <input
              type="number"
              placeholder="Insira sua Altura"
              className="bg-transparent outline-none
              "
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <div className="flex border-b border-secondary text-white gap-3 pb-1">
            <label className="w-[50px]" htmlFor="">
              Peso:
            </label>
            <input
              type="text"
              placeholder="Insira seu Peso"
              className="bg-transparent outline-none
              "
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-evenly">
          {' '}
          <button
            onClick={calculate}
            className="mt-8 bg-secondary p-1 w-[100px] rounded-md flex justify-center hover:scale-105 transition-all duration-300 m-auto"
          >
            Calcular
          </button>
          <button
            onClick={reset}
            className="mt-8 bg-red-800 text-white p-1 w-[100px] rounded-md flex justify-center hover:scale-105 transition-all duration-300 m-auto"
          >
            Resetar
          </button>
        </div>
        <div className="mt-8 max-h-[100px] border border-secondary rounded-md text-white first-letter:uppercase">
          {message && (
            <p className="p-2 text-[12px] h-full flex items-end">
              {nameDado}, o cálculo do IMC é:
              <br />
              peso / (altura x altura) ou seja:
              <br />
              {peso} / ({altura} x {altura}). <br />
              Seu IMC é {result}.
            </p>
          )}
        </div>

        <div className="text-white text-[10px] flex flex-col justify-center items-center mt-4">
          {' '}
          <p>
            Desenvolvido pelo{' '}
            <span className="text-secondary border-b border-secondary">
              Front Biell
            </span>
          </p>
          <span>
            Apenas para{' '}
            <span className="border-b border-white/50">
              testar conhecimento
            </span>
            ...
          </span>
        </div>
      </div>
    </div>
  )
}

export default CalculadoraIMC
