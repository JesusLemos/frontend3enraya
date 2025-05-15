import Link from "next/link";

export default function RankingButton() {
  return (
    <Link href="/ranking">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Ver Ranking
      </button>
    </Link>
  );
}
