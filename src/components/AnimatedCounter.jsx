import React from "react";
import CountUp from "react-countup";

function AnimatedCounter({ end, label }) {
  return (
    <div className="gap-2 flex items-center">
      <span className="text-[54px] font-bold text-white">
        <CountUp start={0} end={end} duration={5} />
      </span>
      <span className="text-[20px] text-secondary w-[100px] leading-6">
        {label}
      </span>
    </div>
  );
}

export default AnimatedCounter;
