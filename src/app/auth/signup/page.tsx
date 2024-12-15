"use client";
import Eye from "@/components/icons/Eye";
import EyeOff from "@/components/icons/EyeOff";
import Logo from "@/components/Logo";
import API from "@/utils/api";
import Config from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (email && password) {
        await API.auth.register(email, password);
        setShowMessage(true);
      }
    } catch (error) {
      setError((error as Error).message);
      console.log("Error during registration of the user");
    }
    setIsLoading(false);
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
          await API.auth.validateCodeAndGetAuthToken(code);
          // Redirect the user to the dashboard
          router.push("/dashboard");
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
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Get started with PhotoRecipe
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        {showMessage && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
            {`Verification email has been sent to ${email}`}
          </div>
        )}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mt-1"
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mt-1"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="password"
                  minLength={6}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff
                      className="h-4 w-4 text-gray-500  hover:bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : (
                    <Eye
                      className="h-4 w-4 text-gray-500  hover:bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                Account verification needed
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
                {isLoading ? "Sending..." : "Sign up with email"}
              </button>
              <p className="text-center text-sm mt-2">
                {"Have an account?"}{" "}
                <Link href={"signin"} className="text-mandy underline">
                  Sign in
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-4">
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

            <div className="mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="w-full items-center inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 select-none"
              >
                <Image
                  src="/google.svg"
                  alt="google-icon"
                  width={24}
                  height={24}
                />
                <span className="ml-2">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
