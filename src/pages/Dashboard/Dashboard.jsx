import React from "react";
import StatCards from "../../components/layout/StatCards";
import { ChartAreaAxes } from "../../components/layout/ChartAreaAxes";
import { RecentTasks } from "../../components/layout/RecentTasks";
import TopProducts from "../../components/layout/TopProducts";
import Trafic from "../../components/layout/Trafic";
import Calender from "../../components/layout/Calender";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* 1. Stat Cards */}
      <StatCards />

      {/* 2. Main Grid Section (Chart + Tasks) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        {/* Chart Column */}
        <div className="lg:col-span-3 w-full">
          <ChartAreaAxes />
        </div>

        {/* Recent Tasks Column */}
        <div className="lg:col-span-2 w-full">
          <RecentTasks />
        </div>
      </div>

      {/* 3. Bottom Grid Section (Products + Traffic + Calendar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-1">
          <TopProducts />
        </div>

        <div className="lg:col-span-1">
          <Trafic />
        </div>

        <div className="lg:col-span-1">
          <Calender />
        </div>
      </div>
    </div>
  );
}
