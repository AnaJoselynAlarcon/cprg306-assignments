import Link from "next/link";
import StudentInfo from "./StudentInfo";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center p-24">
      <div className="text-center">
        <p className="border-b border-pink-300 bg-gray pb-6 pt-8">
          CPRG 306: Web Development 2 - Assignments
        </p>
      </div>

      <div className="mr-8">
        <StudentInfo />
      </div>

      <div className="flex flex-col gap-4">
        <button className="bg-white text-black border-yellow-500 border-2 px-4 py-2 rounded-md">
          <Link href="/week2">Week 2</Link>
        </button>

        <button className="bg-white text-black border-yellow-500 border-2 px-4 py-2 rounded-md">
          <Link href="/week3">Week 3</Link>
        </button>

        <button className="bg-white text-black border-yellow-500 border-2 px-4 py-2 rounded-md">
          <Link href="/week4">Week 4</Link>
        </button>
      </div>
    </main>
  );
}
