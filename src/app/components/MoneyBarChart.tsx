"use client";
import MoneyToggle from "./MoneyToggle";
import DateRangeSelect from "./DateRange";
import CustomBarChart from "./BarChart";

const MoneyBarChart = () => {
  return (
    <div>
      <div className="flex justify-between">
        <MoneyToggle />
        <DateRangeSelect />
      </div>
      <CustomBarChart />
    </div>
  );
};

export default MoneyBarChart;
