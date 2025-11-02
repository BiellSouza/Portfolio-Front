import { useState } from "react";
import { Search, MoreVertical, Mail } from "lucide-react";

const EmailData = [
  {
    date: "Feb 11",
    title: "Zalora- Seller Communication Prioritization.",
    text: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...",
  },
  {
    date: "Feb 11",
    title: "[IMPORTANT] Update to API endpoint limit.",
    text: "Dear Seller, Following up from our previous announcement, please note a slight change ...",
  },
  {
    date: "Feb 07",
    title: "Covid-19 Impact on Your Operations.",
    text: "Dear Seller, please immediately inform your Account. Manage or SHD if your operations are impacted by ...",
  },
  {
    date: "Jan 26",
    title: "[IMPORTANT] API endpoint limit. please forward.",
    text: "Dear Seller, As part of our continuous efforts to improve system response time and reliability ...",
  },
];

export default function Email() {
  const [search, setSearch] = useState("");

  const filteredData = EmailData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm w-full max-w-sm p-4">
        <h2 className="text-lg font-semibold mb-3">Email</h2>

        {/* Header com Tabs + Search */}
        <div className="flex items-center justify-between mb-3">
          <div className="bg-gray-100 rounded-lg flex items-center px-3 py-2 w-full">
            <span className="font-medium text-gray-800 text-sm mr-2">
              This Week
            </span>
            <div className="flex items-center bg-white rounded-md px-2 py-1 flex-1 border border-gray-200">
              <Search size={16} className="text-gray-400 mr-1" />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-sm w-full outline-none"
              />
            </div>
          </div>
          <button className="ml-2 p-2 rounded-md hover:bg-gray-100">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Lista de anúncios */}
        <div className="divide-y divide-gray-200">
          {filteredData.map((item, index) => (
            <div key={index} className="flex py-3 items-center">
              <div className="w-14 text-[10px] text-gray-400 font-medium">
                {item.date}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.text}</p>
              </div>
              <Mail size={20} className="text-red-500 ml-2 mt-1" />
            </div>
          ))}
        </div>

        {/* Paginação */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">
          <span>Showing 1 to 4 of 17</span>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
              ‹
            </button>
            <button className="w-6 h-6 rounded bg-gray-800 text-white flex items-center justify-center">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
