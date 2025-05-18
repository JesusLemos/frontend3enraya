// components/RankingModal.js
import React from "react";

const RankingModal = ({ isOpen, onClose, playerWins, iaWins, draws }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ranking</h2>
        <div className="mb-4 text-lg text-gray-700">
          <p className="mb-2">
            Victorias del Jugador:{" "}
            <span className="text-blue-500 font-semibold">{playerWins}</span>
          </p>
          <p className="mb-2">
            Victorias de la IA:{" "}
            <span className="text-red-500 font-semibold">{iaWins}</span>
          </p>
          <p>
            Empates:{" "}
            <span className="text-gray-600 font-semibold">{draws}</span>
          </p>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default RankingModal;
