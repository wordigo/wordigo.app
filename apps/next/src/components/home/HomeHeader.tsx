import React from "react";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div>
      <nav className="flex items-center justify-between gap-16">
        <Link href={"/"} className="font-bold text-[22px]">Wordigo</Link>
        <ul className="flex items-center gap-8 text-[#4A5562] justify-between w-full">
          <li className="flex items-center gap-9 text-[13px] font-bold">
            <Link href={"/"} passHref>Home</Link>
            <Link href={"/translate"} passHref>Translate</Link>
            <Link href={"/dashboard"} passHref>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
