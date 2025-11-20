import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ColorContext";
import { useContext } from "react";

function SpotiLogin() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  const verifyEmail = () => {
    if (email.includes("@gmail.com")) {
      navigate("/password");
    } else {
      alert("Este e-mail não é válido");
      setMessage("true");
    }
  };

  return (
    <div
      id="login"
      className={`min-h-[600px] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-1/4 border-2 rounded-md ${theme.background}`}
    >
      <div className="flex flex-row items-center mt-8 gap-[100px] w-full">
        <div className="text-white cursor-pointer w-fit bg-black p-1 ml-4 rounded-full">
          <span>
            <a onClick={() => navigate("/project1")}>
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
          What’s your email?
        </h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[95%] h-[51px] rounded-[5px] max-w-[365px] outline-none px-2 text-white bg-[#777777]"
        />
        {message && (
          <p className="text-white text-[14px] mt-2">Digite um e-mail válido</p>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={verifyEmail}
          className="bg-[#535353] border font-extrabold p-3 w-[82px] rounded-[45px] cursor-pointer hover:transition-all ease-out hover:bg-[#1ED760] hover:scale-110 hover:duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SpotiLogin;
