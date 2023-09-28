import React from "react";
import NewItem from "./new-item";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <NewItem />
      </div>
    </main>
  );
}
