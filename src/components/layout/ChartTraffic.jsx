import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useTheme } from "@/context/ThemeContext";

const trafficSourceData = [
  { name: "Direct", value: 45, color: "#8b5cf6" },
  { name: "Search Engine", value: 30, color: "#2563eb" },
  { name: "Social Media", value: 15, color: "#10b981" },
  { name: "Referral", value: 10, color: "#d97706" },
];

export default function ChartTraffic() {
  const { isDark } = useTheme();

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
                backgroundColor: isDark ? "#0f172a" : "#ffffff",
                borderColor: isDark ? "#334155" : "#e2e8f0",
                color: isDark ? "#ffffff" : "#0f172a",
                borderRadius: "8px",
                fontSize: "12px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
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
              <span className="text-slate-600 dark:text-slate-300 truncate">
                {item.name}
              </span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white ml-2">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}