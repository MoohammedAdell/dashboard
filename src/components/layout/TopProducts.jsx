import React from "react";
import Card from "./Card";
import TopProductsComponent from "./TopProductsComponent";

export default function TopProducts() {
  return (
    <div className="bg-gray-900 rounded-lg px-6 pt-6 h-full">
      <Card titleLeft="Top Products" titleRight="View All">
        <TopProductsComponent />
      </Card>
    </div>
  );
}
