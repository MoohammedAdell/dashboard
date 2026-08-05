import React from "react";
import Card from "./Card";
import ChartTraffic from "./ChartTraffic";

export default function Trafic() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm transition-colors">
      <Card titleLeft="Traffic Source">
        <ChartTraffic />
      </Card>
    </div>
  );
}