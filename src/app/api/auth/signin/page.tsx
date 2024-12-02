"use client";
import Config from "@/utils/config";
import Image from "next/image";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    alert("Magic link sent! Please check your email.");
  };

  const handleGoogleSignIn = () => {
    const width = 500;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.outerHeight - height) / 2;

    const popup = window.open(
      `${Config.BACKEND_BASE_URL}/api/auth/google`,
      "Sign in - Google accounts",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    // Wait for the user to complete the OAuth flow and return a code
    const messageListener = async (event: MessageEvent) => {
      if (event.origin !== Config.BACKEND_BASE_URL) return; // Ensure the message is from your backend

      const { code } = event.data;
      if (code) {
        try {
          // Exchange the code for a JWT token
          const response = await fetch(
            `${Config.BACKEND_BASE_URL}/api/auth/token`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to exchange code for token");
          }

          const { token } = await response.json();

          localStorage.setItem("authToken", token);

          // Redirect the user to the dashboard
          window.location.href = "/dashboard";
        } catch (error) {
          console.error("Error during token exchange:", error);
          alert("Authentication failed.");
        } finally {
          // Cleanup the message listener
          window.removeEventListener("message", messageListener);
          popup?.close();
        }
      }
    };

    // Listen for the message from the popup
    window.addEventListener("message", messageListener);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleEmailSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mandy hover:bg-mandydark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mandydark ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Sign in with email"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={handleGoogleSignIn}
                className="w-full items-center inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <Image
                  src="/google.svg"
                  alt="google-icon"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
