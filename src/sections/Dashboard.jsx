import { Menu, Search, Bell } from "lucide-react";
import Promotions from "../components/Dashboard/Promotions";
import Graficos from "../components/Dashboard/Graficos";
import Catalogo from "../components/Dashboard/Catalogo";
import Email from "../components/Dashboard/Email";

function Dashboard() {
  return (
    <div className="bg-dahsboard h-[100vh">
      {/* Sidebar do Dashboard */}
      <div className="bg-sidebarDash h-[62px] flex justify-center items-center">
        <div className="flex w-[90%] justify-between items-center ">
          <div className="flex gap-5">
            {" "}
            <Menu color="white" />
            <Search color="white" />
          </div>

          <div className="flex gap-4 items-center">
            <Bell color="white" />
            <div className="text-white font-Roboto flex flex-col text-end">
              <h6 className="text-[12px]">Puma Official Store</h6>
              <p className="text-[10px]">Change Seller</p>
            </div>
            <img
              src="https://static.mercadobitcoin.com.br/web/img/icons/assets/ico-asset-dog-color.svg"
              alt=""
              className="w-9 rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="pt-[23px]">
        {/* Card Promotions do Dashboard */}
        <Promotions />
        <Graficos />
        <Catalogo />
        <Email />
      </div>
    </div>
  );
}

export default Dashboard;
