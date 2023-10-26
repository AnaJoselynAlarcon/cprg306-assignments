"use client";

import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleGitHubSignIn() {
    gitHubSignIn();
  }

  function handleFirebaseSignOut() {
    firebaseSignOut();
  }

  return (
    <main>
      <div>
        <p>Welcome, please authenticate </p>
        {user ? (
          <button
            className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleFirebaseSignOut}>
            Sign Out
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleGitHubSignIn}>
            Sign In
          </button>
        )}
      </div>
      <Link
        href="/"
        className="px-4 py-2 text-white bg-pink-500 rounded hover:bg-green-600 ">
        Back Home
      </Link>
    </main>
  );
}
