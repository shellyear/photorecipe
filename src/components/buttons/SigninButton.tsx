"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ISigninButton {
  className?: string;
  text?: string;
}

export default function SignInButton({ className, text }: ISigninButton) {
  const router = useRouter();

  const handleClick = () => {
    const callbackUrl = "/dashboard";

    router.push(
      `/api/auth/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`
    );
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
