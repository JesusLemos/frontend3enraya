"use client";

import Board from "./components/Board";
import ResetButton from "./components/ResetButton";
import RankingModal from "./components/RankingModal";
import { useState, useCallback } from "react";

export default function Home() {
  const playerCard = "X";
  const iaCard = "O";

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(playerCard);
  const [gameStatus, setGameStatus] = useState(null);
  const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playerWins, setPlayerWins] = useState(0);
  const [iaWins, setIaWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const openModal = useCallback(async () => {
    try {
      const response = await fetch("/api/ranking");
      if (response.ok) {
        const data = await response.json();
        console.log("modal ->", data);
        setPlayerWins(data.playerWins);
        setIaWins(data.iaWins);
        setDraws(data.draws);
        setIsModalOpen(true);
      } else {
        console.error("Error al obtener el ranking");
        alert("Error al cargar el ranking.");
      }
    } catch (error) {
      console.error("Error al obtener el ranking:", error);
      alert("Error al cargar el ranking.");
    }
  }, [setIsModalOpen, setPlayerWins, setIaWins, setDraws]);
  const closeModal = () => setIsModalOpen(false);

  const resetBoard = useCallback(() => {
    setBoard(Array(9).fill(null));
    setTurn(playerCard);
    setGameStatus(null);
  }, []);

  const handleCellClick = useCallback(
    async (index) => {
      if (
        board[index] === null &&
        turn === playerCard &&
        !gameStatus &&
        !isAwaitingResponse
      ) {
        const boardAnterior = [...board];
        const newBoard = [...board];
        newBoard[index] = playerCard;
        setBoard(newBoard);
        setTurn(iaCard);
        setIsAwaitingResponse(true);

        const response = await fetch("/api/move", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            board: newBoard,
            boardAnterior: boardAnterior,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Respuesta de /api/move:", data);
          setIsAwaitingResponse(false);
          setBoard(data.board);

          if (data.gameOver) {
            setGameStatus(
              data.winner ? `¡${data.winner} ha ganado!` : "¡Empate!"
            );
            setTurn(null);
            // Llamar al backend para actualizar el ranking
            fetch("/api/gameover", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ winner: data.winner }),
            });
            if (data.winner === playerCard) {
              setPlayerWins((prev) => prev + 1);
            } else if (data.winner === iaCard) {
              setIaWins((prev) => prev + 1);
            } else {
              setDraws((prev) => prev + 1);
            }
          } else {
            setTurn(data.nextMove !== null ? playerCard : iaCard); // Si la IA jugó, el siguiente turno es del jugador
          }
        } else {
          console.error("Error al obtener el movimiento de la IA");
          setTurn(playerCard);
          setIsAwaitingResponse(false);
        }
      }
    },
    [
      board,
      turn,
      setBoard,
      setTurn,
      gameStatus,
      setGameStatus,
      isAwaitingResponse,
      setIsAwaitingResponse,
      setPlayerWins,
      setIaWins,
      setDraws,
    ]
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4 max-w-screen-md mx-auto">
      <h1 className="text-4xl font-bold mb-8 md:text-5xl">3 en Raya</h1>
      {gameStatus && <div className="text-lg font-bold mb-4">{gameStatus}</div>}
      <div className="text-lg mb-4">Turno de: {turn}</div>
      <Board
        board={board}
        onCellClick={handleCellClick}
        disabled={turn !== playerCard || gameStatus || isAwaitingResponse}
      />
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
        playerWins={playerWins}
        iaWins={iaWins}
        draws={draws}
      />
    </main>
  );
}
