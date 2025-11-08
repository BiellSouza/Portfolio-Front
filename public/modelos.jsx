//cards dinamicos

<motion.div
  key={card.title} // sempre uma key única
  // CLASSES TAILWIND → aparência estática (cor, tamanho, borda, sombra)
  className={`bg-gradient-to-t ${card.color} w-[200px] h-[350px] p-5 rounded-[30px] shadow-xl absolute text-white`}
  // ESTILO INLINE → posição e rotação dinâmica (com base no index)
  style={{
    transform: `rotate(${rotation[index]}deg) translateX(${
      (index - 2) * 140
    }px)`,
    zIndex: index === 2 ? 50 : 40 - Math.abs(2 - index) * 2,
  }}
  // ANIMAÇÃO DE ENTRADA (quando o card aparece)
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    delay: index * 0.08,
    type: "spring",
    stiffness: 200,
    damping: 15,
  }}
  // ANIMAÇÃO DE HOVER (quando o mouse passa)
  whileHover={{ scale: 1.05, y: -15 }}
  whileTap={{ scale: 0.98 }}
>
  {/* CONTEÚDO DO CARD */}
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-[20px] font-semibold">{card.title}</h1>
      <p className="text-[12px] opacity-80">{card.subtitle}</p>
    </div>

    <div className="bg-black/30 px-2 py-1 rounded-full text-[12px]">
      ⭐ {card.rating}
    </div>
  </div>

  <div className="mt-6 flex justify-center">
    <img
      src={card.img}
      alt={card.title}
      className="max-w-[150px] drop-shadow-lg"
    />
  </div>
</motion.div>;
