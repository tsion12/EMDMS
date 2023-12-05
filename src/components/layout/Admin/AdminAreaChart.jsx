import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdminAreaChart = () => {
  const data = [
    { category: "Jan", stack1: 0, stack2: 200 },
    { category: "Feb", stack1: 200, stack2: 300 },
    { category: "Mar", stack1: 100, stack2: 200 },
    { category: "Apr", stack1: 300, stack2: 100 },
    { category: "May", stack1: 500, stack2: -100 },
    { category: "June", stack1: 200, stack2: -100 },
    { category: "July", stack1: 420, stack2: 0 },
    { category: "Aug", stack1: 350, stack2: -200 },
    { category: "Sep ", stack1: 500, stack2: 200 },
    { category: "Oct", stack1: 250, stack2: -100 },
    { category: "Nov", stack1: 300, stack2: 100 },
    { category: "Dec ", stack1: 100, stack2: 5 },
  ];

  return (
    <AreaChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <XAxis
        dataKey="category"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#A2A3A5", fontSize: 12 }}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#A2A3A5", fontSize: 12 }}
      />
      <Tooltip />

      <Area
        type="monotone"
        dataKey="stack1"
        stackId="1"
        stroke="#005656DE"
        strokeWidth={4}
        fill="white"
      />
      <Area
        type="monotone"
        dataKey="stack2"
        stackId="1"
        stroke="#02BEBE33"
        strokeWidth={4}
        fill="white"
      />
    </AreaChart>
  );
};

export default AdminAreaChart;
