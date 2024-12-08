import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import Link from "next/link";
import SignInButton from "../buttons/SigninButton";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="mb-6 flex justify-between gap-4 md:mb-16">
          <Logo />
          <div className="hidden flex-1 items-center gap-12 px-16 md:inline-flex">
            <a href="#pricing">Pricing</a>
            <Link href="/auth/signup">Signup</Link>
          </div>
          <SignInButton
            className="btn btn-sm bg-mandy hover:bg-mandydark text-white"
            text="Log in"
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
