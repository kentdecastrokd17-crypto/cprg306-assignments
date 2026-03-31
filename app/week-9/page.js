"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function LandingPage() {
  // Destructure the user object and authentication functions from the custom hook
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Helper functions to handle the async authentication calls
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Failed to log in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <main className="p-8 max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-md text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List App</h1>

      {/* Conditional Rendering based on the 'user' object */}
      {user ? (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg">
            Welcome, <span className="font-semibold">{user.displayName}</span> ({user.email})
          </p>
          
          <div className="flex space-x-4 mt-4">
            <Link 
              href="/week-9/shopping-list" 
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Go to Shopping List
            </Link>
            
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg">Please sign in to view your shopping list.</p>
          
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors flex items-center"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </main>
  );
}