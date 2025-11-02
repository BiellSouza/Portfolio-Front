import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-20T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Item = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-[#E4E3FA]/80 backdrop-blur-sm text-black font-bold text-lg px-2 py-1 rounded-2xl shadow-sm">
        <span> {String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-[10px] sm:text-sm mt-1">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 text-center bg-transparent">
      <Item value={timeLeft.days} label="Days" />
      <span className="text-[12px] font-bold mb-4">:</span>
      <Item value={timeLeft.hours} label="Hours" />
      <span className="text-[12px] font-bold mb-4">:</span>
      <Item value={timeLeft.minutes} label="Mins" />
    </div>
  );
}
