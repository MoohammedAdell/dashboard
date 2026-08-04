"use client";
import React from "react";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { useTheme } from "../../context/ThemeContext"; // تأكد من ضبط المسار الصحيح

export const description = "An area chart with axes";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563EB", // Primary Blue
  },
  mobile: {
    label: "Mobile",
    color: "#38BDF8", // Cyan / Secondary Light
  },
};

export function ChartAreaAxes() {
  const { isDark } = useTheme();

  return (
    <Card
      className={`border rounded-2xl h-full flex flex-col justify-between transition-all duration-200 ${
        isDark
          ? "bg-slate-900 border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.2)] text-white"
          : "bg-white border-[#E2E8F0] shadow-[0_10px_30px_rgba(15,23,42,0.04)] text-[#0F172A]"
      }`}
    >
      <CardHeader>
        <CardTitle
          className={`text-lg font-bold tracking-tight ${isDark ? "text-white" : "text-[#0F172A]"}`}
        >
          Area Chart - Axes
        </CardTitle>
        <CardDescription
          className={isDark ? "text-slate-400" : "text-[#64748B]"}
        >
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>

      {/* إضافة flex-1 و min-h-0 لجعل المخطط يتمدد تلقائياً */}
      <CardContent className="flex-1 min-h-0 flex flex-col justify-center">
        <ChartContainer config={chartConfig} className="w-full h-55 sm:h-60">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke={isDark ? "#334155" : "#F1F5F9"}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              stroke={isDark ? "#94A3B8" : "#64748B"}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
              stroke={isDark ? "#94A3B8" : "#64748B"}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <defs>
              <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="mobileGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#mobileGradient)"
              stroke="#38BDF8"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#desktopGradient)"
              stroke="#2563EB"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>

      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-1.5">
            <div
              className={`flex items-center gap-2 leading-none font-semibold ${isDark ? "text-emerald-400" : "text-[#10B981]"}`}
            >
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div
              className={`text-xs ${isDark ? "text-slate-500" : "text-[#64748B]"}`}
            >
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
