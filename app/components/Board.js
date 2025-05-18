export default function Board({ board, onCellClick, disabled }) {
  return (
    <div className="grid grid-cols-3 gap-2 w-full max-w-[400px] aspect-square bg-amber-400 rounded-md shadow-md">
      {board.map((cell, index) => (
        <button
          key={index}
          className={`
            flex items-center justify-center text-3xl font-bold
            border-2 border-amber-800 cursor-pointer
            ${
              cell === "X"
                ? "text-red-500"
                : cell === "O"
                ? "text-blue-500"
                : "text-gray-800"
            }
            ${index < 3 ? "border-t-0" : ""}
            ${index % 3 === 0 ? "border-l-0" : ""}
            ${index % 3 === 2 ? "border-r-0" : ""}
            ${index > 5 ? "border-b-0" : ""}
            ${
              disabled
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-amber-300/50"
            }
          `}
          onClick={() => !disabled && onCellClick(index)}
          disabled={disabled}
        >
          {cell}
        </button>
      ))}
    </div>
  );
}
