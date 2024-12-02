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
    router.push("/api/auth/signin");
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
