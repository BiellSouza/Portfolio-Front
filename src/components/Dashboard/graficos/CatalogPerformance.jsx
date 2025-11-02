import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const orderData = [
  { day: "01", thisWeek: 900, lastWeek: 700 },
  { day: "02", thisWeek: 600, lastWeek: 800 },
  { day: "03", thisWeek: 400, lastWeek: 600 },
  { day: "04", thisWeek: 600, lastWeek: 600 },
  { day: "05", thisWeek: 800, lastWeek: 800 },
  { day: "06", thisWeek: 800, lastWeek: 600 },
  { day: "07", thisWeek: 600, lastWeek: 600 },
  { day: "08", thisWeek: 890, lastWeek: 1000 },
  { day: "09", thisWeek: 600, lastWeek: 990 },
];

const salesData = [
  { day: "01", thisWeek: 1200, lastWeek: 3000 },
  { day: "02", thisWeek: 1000, lastWeek: 1500 },
  { day: "03", thisWeek: 500, lastWeek: 3500 },
  { day: "04", thisWeek: 2700, lastWeek: 2300 },
  { day: "05", thisWeek: 1900, lastWeek: 3700 },
  { day: "06", thisWeek: 2900, lastWeek: 2500 },
];

export default function CatalogPerformance() {
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <h2 className="text-xl font-bold mb-4 w-[90%] ">Catalog Performance</h2>

      {/* Order Volume */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 w-[90%] min-h-80 flex flex-col justify-between ">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-600">
              Order Volume
            </h3>
            <p className="text-md font-bold">
              5.51K{" "}
              <span className="text-green-500 text-[10px] font-semibold">
                ↑ 2.1%
              </span>{" "}
              <span className="text-gray-500 text-[10px] font-normal">
                vs Last Week
              </span>
            </p>
          </div>
          <button className="text-[10px] text-gray-500 hover:text-gray-700">
            View Report ▾
          </button>
        </div>

        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={orderData} barSize={6}>
            <XAxis dataKey="day" fontSize={8} />
            {/* <YAxis /> */}
            {/* <Tooltip /> */}
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) =>
                value === "thisWeek" ? "This week" : "Last week"
              }
            />
            <Bar
              width="2px"
              dataKey="thisWeek"
              fill="#4F46E5"
              radius={[4, 4, 0, 0]}
            />
            <Bar dataKey="lastWeek" fill="#FACC15" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sales Summary */}
      <div className="bg-white rounded-2xl shadow-sm p-4 w-[90%] flex flex-col justify-between ">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-[16px] font-semibold text-gray-600">
              Sales Summary
            </h3>
            <p className="text-[18px] font-bold">
              3K{" "}
              <span className="text-red-500 text-sm font-semibold">↓ 2.1%</span>{" "}
              <span className="text-gray-500 text-[10px] font-normal">
                vs Last Week
              </span>
            </p>
          </div>
          <button className="text-[10px] text-gray-500 hover:text-gray-700">
            View Report ▾
          </button>
        </div>

        <ResponsiveContainer width="100%" height={200} className="pt-4">
          <LineChart data={salesData}>
            <XAxis dataKey="day" fontSize={8} />
            <YAxis fontSize={8} />
            {/* <Tooltip /> */}
            {/* <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value) =>
                value === "thisWeek" ? "This week" : "Last week"
              }
            /> */}
            <Line
              type="monotone"
              dataKey="thisWeek"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastWeek"
              stroke="#FACC15"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
