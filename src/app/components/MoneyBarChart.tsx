"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ChartData {
  month: string;
  value: number;
}

const data: ChartData[] = [
  { month: "Jan", value: 90000 },
  { month: "Feb", value: 400000 },
  { month: "Mar", value: 90000 },
  { month: "Apr", value: 40000 },
  { month: "May", value: 90000 },
  { month: "Jun", value: 300000 },
  { month: "Jul", value: 90000 },
  { month: "Aug", value: 500000 },
  { month: "Sep", value: 400000 },
  { month: "Oct", value: 20000 },
  { month: "Nov", value: 10000 },
  { month: "Dec", value: 90000 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded-md">
        <p>{`${label} 2023`}</p>
        <p>{`N${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const MoneyBarChart: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-2 bg-[#FAFAFA] text-[#343433] px-4 rounded-xl">
          <button className="bg-white font-medium text-[15px] px-4 rounded-xl">
            Money In
          </button>
          <button className="font-medium text-[15px] py-2 px-4 text-[#B4B4B4]">
            Money Out
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-lg border border-[#E2E3E5] px-2 text-[#343433] text-[16px]">
          Last 30 days
          <IoMdArrowDropdown className="text-gray-400 text-2xl" />
        </div>
      </div>
      <div className="p-[20px]">
        <ResponsiveContainer width="100%" height={400} minWidth={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis
              domain={[0, 500000]}
              ticks={[0, 100000, 200000, 300000, 400000, 500000]}
              tickFormatter={(value) => `N${value.toLocaleString()}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" fill="#FAFAFF" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MoneyBarChart;
