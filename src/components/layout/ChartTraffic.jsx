import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const trafficSourceData = [
  { name: "Direct", value: 45, color: "#8b5cf6" },
  { name: "Search Engine", value: 30, color: "#2563eb" },
  { name: "Social Media", value: 15, color: "#10b981" },
  { name: "Referral", value: 10, color: "#d97706" },
];
export default function ChartTraffic() {
  return (
    <div className="flex items-center justify-between gap-2 h-45">
      {/* Donut Chart */}
      <div className="w-1/2 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficSourceData}
              cx="50%"
              cy="50%"
              innerRadius={42}
              outerRadius={65}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {trafficSourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                borderColor: "#334155",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend Items */}
      <div className="w-1/2 flex flex-col gap-2.5">
        {trafficSourceData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2 truncate">
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-slate-300 truncate">{item.name}</span>
            </div>
            <span className="font-semibold text-white ml-2">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
