import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const DateRangeSelect = () => {
  const [selectedRange, setSelectedRange] = useState("Last 30 days");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRange(e.target.value);
  };

  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border border-[#E2E3E5] px-2 text-[#343433] text-[16px]">
      <select
        value={selectedRange}
        onChange={handleSelectChange}
        className="appearance-none bg-transparent focus:outline-none text-[#343433] text-[16px] px-2"
      >
        <option value="Last 7 days">Last 7 days</option>
        <option value="Last 30 days">Last 30 days</option>
        <option value="Last 365 days">Last 365 days</option>
      </select>
      <IoMdArrowDropdown className="text-gray-400 text-2xl" />
    </div>
  );
};

export default DateRangeSelect;
