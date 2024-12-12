"use client";
import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Link from "next/link";
import SignInButton from "../buttons/SigninButton";
import { config } from "@/middleware";
import { usePathname } from "next/navigation";
import ProfileButton from "../buttons/ProfileButton";

const UnauthorizedUserLayout = () => (
  <div className="flex justify-between pb-6">
    <div className="flex gap-12">
      <Logo />
      <div className="hidden items-center gap-12 md:inline-flex">
        <a href="#pricing">Pricing</a>
        <Link href="/auth/signup">Signup</Link>
      </div>
    </div>
    <SignInButton
      className="btn btn-sm bg-mandy hover:bg-mandydark text-white"
      text="Log in"
    />
  </div>
);

const AuthorizedUserLayout = () => (
  <div className="flex justify-between items-center">
    <Logo />
    <ProfileButton />
  </div>
);

const Header = () => {
  const pathname = usePathname();

  const isProtectedRoute = config.matcher.includes(pathname);

  return (
    <header>
      <Container>
        {isProtectedRoute ? (
          <AuthorizedUserLayout />
        ) : (
          <UnauthorizedUserLayout />
        )}
      </Container>
    </header>
  );
};

export default Header;
