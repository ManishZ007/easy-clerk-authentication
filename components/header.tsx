import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="py-4">
      <nav className="container flex items-center justify-between">
        <ul className="flex gap-10 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/me">Me</Link>
          </li>
          <li>
            <Link href="/private-data">PrivateData</Link>
          </li>
        </ul>

        <div className="flex items-center justify-between gap-6">
          <ThemeToggle />

          <SignedOut>
            <SignInButton mode="modal">
              <Button size="sm">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
