import React from 'react';
import StatCards from '../../components/layout/StatCards';
import { ChartAreaAxes } from '../../components/layout/ChartAreaAxes';
import { RecentTasks } from '../../components/layout/RecentTasks';

export default function Dashboard() {
  return (
    <div className="space-y-6 ">
      {/* Stat Cards */}
      <StatCards />

      {/* Main Grid Section (Chart + Tasks) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch lg:h-102.5">
        {/* Chart Column */}
        <div className="lg:col-span-3 w-full h-full">
          <ChartAreaAxes />
        </div>

        {/* Recent Tasks Column */}
        <div className="lg:col-span-2 w-full h-full">
          <RecentTasks />
        </div>
      </div>
    </div>
  );
}