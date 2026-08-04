import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Statistics } from "../common/Statistics/Statistics";
import { useTheme } from "../../context/ThemeContext"; // قم بتعديل المسار حسب مكان الـ Hook لديك

export default function StatCards() {
  const { isDark } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Statistics.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.id}
            className={`border rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 select-none ${
              isDark
                ? "bg-slate-900 border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-slate-700"
                : "bg-white border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.08)]"
            }`}
          >
            {/* Header: Icon & Values */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-11 h-11 rounded-xl ${stat.color} flex items-center justify-center text-white shrink-0 shadow-md`}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      isDark ? "text-slate-400" : "text-[#64748B]"
                    }`}
                  >
                    {stat.title}
                  </span>
                  <h3
                    className={`text-2xl font-bold mt-0.5 tracking-tight ${
                      isDark ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {stat.value}
                  </h3>
                </div>
              </div>
            </div>

            {/* Bottom Row: Change percentage & Sparkline Chart */}
            <div className="flex items-end justify-between">
              <div className="flex items-center gap-1.5 text-xs pb-0.5">
                <span
                  className={`font-semibold flex items-center px-2 py-0.5 rounded-full text-xs ${
                    stat.isPositive
                      ? isDark
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-[#10B981] bg-emerald-50"
                      : isDark
                      ? "text-rose-400 bg-rose-500/10"
                      : "text-[#EF4444] bg-rose-50"
                  }`}
                >
                  {stat.isPositive ? (
                    <ArrowUpRight size={14} className="mr-0.5" />
                  ) : (
                    <ArrowDownRight size={14} className="mr-0.5" />
                  )}
                  {stat.change}
                </span>
                <span
                  className={`font-medium ${
                    isDark ? "text-slate-500" : "text-[#64748B]"
                  }`}
                >
                  {stat.timeframe}
                </span>
              </div>

              {/* Sparkline Chart */}
              <div className="w-24 h-12">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stat.sparkData}>
                    <defs>
                      <linearGradient
                        id={stat.gradientId}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor={stat.strokeColor}
                          stopOpacity={isDark ? 0.4 : 0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor={stat.strokeColor}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke={stat.strokeColor}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill={`url(#${stat.gradientId})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}