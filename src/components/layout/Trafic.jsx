import React from "react";
import Card from "./Card";
import ChartTraffic from "./ChartTraffic";

export default function Trafic() {
  return (
    <div className="bg-gray-900 rounded-lg px-4 pt-6 h-full">
      <Card titleLeft="Traffic Source">
        <ChartTraffic />
      </Card>
    </div>
  );
}
