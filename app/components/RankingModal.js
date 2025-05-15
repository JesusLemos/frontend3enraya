"use client";

import { useState, useEffect } from "react";

export default function RankingModal({ isOpen, onClose, playerWins, iaWins }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Ranking</h2>
        <div className="flex justify-center items-center space-x-16">
          {" "}
          {/* Centrar y espaciar */}
          <div>
            <p className="font-semibold text-center">Jugador</p>{" "}
            {/* Centrar texto */}
            <p className="text-center">{playerWins}</p> {/* Centrar número */}
          </div>
          <div>
            <p className="font-semibold text-center">IA</p>{" "}
            {/* Centrar texto */}
            <p className="text-center">{iaWins}</p> {/* Centrar número */}
          </div>
        </div>
        <div className="flex justify-center items-center mt-2 space-x-4">
          {" "}
          {/* Añadir "---" */}
          <p>---</p>
          <p>----</p>
        </div>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
