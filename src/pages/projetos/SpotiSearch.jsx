import React from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SpotiSearch() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[600px] bg-[#121212] relative font-Avenir flex flex-col max-w-[428px] mx-auto translate-y-1/4 border-2  rounded-md">
      <div className="flex flex-row items-center mt-8 gap-14">
        <div className="text-white w-fit bg-black p-1 ml-4 rounded-full">
          <span>
            <a onClick={() => navigate("/name")}>
              <ChevronLeft />
            </a>
          </span>
        </div>
        <div className="flex justify-center">
          <h1 className="text-white font-extrabold">Created account</h1>
        </div>
      </div>

      <div className="mt-6 ml-4 ">
        <div className="bg-[#F5F5F5] w-[95%] h-[42px] rounded-[5px] max-w-[365px] flex justify-between items-center">
          <span>
            <Search className="text-black/40 w-10" />
          </span>
          <input
            type="text"
            className=" outline-none px-2 text-black bg-transparent h-full w-full"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/interfaceMusic")}
          className="bg-[#535353] font-extrabold p-3 w-[82px] rounded-[45px]"
        >
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SpotiSearch;
