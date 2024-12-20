"use client";
import API from "@/utils/api";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";

const VerifyEmail = () => {
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const verificationToken = searchParams.get("token");

  useEffect(() => {
    if (!verificationToken) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        await API.auth.verifyEmail(verificationToken);
        setStatus("success");
        setTimeout(() => router.push("/dashboard"), 2500);
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          (error as Error).message || "Error during email verification"
        );
        console.error(error);
      }
    };

    verifyEmail();
  }, [router, verificationToken]);

  return (
    <div className="text-center">
      {status === "loading" && (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-gray-600">Verifying your email...</p>
        </div>
      )}
      {status === "success" && (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-gray-800">
            {"Redirecting to dashboard..."}
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-gray-800">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <VerifyEmail />
    </Suspense>
  );
}
