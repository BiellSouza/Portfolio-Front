import React from "react";
import Slider from "react-slick";
import { CalendarClock, BadgePercent, Clipboard, Tags } from "lucide-react";
import imgDash from "../../assets/Imagens/imgDashboard.png";
import CountdownTimer from "./CountdownTimer";

const promotions = [
  {
    id: 1,
    color: "bg-white",
    button: "bg-indigo-600",
    border: "border-indigo-600",
  },
  {
    id: 2,
    color: "bg-yellow-50",
    button: "bg-yellow-500",
    border: "border-yellow-500",
  },
  {
    id: 3,
    color: "bg-blue-50",
    button: "bg-blue-500",
    border: "border-blue-500",
  },
];

function PromotionsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="font-Roboto w-[90%] m-auto pb-4">
      <div className="h-[46px] flex items-center mb-2">
        <h1 className="text-[20px] font-medium">Promotions</h1>
      </div>
      <Slider {...settings}>
        {promotions.map((promo) => (
          <div key={promo.id} className="px-2">
            <div
              className={`${promo.color} rounded-lg shadow-sm px-6 py-4 transition-all duration-300`}
            >
              {/* Texto principal */}
              <h6 className="font-medium text-[13px]">
                Lifestyle: 3.3 PAYDAY 2022 15% off min spend SGD 100 HOME10
              </h6>

              {/* Imagem + informações */}
              <div className="flex items-center mt-5">
                <div className="relative w-[50%] overflow-hidden rounded-lg">
                  <img
                    src={imgDash}
                    alt="background"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="max-w-[90%] w-full flex justify-center">
                      <CountdownTimer />
                    </div>
                  </div>
                </div>

                <div className="pt-[11px] pl-3 w-[50%] flex flex-col gap-3">
                  <div className="flex flex-col">
                    <p className="flex gap-2 text-[9px] items-center py-1">
                      <CalendarClock width={19} height={19} color="#B5B5B5" />
                      28 Feb - 07 Mar 22
                    </p>
                    <p className="flex gap-2 text-[9px] items-center py-1">
                      <BadgePercent width={19} height={19} color="#B5B5B5" />
                      Voucher discount: 10%
                    </p>
                    <p className="flex gap-2 text-[9px] items-center py-1">
                      <Clipboard width={19} height={19} color="#B5B5B5" />
                      Registration until: 22 Feb 22
                    </p>
                    <p className="flex gap-2 text-[9px] items-center py-1">
                      <Tags width={19} height={19} color="#B5B5B5" />
                      Seller funded portion: 100% out of the discount
                    </p>
                  </div>
                  <div className="flex gap-5 justify-evenly">
                    <p className="text-[9px]">Sellers: 0</p>
                    <p className="text-[9px]">Products: 0</p>
                  </div>
                </div>
              </div>

              {/* Botão */}
              <button
                className={`${promo.button} text-white w-full rounded-md py-1 mt-6`}
              >
                Join the Promotion
              </button>

              {/* Rodapé de status */}
              <div className="mt-6 flex justify-between">
                <div
                  className={`text-[10px] text-green-500 flex gap-2 items-center`}
                >
                  <p>Approved deals</p>
                  <span
                    className={`border-[1px] px-1.5 py-0.5 ${promo.border} rounded-[4px]`}
                  >
                    1
                  </span>
                </div>
                <div
                  className={`text-[10px] text-orange-500 flex gap-2 items-center`}
                >
                  <p>Pending deals</p>
                  <span
                    className={`border-[1px] px-2 py-0.5 border-orange-500 rounded-[4px]`}
                  >
                    -
                  </span>
                </div>
                <div
                  className={`text-[10px] text-red-500 flex gap-2 items-center`}
                >
                  <p>Rejected deals</p>
                  <span
                    className={`border-[1px] px-2 py-0.5 border-red-500 rounded-[4px]`}
                  >
                    -
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>
        {`
    .slick-dots li {
      margin: 0 -2px; /* diminui o espaçamento lateral entre as bolinhas */
    }
    .slick-dots {
      bottom: -30px; /* (opcional) aproxima do card */
    }
  `}
      </style>
    </div>
  );
}

export default PromotionsCarousel;
