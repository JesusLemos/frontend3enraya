import Cell from "./Cell";

export default function Board({ board, onCellClick }) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8 md:grid-cols-3 md:gap-8 lg:gap-10">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
}
