import Link from "next/link";
import StudentInfo from "../StudentInfo";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <div>
        <p>This is Week 2</p>
      </div>

      <div className="mb-32 text-center font-mono text-pink-400 bg-white py-10 w-1/2 rounded-full">
        <StudentInfo />
      </div>
      <Link href="/"> Back Home</Link>
    </main>
  );
}
