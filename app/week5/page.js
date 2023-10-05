import Link from "next/link";

import React from "react";

import ItemList from "./item-list";

import Item from "./item";

export default function Home() {
  return (
    <main>
      <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
        Shopping List
      </h1>

      <div>
        <ItemList />
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600 ">
        Back Home
      </Link>
    </main>
  );
}
