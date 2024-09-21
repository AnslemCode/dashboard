import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface CustomBarProps {
  fill: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const CustomBar = (props: CustomBarProps) => {
  const { fill, x, y, width, height } = props;
  const borderRadius = { topLeft: 5, topRight: 5 };
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} />
      <rect
        x={x}
        y={y}
        width={width}
        height={6}
        fill="#5540EB"
        rx={borderRadius.topLeft}
        ry={borderRadius.topRight}
      />
    </g>
  );
};

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

const CustomBarChart = () => {
  const data = [
    { month: "Jan", value: 90000 },
    { month: "Feb", value: 400000 },
    { month: "Mar", value: 90000 },
    { month: "Apr", value: 40000 },
    { month: "May", value: 90000 },
    { month: "Jun", value: 300000 },
    { month: "Jul", value: 90000 },
    { month: "Aug", value: 500000 },
    { month: "Sep", value: 400000 },
    { month: "Oct", value: 200000 },
    { month: "Nov", value: 100000 },
    { month: "Dec", value: 90000 },
  ];

  return (
    <div className="flex justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 14, fill: "#343433" }}
          />

          <YAxis
            domain={[0, 500000]}
            ticks={[0, 100000, 300000, 500000]}
            tickFormatter={(value) => `N${value.toLocaleString()}`}
            axisLine={false}
            tickLine={false}
            padding={{ top: 50, bottom: 10 }}
            tick={{ fontSize: 11, fill: "#343433" }}
          />
          <Tooltip content={<CustomTooltip />} />

          <ReferenceLine y={0} stroke="gray" />
          <ReferenceLine y={100000} stroke="gray" />
          <ReferenceLine y={500000} stroke="gray" />

          <Bar
            dataKey="value"
            fill="#FAFAFF"
            radius={[5, 5, 0, 0]}
            shape={(props: any) => <CustomBar {...props} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
