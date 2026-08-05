import React from "react";

export default function Card({ titleLeft, titleRight, children }) {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <h3 className="text-lg font-semibold mb-4">{titleLeft}</h3>
        <h3 className="text-lg font-semibold mb-4 text-purple-800">
          {titleRight}
        </h3>
      </div>
      <div>{children}</div>
    </>
  );
}
