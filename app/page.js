import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import RankingButton from "./components/RankingButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 md:text-5xl">3 en Raya</h1>
      <Board />
      <GameStatus />
      <RankingButton />
    </main>
  );
}
