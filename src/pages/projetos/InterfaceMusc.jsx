import React from "react";
import {
  ChevronLeft,
  ArrowDown,
  Play,
  Disc3,
  Cog,
  House,
  Search,
  Pause,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function InterfaceMusic() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[600px] bg-gradient-to-t to-red-600 from-[#121212] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-20 border-2 rounded-md">
      <div className="flex flex-col mt-4 gap-14">
        <div className="text-white/50 w-fit bg-transparent p-1 ml-1 rounded-full">
          <span>
            <a onClick={() => navigate("/search")}>
              <ChevronLeft />
            </a>
          </span>
        </div>
        <div className="px-4 mt-44">
          <div className="text-white">
            {" "}
            <h1 className="text-[25px]">Nome Musica</h1>
            <p className="text-[14px]">Nome de quem colocou</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="bg-[#1DB954] w-fit rounded-full">
              <ArrowDown />
            </div>
            <div className="bg-[#1DB954] w-fit rounded-full p-2">
              <Play width={32} height={32} className="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <hr className="opacity-10" />
          <div className="flex gap-1 text-[#1DB954]">
            {" "}
            <span>
              <Disc3 width={16} className="animate-spin" />
            </span>
            <h1 className="text-[15px] ">From Me to You - Mono / Remastered</h1>
          </div>
          <hr className="opacity-10" />
          <div className="flex gap-1">
            {" "}
            <span>
              <Disc3 width={16} className="animate-spin" />
            </span>
            <h1 className="text-[15px]">Nome da musica que esta ouvindo</h1>
          </div>
          <hr className="opacity-10" />
          <div className="flex gap-1">
            {" "}
            <span>
              <Disc3 width={16} className="animate-spin" />
            </span>
            <h1 className="text-[15px]">Nome da musica que esta ouvindo</h1>
          </div>
          <hr className="opacity-10" />
          <div className="flex gap-1">
            {" "}
            <span>
              <Disc3 width={16} className="animate-spin" />
            </span>
            <h1 className="text-[15px]">Nome da musica que esta ouvindo</h1>
          </div>
          <hr className="opacity-10" />
          <div className="flex gap-1">
            {" "}
            <span>
              <Disc3 width={16} className="animate-spin" />
            </span>
            <h1 className="text-[15px]">Nome da musica que esta ouvindo</h1>
          </div>
          <hr className="opacity-10" />
        </div>
        <div className="flex justify-evenly bg-black text-white py-2 gap-8">
          <button
            onClick={() => navigate("/project1")}
            className="flex flex-col items-center text-[10px]"
          >
            <span>
              <House />
            </span>
            Home
          </button>
          <button
            onClick={() => navigate("/search")}
            className="flex flex-col items-center text-[10px]"
          >
            <span>
              <Search />
            </span>
            Search
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex flex-col items-center text-[10px]"
          >
            <span>
              <Cog />
            </span>
            Config
          </button>
        </div>

        <div className="absolute bottom-[60px] bg-[#550A1C] w-[95%] h-[39px] left-2 rounded-md">
          <div className="flex items-center pt-2 justify-evenly text-white">
            {" "}
            <h1 className="text-[14px] flex justify-center ">
              From Me to You - Mono / Remastered
            </h1>
            <span>
              <Pause width={16} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterfaceMusic;
