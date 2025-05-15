"use client";

import { useState } from "react";
import Image from "next/image";

export default function Cell({ value, onClick }) {
  return (
    <div
      className="w-24 h-24 border-2 border-gray-400 flex items-center justify-center text-4xl font-bold cursor-pointer md:w-28 md:h-28 md:text-5xl lg:w-32 lg:h-32 max-w-32 max-h-32 aspect-square"
      onClick={onClick}
    >
      {value === "X" && <Image src="/x.png" alt="X" width={64} height={64} />}
      {value === "O" && (
        <Image src="/circle.png" alt="O" width={64} height={64} />
      )}
    </div>
  );
}
