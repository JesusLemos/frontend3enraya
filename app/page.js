"use client";

import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import RankingModal from "./components/RankingModal";
import ResetButton from "./components/ResetButton";
import { useState, useCallback } from "react";

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
  }, []);

  const handleCellClick = useCallback(
    async (index) => {
      if (board[index] === null) {
        const newBoard = [...board];
        newBoard[index] = "X";
        setBoard(newBoard);

        // Llamar al backend para obtener el movimiento de la IA
        const response = await fetch("/api/next-move", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ board: newBoard }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.nextMove !== null) {
            const iaBoard = [...newBoard];
            iaBoard[data.nextMove] = "O";
            setBoard(iaBoard);
          } else {
            console.log("La IA no devolvió un movimiento.");
          }
        } else {
          console.error("Error al obtener el movimiento de la IA");
        }
      }
    },
    [board, setBoard]
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 md:text-5xl">3 en Raya</h1>
      <GameStatus />
      <Board board={board} onCellClick={handleCellClick} />
      <div className="flex justify-between w-full mt-4">
        <ResetButton onReset={resetBoard} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg"
          onClick={openModal}
        >
          Ver Ranking
        </button>
      </div>

      <RankingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        playerWins={0}
        iaWins={0}
      />
    </main>
  );
}
