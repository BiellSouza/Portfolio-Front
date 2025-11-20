import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ColorContext";
import { useContext } from "react";

function SpotiPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  const MIN_CARACTERES = 8;
  const MAX_CARACTERES = 10;

  const verifyPassword = () => {
    if (
      password.length === MIN_CARACTERES ||
      password.length > MAX_CARACTERES
    ) {
      navigate("/gender");
      return;
    }

    if (password.length === 0 || password.length > 10 || password.length < 8) {
      alert("A Senha precisa ter no mínimo 8 caracteres");
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
            <a onClick={() => navigate("/login")}>
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
          Create a password{" "}
        </h1>
        <input
          type="text"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-[95%] h-[51px] rounded-[5px] max-w-[365px] outline-none px-2 text-white bg-[#777777]"
        />
        {message && (
          <p className="text-white text-[14px] mt-2">Esta Senha não é válida</p>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={verifyPassword}
          className="bg-[#535353] border font-extrabold p-3 w-[82px] rounded-[45px] cursor-pointer hover:transition-all ease-out hover:bg-[#1ED760] hover:scale-110 hover:duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SpotiPassword;
