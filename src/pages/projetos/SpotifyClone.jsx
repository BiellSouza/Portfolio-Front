import React, { useContext } from "react";
import Logo from "../../assets/project1/Logo.png";
import img1 from "../../assets/project1/GoogleImg.png";
import img2 from "../../assets/project1/FacebookImg.png";
import img3 from "../../assets/project1/AppleImg.png";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ColorContext";

function SpotifyHome() {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  return (
    <div
      id="home"
      className={`min-h-[600px] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-1/4 border-2 rounded-md ${theme.background}`}
    >
      <div className="absolute bottom-[54px] w-full">
        <div className="flex flex-col items-center gap-[10px] ">
          <img src={Logo} alt="logo" className="w-12" />
          <h1 className="text-white font-extrabold text-[28px] max-w-[248px] text-center leading-[38px]">
            Millions of Songs. Free on Spotify.
          </h1>
        </div>
        <div className="flex flex-col items-center gap-3 mt-[22px]">
          <button
            onClick={() => navigate("/login#login")}
            className="text-black font-bold py-3 text-[16px] bg-[#1ED760] rounded-[45px] w-[90%] max-w-[337px] cursor-pointer hover:scale-105 hover:duration-300 ease-out transition-all"
          >
            Sign up free
          </button>

          <button
            onClick={() => navigate("/login#login")}
            className="text-white font-bold py-3 px-4 text-[16px] bg-[#121212] border border-white/70 rounded-[45px] w-[90%] max-w-[337px] flex gap-[10%] items-center cursor-pointer hover:scale-105 hover:duration-300 ease-out transition-all"
          >
            <span>
              <img src={img1} alt="img marcas" className="w-4" />
            </span>
            Continue with Google
          </button>

          <button
            onClick={() => navigate("/login#login")}
            className="text-white font-bold py-3 px-4 text-[16px] bg-[#121212] border border-white/70 rounded-[45px] w-[90%] max-w-[337px] flex gap-[10%] items-center cursor-pointer hover:scale-105 hover:duration-300 ease-out transition-all"
          >
            <span>
              <img src={img2} alt="img marcas" className="w-4" />
            </span>
            Continue with Facebook
          </button>

          <button
            onClick={() => navigate("/login#login")}
            className="text-white font-bold py-3 px-4 text-[16px] bg-[#121212] border border-white/70 rounded-[45px] w-[90%] max-w-[337px] flex gap-[10%] items-center cursor-pointer hover:scale-105 hover:duration-300 ease-out transition-all"
          >
            <span>
              <img src={img3} alt="img marcas" className="w-4" />
            </span>
            Continue with Apple
          </button>

          <a
            onClick={() => navigate("/login#login")}
            className="text-white font-extrabold mt-4 flex justify-center cursor-pointer hover:text-[#1ED760] hover:duration-300 transition-colors hover:underline"
          >
            Log in
          </a>
        </div>
      </div>
      <p className="text-white absolute translate-x-[100px] bottom-2 text-[12px] flex flex-col text-center">
        Projeto Desenvolvido pelo: <br />{" "}
        <span className="text-[#1ED760]">
          Desenvolvedor JavaScript{" "}
          <span className="underline">Gabriel Souza</span>
        </span>
      </p>
    </div>
  );
}

export default SpotifyHome;
