import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Graficos() {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 py-[36px]">
      {/* Total Pending Orders */}
      <div className="bg-white rounded-2xl shadow-md p-5 w-full h-64 justify-between flex flex-col">
        <div className="flex justify-evenly gap-4 ">
          <h2 className="text-gray-600 text-[10px] font-extrabold w-[60%] flex flex-col">
            Total Pending Orders
            <span className="font-extralight text-[8px]">Today</span>
          </h2>
          <p className="text-[14px] font-bold text-gray-800 mt-2">10</p>
        </div>
        <div className="flex justify-between items-end mt-6">
          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] text-gray-400">0</span>
            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
            <span className="text-[10px] text-gray-400">T</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] text-gray-400">0</span>
            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
            <span className="text-xs text-gray-400">W</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] text-gray-400">0</span>
            <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
            <span className="text-xs text-gray-400">T</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-[10px] text-gray-400">10</span>
            <div className="w-2 h-10 bg-purple-500 rounded-full"></div>
            <span className="text-xs text-gray-400">F</span>
          </div>
        </div>

        <div className="mt-6">
          <hr className=" border-black"></hr>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[9px] font-extrabold mt-1 text-black">
                Current Daily Order
              </p>
              <p className="text-[8px] font-extralight text-black">
                Volume Limitation
              </p>
            </div>
            <p className="text-[10px] font-bold text-black">10000</p>
          </div>
        </div>
      </div>

      {/* Your Rating */}
      <div className="bg-white rounded-2xl shadow-md p-4 h-64 w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h2 className="text-[11px] text-sm font-medium">Your Rating</h2>
          <p className="text-[16px] font-bold text-gray-800 mt-2">1.3</p>
        </div>

        <div className="w-20 mx-auto">
          <CircularProgressbar
            value={33}
            text="1.3"
            styles={buildStyles({
              textSize: "24px",
              textColor: "#000",
              pathColor: "#facc15",
              trailColor: "#eee",
            })}
          />
        </div>

        <div className=" text-[9px] text-gray-600">
          <p>
            <span className="text-gray-500">Canceling Seller Related:</span>{" "}
            <span className="font-medium text-[10px] text-gray-800">6%</span>
          </p>
          <p>
            <span className="text-red-500 text-[9px] font-semibold">
              Very Poor
            </span>
          </p>
          <hr className="py-0.5"></hr>
          <p className="mt-0.5 flex justify-between">
            <span className="text-gray-500">Handling Time With SLA:</span>{" "}
            <span className="font-medium text-gray-800">88%</span>
          </p>
          <p>
            <span className="text-red-500 font-semibold">Very Poor</span>
          </p>
        </div>
      </div>

      {/* Best Selling Product Sales Contribution */}
      <div className="bg-white rounded-2xl shadow-md p-4 w-full h-64">
        <div className="flex justify-between font-Roboto">
          {" "}
          <h2 className="text-gray-600 text-[11px] font-bold">
            Best Selling Product Sales Contribution
          </h2>
          <p className="text-[16px]">71%</p>
        </div>

        <div className="w-24 mx-auto mt-6">
          <CircularProgressbar
            value={71}
            text="71%"
            styles={buildStyles({
              textSize: "22px",
              textColor: "#000",
              pathColor: "#8b5cf6",
              trailColor: "#eee",
            })}
          />
        </div>

        <div className="mt-6 text-[10px] text-gray-600 space-y-1">
          <p className="flex justify-between items-center">
            <span className="text-gray-500 text-[9px] flex flex-col">
              Best Selling Products <span>Low Stock Level:</span>
            </span>{" "}
            <span className="font-medium text-gray-800">1</span>
          </p>
          <hr />
          <p className="flex justify-between">
            <span className="text-gray-500 text-[8px]">
              Total Out of Stock:
            </span>{" "}
            <span className="font-medium text-gray-800">1351</span>
          </p>
        </div>
      </div>

      {/* New Product Creation */}
      <div className="bg-white rounded-2xl shadow-md p-4 w-full h-64">
        <div className="flex justify-between">
          <div>
            {" "}
            <h2 className="text-gray-600 text-[10px] font-medium flex flex-col">
              New Product <span>Creation</span>
            </h2>
            <p className="text-[8px] text-gray-400">(Last 14 Days)</p>
          </div>
          <p className="text-[14px] font-bold text-gray-800 mt-2">1549</p>
        </div>
        <div className="w-20 mx-auto mt-4">
          <CircularProgressbar
            value={70}
            text=""
            styles={buildStyles({
              pathColor: "#facc15",
              trailColor: "#8b5cf6",
            })}
          />
        </div>

        <div className="flex justify-center gap-4 mt-3 text-[10px] text-gray-600 font-Roboto">
          <div className="flex items-center text-[8px]">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></span>{" "}
            missing image
          </div>
          <div className="flex items-center gap-1 text-[8px]">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span> poor
            quality
          </div>
        </div>

        <div className="mt-5 text-[10px] text-gray-600 space-y-1">
          <p className="flex justify-between">
            <span className="text-gray-500">Approved:</span>{" "}
            <span className="font-medium text-gray-800">3928</span>
          </p>
          <hr />
          <p className="flex justify-between">
            <span className="text-gray-500">Pending:</span>{" "}
            <span className="font-medium text-gray-800">227</span>
          </p>
        </div>
      </div>
    </div>
  );
}
