import Link from "next/link";
import StudentInfo from "../StudentInfo";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <p>This is Week 2</p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <StudentInfo />
      </div>
      <Link href="/"> Back Home</Link>
    </main>
  );
}
