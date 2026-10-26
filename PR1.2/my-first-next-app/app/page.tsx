import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Главная</h1>
      <ul>
        <li>
          <Link href="/blog/nextjs-vvedenie">Введение в Next.js</Link>
        </li>
        <li>
          <Link href="/blog/react-osnovy">Основы React</Link>
        </li>
      </ul>
    </main>
  );
}
