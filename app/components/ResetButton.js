import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function ResetButton({ onReset }) {
  // Recibe onReset como prop
  return (
    <button
      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg"
      onClick={onReset} // Usa la función onReset pasada como prop
    >
      Reiniciar
    </button>
  );
}
