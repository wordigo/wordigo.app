import React from "react";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <div>
      <nav className="flex items-center justify-between gap-16">
        <Link href={"/"}>LOGO</Link>
        <ul className="flex items-center gap-8 text-[#4A5562] justify-between w-full">
          <li className="flex items-center gap-9">
            <Link href={"/"}>Features</Link>
            <Link href={"/"}>Translate</Link>
            <Link href={"/"}>Contact</Link>
          </li>

          <li className="flex items-center gap-8">
            <Link href={'/'}>Sign in</Link>
            <Link href={'/'} className="bg-[#1D64F3] text-white py-[6px] px-[16px] rounded-full">Get started</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
