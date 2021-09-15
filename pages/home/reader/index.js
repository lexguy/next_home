import Link from "next/link";

export default function Reader() {
  return (
    <div>
      <h2>Reader</h2>
      <div>
        <Link href="/home/game">
          <a>To Game</a>
        </Link>
      </div>
      <div>
        <Link href="/home">
          <a>To Home</a>
        </Link>
      </div>
    </div>
  );
}
