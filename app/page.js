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
    (index) => {
      if (board[index] === null) {
        const newBoard = [...board];
        newBoard[index] = "X"; // Jugador 'X'
        setBoard(newBoard);
        //TODO Añadir posicion IA
      }
    },
    [board]
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 md:text-5xl">3 en Raya</h1>
      <Board board={board} onCellClick={handleCellClick} />
      <GameStatus />
      <div className="flex justify-between w-full mt-4">
        <ResetButton onReset={resetBoard} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg"
          onClick={openModal}
        >
          Ver Ranking
        </button>
      </div>
      <RankingModal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
