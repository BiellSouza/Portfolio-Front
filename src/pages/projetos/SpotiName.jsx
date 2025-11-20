import React from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SpotiName() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[600px] bg-[#121212] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-1/4 border-2  rounded-md">
      <div className="flex flex-row items-center mt-8 gap-14">
        <div className="text-white w-fit bg-black p-1 ml-4 rounded-full">
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
          className="w-[95%] h-[51px] rounded-[5px] max-w-[365px] outline-none px-2 text-white bg-[#777777]"
        />
        <p className="text-white text-[10px] mt-2">
          You’ll need to confirm this email later.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/search")}
          className="bg-[#F5F5F5] font-extrabold p-3 w-[179px] h-[42px] flex justify-center items-center rounded-[45px]"
        >
          Create an account
        </button>
      </div>
    </div>
  );
}

export default SpotiName;
