import Link from "next/link";
import StudentInfo from "./StudentInfo";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen  justify-between p-24">
      <div className="z-10 max-w-5xl w-full  justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          CPRG 306: Web Development 2 - Assignments
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <StudentInfo />
      </div>
      <nav>
        <Link href="/week2"> Week 2</Link>
      </nav>
    </main>
  );
}
