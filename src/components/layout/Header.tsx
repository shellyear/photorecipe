"use client";
import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Link from "next/link";
import SignInButton from "../buttons/SigninButton";
import { usePathname } from "next/navigation";
import ProfileButton from "../buttons/ProfileButton";
import { NON_PROTECTED_ROUTES } from "@/constants/routes";

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
      text="Get started"
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

  const isNonProtectedRoute = NON_PROTECTED_ROUTES.includes(pathname);

  return (
    <header>
      <Container>
        {isNonProtectedRoute ? (
          <UnauthorizedUserLayout />
        ) : (
          <AuthorizedUserLayout />
        )}
      </Container>
    </header>
  );
};

export default Header;
