import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ResetButton({ onReset }) {
  // Recibe onReset como prop
  return (
    <button
      className="bg-amber-500 hover:bg-amber-600 text-gray-800 font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg transition-colors duration-200"
      onClick={onReset}
    >
      Reiniciar
    </button>
  );
}
