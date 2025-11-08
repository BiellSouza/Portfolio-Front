import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

// const initialCards = [
//   {
//     title: "Kirby",
//     subtitle: "Star Allies",
//     rating: "4.7",
//     color: "from-blue-700 to-cyan-400",
//     img: kirby,
//   },
//   {
//     title: "kkk",
//     subtitle: "Star Allies",
//     rating: "4.7",
//     color: "from-blue-700 to-cyan-400",
//     img: kirby,
//   },
//   {
//     title: "Kirby",
//     subtitle: "Star Allies",
//     rating: "4.7",
//     color: "from-blue-700 to-cyan-400",
//     img: kirby,
//   },
//   {
//     title: "Kirby",
//     subtitle: "Star Allies",
//     rating: "4.7",
//     color: "from-blue-700 to-cyan-400",
//     img: kirby,
//   },
//   {
//     title: "Kirby",
//     subtitle: "Star Allies",
//     rating: "4.7",
//     color: "from-blue-700 to-cyan-400",
//     img: kirby,
//   },
// ];

export default function AnimatedCards() {
  const [cards, setCards] = useState([]);
  const [animating, setAnimating] = useState(false);

  // Busca os primeiros 5 Pokémon
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
      const data = await response.json();

      // Busca detalhes (imagens e stats)
      const detailed = await Promise.all(
        data.results.map(async (p) => {
          const res = await fetch(p.url);
          const pokeData = await res.json();
          return {
            name: pokeData.name,
            image: pokeData.sprites.other["official-artwork"].front_default,
            rating: (Math.random() * 5).toFixed(1), // só pra simular “nota”
            color: "from-yellow-400 to-red-500", // pode variar por tipo depois
          };
        })
      );

      setCards(detailed);
    };

    fetchPokemons();
  }, []);

  const rotateRight = () => {
    if (animating) return;
    setAnimating(true);
    setCards((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      copy.push(first);
      return copy;
    });
    setTimeout(() => setAnimating(false), 400);
  };

  const rotateLeft = () => {
    if (animating) return;
    setAnimating(true);
    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      copy.unshift(last);
      return copy;
    });
    setTimeout(() => setAnimating(false), 400);
  };

  const rotation = [-12, -6, 0, 6, 12];

  return (
    <div className="flex flex-col items-center relative w-[90%] desktop1:max-w-[405px] m-auto">
      {/* Botões de navegação */}
      <div className="flex gap-4 absolute bottom-[350px] desktop1:bottom-[330px] mb-12">
        <button
          onClick={rotateRight}
          className="bg-primary text-secondary border-2 border-sidebarDash px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={rotateLeft}
          className="bg-primary text-secondary border-2 border-sidebarDash px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300"
        >
          <ArrowBigRight />
        </button>
      </div>

      {/* Área dos cards */}
      <div className="flex justify-center items-end relative pt-44 desktop1:pt-[400px] max-w-[300px]">
        {cards.map((card, index) => {
          const zIndex = index === 2 ? 50 : 40 - Math.abs(2 - index) * 2;

          return (
            <motion.div
              key={index}
              className={`bg-gradient-to-t ${card.color} w-[200px] p-5 rounded-[30px] h-[350px] shadow-xl absolute border-2`}
              style={{
                transform: `rotate(${rotation[index]}deg) translateX(${
                  (index - 2) * (window.innerWidth < 380 ? 14 : 140)
                }px)`,

                zIndex,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-[14px] font-semibold uppercase">
                    {card.name}
                  </h1>
                  <p className="text-[12px] opacity-80">Pokémon</p>
                </div>
                <div className="bg-black/30 px-2 py-1 rounded-full text-[12px]">
                  ⭐ {card.rating}
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <img
                  src={card.image}
                  alt={card.name}
                  className="max-w-[150px] drop-shadow-lg"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
