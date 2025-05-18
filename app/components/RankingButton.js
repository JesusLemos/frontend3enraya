export default function RankingButton({ onModal }) {
  return (
    <button
      className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 md:text-lg transition-colors duration-200"
      onClick={onModal}
    >
      Ver Ranking
    </button>
  );
}
