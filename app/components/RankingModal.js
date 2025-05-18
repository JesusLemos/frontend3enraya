// components/RankingModal.js
import React from "react";

const RankingModal = ({ isOpen, onClose, playerWins, iaWins, draws }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Ranking</h2>
        <p>Victorias del Jugador: {playerWins}</p>
        <p>Victorias de la IA: {iaWins}</p>
        <p>Empates: {draws}</p>
        <button
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default RankingModal;
