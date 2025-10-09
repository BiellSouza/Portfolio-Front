import React from "react";
import { CalendarClock, BadgePercent, Clipboard, Tags } from "lucide-react";

function Promotions() {
  return (
    <div className="font-Roboto w-[90%] flex flex-col m-auto ">
      <div className="h-[46px] flex items-center ">
        <h1 className="text-[20px]">Promotions</h1>
      </div>
      <div className="card px-6 py-4 bg-white rounded-lg">
        <div>
          <div>
            <h6 className="font-medium text-[13px]">
              Lifestyle: 3.3 PAYDAY 2022 15% off min spend SGD 100 HOME10
            </h6>
          </div>
        </div>

        <div>
          <div></div>

          <div className="pt-[11px] pl-3">
            <p>
              <span>
                <CalendarClock width={19} height={19} color="#B5B5B5" />
              </span>
              28 Feb - 07 Mar 22
            </p>
            <p>
              <span>
                <BadgePercent width={19} height={19} color="#B5B5B5" />
              </span>
              Voucher discount: 10%
            </p>

            <p>
              <span>
                <Clipboard width={19} height={19} color="#B5B5B5" />
              </span>
              Registration until: 22 Feb 22
            </p>
            <p>
              <span>
                <Tags width={19} height={19} color="#B5B5B5" />
              </span>
              Seller funded portion: 100% out of the discount
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default Promotions;
