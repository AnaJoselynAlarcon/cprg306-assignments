import Link from "next/link";
import StudentInfo from "../StudentInfo";
import React from "react";
import Item from "./item";
import ItemList from "./item-list";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-16">Shopping List</h1>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <ItemList
          name={Item.name}
          quantity={Item.quantity}
          category={Item.category}
        />
      </div>
      <Link href="/"> Back Home</Link>
    </main>
  );
}
