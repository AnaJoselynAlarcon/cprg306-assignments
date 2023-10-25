import React from "react";
import Link from "next/link";
import StudentInfo from "./StudentInfo";

const weeks = [
  { name: "Week 2", url: "/week2" },
  { name: "Week 3", url: "/week3" },
  { name: "Week 4", url: "/week4" },
  { name: "Week 5", url: "/week5" },
  { name: "Week 6", url: "/week6" },
  { name: "Week 7", url: "/week7" },
  { name: "Week 8", url: "/week8" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center bg-gradient-to-b from-blue-500 to-purple-500 p-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          CPRG 306: Web Development 2 - Assignments
        </h1>
      </div>

      <div className="mr-8">
        <StudentInfo />
      </div>

      <div className="flex flex-col gap-4">
        {weeks.map((week, index) => (
          <button
            key={index}
            className="bg-white text-blue-500 border-blue-500 border-2 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300">
            <Link href={week.url}>{week.name}</Link>
          </button>
        ))}
      </div>
    </main>
  );
}
