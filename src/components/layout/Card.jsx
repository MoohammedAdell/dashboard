import React from "react";

export default function Card({ titleLeft, titleRight, children }) {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-4">
        {titleLeft && (
          <h3 className="text-base font-semibold text-slate-800 dark:text-white">
            {titleLeft}
          </h3>
        )}
        
        {titleRight && (
          <button className="text-xs font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors cursor-pointer">
            {titleRight}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="w-full">{children}</div>
    </div>
  );
}