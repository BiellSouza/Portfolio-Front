import React, { useState } from "react";

// Desafio 1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

// 2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function ExerciciosJS() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");

  const calcIdade =
    idade >= 18 && idade > 0 ? (
      <p className="flex flex-col text-center">
        {" "}
        Você tem {idade}, portanto,
        <span className="text-secondary underline">já é maior de idade!</span>
      </p>
    ) : idade < 18 && idade > 0 ? (
      <p className="flex flex-col text-center">
        Você tem {idade}, portanto,
        <span className="text-secondary underline">
          ainda é menor de idade!
        </span>
      </p>
    ) : (
      <p>Insira uma Idade válida!</p>
    );

  return (
    <div className="flex flex-col gap-12 desktop1:flex-row desktop1:gap-4 justify-center items-center h-screen">
      <div className="text-white flex flex-col items-center gap-4">
        <h1>Digite seu nome abaixo:</h1>
        <div className="border px-6 py-2 rounded-full">
          <input
            type="text"
            placeholder="Digite seu nome..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" capitalize bg-transparent border-b border-white/50 text-white outline-none"
          />
        </div>

        <p>
          Olá <span className="text-secondary capitalize">{name}</span>, tudo
          bem?
        </p>
      </div>

      <hr className="border border-secondary/30 w-[250px] desktop1:hidden" />

      <div className="text-white flex flex-col items-center gap-4">
        <h1>Digite sua idade abaixo:</h1>
        <div className="border px-6 py-2 rounded-full">
          <input
            type="number"
            placeholder="Digite sua idade..."
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
            className="bg-transparent border-b border-white/50 text-white outline-none"
          />
        </div>

        <p>{calcIdade}</p>
      </div>
    </div>
  );
}

export default ExerciciosJS;
