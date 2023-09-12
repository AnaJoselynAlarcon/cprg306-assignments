import Link from "next/link";
import StudentInfo from "../app/StudentInfo";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <p>My Shopping List</p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <StudentInfo />
      </div>
      <Link href="/"> Back Home</Link>
    </main>
  );
}
