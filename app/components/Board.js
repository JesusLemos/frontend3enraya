import Cell from "./Cell";

export default function Board() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {/* Renderización de todas las celdas del juego*/}
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </div>
  );
}
