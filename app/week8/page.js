import React from "react";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

function LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    await gitHubSignIn();
  };

  const handleFirebaseSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? ( // Check if the user is logged in
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleFirebaseSignOut}>Logout</button>
          <Link to="/shopping-list">Go to Shopping List</Link>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button onClick={handleGitHubSignIn}>Login with GitHub</button>
        </div>
      )}
    </div>
  );
}
export default LandingPage;
