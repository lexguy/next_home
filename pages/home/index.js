import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link href="home/reader">
        <a>To Reader</a>
      </Link>
    </div>
  );
}
