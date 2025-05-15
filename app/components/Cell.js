"use client";

import { useState } from "react";

export default function Cell() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    console.log("Click Celda");
  };

  return (
    <div
      className="w-24 h-24 border-2 border-gray-400 flex items-center justify-center text-4xl font-bold cursor-pointer"
      onClick={handleClick}
    >
      {value}
    </div>
  );
}
