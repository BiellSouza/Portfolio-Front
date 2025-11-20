import React from "react";
import Logo from "../../assets/project1/Logo.png";
import img1 from "../../assets/project1/GoogleImg.png";
import img2 from "../../assets/project1/FacebookImg.png";
import img3 from "../../assets/project1/AppleImg.png";

function SpotifyClone() {
  return (
    <div className="bg-[#121212] min-h-screen relative font-Avenir flex flex-col">
      <div className="absolute bottom-[54px] w-full">
        <div className="flex flex-col items-center gap-[10px] ">
          <img src={Logo} alt="logo" className="w-12" />
          <h1 className="text-white font-extrabold text-[28px] max-w-[248px] text-center leading-[38px]">
            Millions of Songs. Free on Spotify.
          </h1>
        </div>
        <div className="flex flex-col items-center gap-3 mt-[22px]">
          <button className="text-black font-bold py-3 text-[16px] bg-[#1ED760] rounded-[45px] w-[90%] max-w-[337px]">
            Sign up free
          </button>

          <button className="text-white font-bold py-3 px-4 text-[16px] bg-[#121212] border border-white/70 rounded-[45px] w-[90%] max-w-[337px] flex gap-[10%] items-center ">
            <span>
              <img src={img1} alt="img marcas" className="w-4" />
            </span>
            Continue with Google
          </button>

          <button className="text-white font-bold py-3 px-4 text-[16px] bg-[#121212] border border-white/70 rounded-[45px] w-[90%] max-w-[337px] flex gap-[10%] items-center ">
            <span>
              <img src={img2} alt="img marcas" className="w-4" />
            </span>
            Continue with Facebook
          </button>

          <button className="text-white font-bold py-3 px-4 text-[16px] bg-[#121212] border border-white/70 rounded-[45px] w-[90%] max-w-[337px] flex gap-[10%] items-center ">
            <span>
              <img src={img3} alt="img marcas" className="w-4" />
            </span>
            Continue with Apple
          </button>

          <a href="" className="text-white font-extrabold flex justify-center">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpotifyClone;
