import React from "react";
import NewItem from "./new-item";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <NewItem />
      </div>

      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600">
        Back Home
      </Link>
    </main>
  );
}
