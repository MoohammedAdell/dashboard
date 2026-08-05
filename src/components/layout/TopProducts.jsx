import React from "react";
import Card from "./Card";
import TopProductsComponent from "./TopProductsComponent";
import { useTheme } from "@/context/ThemeContext";

export default function TopProducts() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg px-6 pt-6 h-full">
      <Card titleLeft="Top Products" titleRight="View All">
        <TopProductsComponent />
      </Card>
    </div>
  );
}
