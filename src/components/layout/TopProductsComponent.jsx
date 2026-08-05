import { ArrowDownRight, ArrowUpRight, Atom, Box, Monitor, Smartphone } from "lucide-react";
import React from "react";

 const topProducts = [
  {
    id: 1,
    name: "UI/UX Design Kit",
    price: "$2,543",
    percentage: 80, // للبروجريس بار
    change: "+12.5%",
    isPositive: true,
    icon: Box,
    iconBg: "bg-purple-600/20 text-purple-400 border-purple-500/20",
    barColor: "bg-purple-500",
  },
  {
    id: 2,
    name: "React Components",
    price: "$1,892",
    percentage: 60,
    change: "+8.7%",
    isPositive: true,
    icon: Atom,
    iconBg: "bg-blue-600/20 text-blue-400 border-blue-500/20",
    barColor: "bg-blue-500",
  },
  {
    id: 3,
    name: "Dashboard Template",
    price: "$1,234",
    percentage: 45,
    change: "-3.2%",
    isPositive: false,
    icon: Monitor,
    iconBg: "bg-emerald-600/20 text-emerald-400 border-emerald-500/20",
    barColor: "bg-emerald-500",
  },
  {
    id: 4,
    name: "Mobile App Kit",
    price: "$987",
    percentage: 30,
    change: "+6.1%",
    isPositive: true,
    icon: Smartphone,
    iconBg: "bg-amber-600/20 text-amber-400 border-amber-500/20",
    barColor: "bg-amber-500",
  },
];


export default function TopProductsComponent() {
  return (
    <div className="flex flex-col gap-4">
      {topProducts.map((product) => {
        const Icon = product.icon;
        return (
          <div
            key={product.id}
            className="flex items-center justify-between gap-3"
          >
            {/* Icon & Name */}
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${product.iconBg}`}
              >
                <Icon size={18} />
              </div>
              <span className="text-xs font-medium text-slate-200 truncate">
                {product.name}
              </span>
            </div>

            {/* Progress, Price & Badge */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Custom Progress Bar */}
              <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                <div
                  className={`h-full rounded-full ${product.barColor}`}
                  style={{ width: `${product.percentage}%` }}
                />
              </div>

              <span className="text-xs font-semibold text-white w-12 text-right">
                {product.price}
              </span>

              {/* Percentage Change Badge */}
              <span
                className={`text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-0.5 ${
                  product.isPositive
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                }`}
              >
                {product.isPositive ? (
                  <ArrowUpRight size={12} />
                ) : (
                  <ArrowDownRight size={12} />
                )}
                {product.change}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
