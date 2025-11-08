// import React from "react";
// import content from "../../content/content";
// import ServiceCard from "../../components/ServiceCard";

// const arrayObjetos = Object.values(content.features.cards);

// const arrayDados = [
//   { number: "One", type: "Array de Dados", model: "Sem Object.values" },
//   { number: "Two", type: "Array de Dados", model: "Sem Object.values" },
//   { number: "Three", type: "Array de Dados", model: "Sem Object.values" },
// ];

// const arrayBotoes = Object.entries(content.infos)
//   .filter(
//     ([__, valor]) => valor && valor !== "A_Definir" && valor.trim() !== ""
//   )
//   .map(([chave, valor]) => ({ chave, valor }));

// function LandingPageGamePc() {
//   return (
//     <div className="flex flex-col items-center pt-36">
//       <div className=" border-2 border-secondary p-8 rounded-md">
//         <h1 className="text-white">Fuction .map() em um array de objetos...</h1>
//         <div className="flex justify-center gap-6">
//           {arrayObjetos.map((card, index) => (
//             <div key={index} className="">
//               <ServiceCard
//                 number={card.number}
//                 title={card.title}
//                 description={card.subtitle}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="pt-32 ">
//         <div className=" border-2 border-secondary p-8 rounded-md flex flex-col items-center">
//           <h1 className="text-white">Fuction .map() em um array de dados...</h1>
//           <div className="flex justify-center gap-6">
//             {arrayDados.map((dados, indexDados) => (
//               <div key={indexDados}>
//                 <ServiceCard
//                   number={dados.number}
//                   title={dados.type}
//                   description={dados.model}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="bg-red-900">
//         {arrayBotoes.map((botao, indexBotoes) => (
//           <a
//             key={indexBotoes}
//             href={`https://www.${botao.chave}.com/${botao.valor}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-red-900 px-3 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
//           >
//             {botao.chave}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LandingPageGamePc;

import React from "react";
import { Search } from "lucide-react";
import AnimatedCards from "../../components/AnimatedCards";

function LandingPageGamePc() {
  return (
    <div className="max-w-[1215px] text-white flex flex-col justify-between border m-auto desktop1:mt-32 px-2 relative h-[950px] phone2:max-h-[930px] tablet1:max-h-[770px] desktop1:max-h-[700px] overflow-y-hidden">
      <div className="flex flex-col desktop1:justify-between desktop1:flex-row items-center">
        {" "}
        <div className="max-w-[405px] w-full flex justify-between items-center font-sans">
          <h1 className="text-[24px] m-auto desktop1:m-0">
            Dev<span className="text-secondary">Biell</span>
          </h1>
          {/* <div className=" flex border border-white/60 rounded-2xl items-center gap-2 px-4 py-2">
            <input
              type="text"
              placeholder="Search Games"
              className="bg-transparent outline-none text-white"
            />
            <span>
              {" "}
              <Search />
            </span>
          </div> */}
        </div>
        <div className="max-w-[405px] flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-gamepad2-icon lucide-gamepad-2"
          >
            <line x1="6" x2="10" y1="11" y2="11" />
            <line x1="8" x2="8" y1="9" y2="13" />
            <line x1="15" x2="15.01" y1="12" y2="12" />
            <line x1="18" x2="18.01" y1="10" y2="10" />
            <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
          </svg>
        </div>
        <div className="max-w-[405px] w-full flex items-center">
          <h1 className="text-[14px] text-center desktop1:text-start">
            Created by - JavaScript Developer{" "}
            <span className="underline text-secondary">Gabriel Souza</span>
          </h1>
        </div>
      </div>
      <div className="pt-16">
        <div className="flex flex-col items-center gap-4 text-center desktop1:text-start">
          <h6 className="text-[12px] text-white/40">
            Sejam bem-vindos a minha página - <span>Cards Animados</span>
          </h6>
          <h1 className="text-center text-[64px] leading-[72px] font-Poppins font-medium">
            Fun cards <br /> <span className="text-secondary">Frontend</span>{" "}
            Project
          </h1>
          <p className="max-w-[400px] text-center text-[12px] text-white/40">
            CLicando nos botões nas laterais, poderá ver os cartões animados...
          </p>
        </div>
      </div>

      <div className="pt-72 desktop1:pt-10 relative">
        <AnimatedCards />
      </div>
    </div>
  );
}

export default LandingPageGamePc;
