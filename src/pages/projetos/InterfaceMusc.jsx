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
import { ThemeContext } from "../../contexts/ColorContext";
import { useContext } from "react";

function InterfaceMusic() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  const songs = [
    { music: "Castle of Glass", banda: "Linkin Park" },
    { music: "The Emptiness Machine", banda: "Linkin Park" },
    { music: "stiff upper lip ", banda: "Acdc" },
    { music: "Up from the Bottom", banda: "Linkin Park" },
    { music: "Safe In New Your City", banda: "Acdc" },
  ];

  return (
    <div
      className={`min-h-[600px] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-20 border-2 rounded-md ${theme.background}`}
    >
      <div className="flex flex-col mt-4 gap-14">
        <div className="text-white/50 cursor-pointer w-fit bg-transparent p-1 ml-1 rounded-full">
          <span>
            <a onClick={() => navigate("/name")}>
              <ChevronLeft />
            </a>
          </span>
        </div>

        <div className="px-4 mt-44">
          <div className="text-white ">
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
          {songs.map((song, index) => (
            <div key={index} className="flex flex-col gap-1 text-white">
              {" "}
              <div className="flex gap-1">
                {" "}
                <span>
                  <Disc3
                    width={16}
                    className={`${
                      index === 0 ? "text-[#1DB954] animate-spin" : "text-white"
                    } `}
                  />
                </span>
                <div className="w-full">
                  <h1
                    className={`text-[15px] ${
                      index === 0 ? "text-[#1DB954]" : "text-white"
                    }`}
                  >
                    {song.music}
                  </h1>
                  <p className="text-white text-[12px]">{song.banda}</p>
                </div>
              </div>
              <hr className="opacity-10" />
            </div>
          ))}
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
