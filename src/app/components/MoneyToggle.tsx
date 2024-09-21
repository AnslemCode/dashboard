import { useState } from "react";

const MoneyToggle = () => {
  const [selected, setSelected] = useState<"moneyIn" | "moneyOut">("moneyIn");

  return (
    <div className="flex space-x-2 bg-[#FAFAFA] text-[#343433] px-2 py-1 rounded-xl">
      <button
        onClick={() => setSelected("moneyIn")}
        className={`font-medium text-[15px] px-4 py-2 rounded-xl ${
          selected === "moneyIn"
            ? "bg-white text-[#343433]"
            : "bg-[#FAFAFA] text-[#B4B4B4]"
        }`}
      >
        Money In
      </button>
      <button
        onClick={() => setSelected("moneyOut")}
        className={`font-medium text-[15px] px-4 py-2 rounded-xl ${
          selected === "moneyOut"
            ? "bg-white text-[#343433]"
            : "bg-[#FAFAFA] text-[#B4B4B4]"
        }`}
      >
        Money Out
      </button>
    </div>
  );
};

export default MoneyToggle;
