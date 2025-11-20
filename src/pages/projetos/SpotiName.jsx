import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThemeContext } from "../../contexts/ColorContext";
import { useContext } from "react";

function SpotiName() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  const MIN_Letters = 3;

  const verifyName = () => {
    if (name.length > MIN_Letters) {
      navigate("/interfaceMusic");
    }
    if (name.length === 0) {
      alert("O Campo esta vazio!");
    } 
    else if (name.length < MIN_Letters && name.length > 0) {
      alert("Não Use Apelidos!");
      setMessage("true");
    }
  };

  return (
    <div
      className={`min-h-[600px] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-1/4 border-2 rounded-md ${theme.background}`}
    >
      <div className="flex flex-row items-center mt-8 gap-[100px] w-full">
        <div className="text-white cursor-pointer w-fit bg-black p-1 ml-4 rounded-full">
          <span>
            <a onClick={() => navigate("/gender")}>
              <ChevronLeft />
            </a>
          </span>
        </div>
        <div className="flex justify-center">
          <h1 className="text-white font-extrabold">Created account</h1>
        </div>
      </div>

      <div className="mt-6 ml-4">
        <h1 className="text-white font-extrabold text-[20px]">
          What’s your Name?{" "}
        </h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite seu Nome"
          className="w-[95%] h-[51px] rounded-[5px] max-w-[365px] outline-none px-2 text-white bg-[#777777]"
        />
        {message && (
          <p className="text-white text-[14px] mt-2">Não utilize Apelidos.</p>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={verifyName}
          className="bg-[#F5F5F5] font-extrabold p-3 w-[179px] h-[42px] flex justify-center items-center rounded-[45px] cursor-pointer hover:transition-all ease-out hover:bg-[#1ED760] hover:scale-110 hover:duration-300"
        >
          Create an account
        </button>
      </div>
    </div>
  );
}

export default SpotiName;
