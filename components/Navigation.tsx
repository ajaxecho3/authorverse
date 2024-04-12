import React from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";
import AuthorVerseLogo from "./AuthorVerseLogo";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <div className="w-full">
      <nav className="w-full flex justify-center h-16">
        <div className="w-full max-w-screen-2xl flex justify-between items-center p-3 text-sm">
          <Link href="/">
            <AuthorVerseLogo />
          </Link>{" "}
          <AuthButton />{" "}
        </div>{" "}
      </nav>
    </div>
  );
}
