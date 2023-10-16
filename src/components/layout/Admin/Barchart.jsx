import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 - 08",
    uv: 150,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "09 - 18",
    uv: 150,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "18 - 36",
    uv: 150,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "36 - 45",
    uv: 300,
    pv: 3908,
    amt: 2000,
  },
];

const Barchart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={""} height={80} data={data}>
        <style>{`
          .recharts-cartesian-axis-line {
            display: none;
          }

          .recharts-cartesian-axis-tick line {
            display: none;
          }

          .recharts-cartesian-axis-tick text {
            fill: #A2A3A5; /* Change the color of X-axis labels */
          }

          .recharts-y-axis .recharts-cartesian-axis-tick text {
            fill: #A2A3A5; /* Change the color of Y-axis labels */
          }
        `}</style>
        <XAxis
          fontSize={10}
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ dy: 10 }}
        />
        <YAxis
          fontSize={10}
          domain={[100, 400]}
          tickLine={false}
          axisLine={false}
          tick={{ dx: -10 }}
        />
        <Tooltip />
        <Bar dataKey="uv" fill="#32A583BF" radius={[10, 10, 10, 10]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
