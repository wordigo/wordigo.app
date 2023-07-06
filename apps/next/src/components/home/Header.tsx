import Link from "next/link";

import { Button } from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";

import Example from "./Notification";

export default function HomeHeader() {
  return (
    <>
      <Example></Example>
      <div className="flex justify-between max-w-[1380px] m-auto">
        <nav className="flex items-center justify-between gap-16">
          <Link href={"/"} className="font-bold text-[22px]">
            Wordigo
          </Link>
          <ul className="flex items-center gap-8 text-[#4A5562] justify-between w-full">
            <li className="flex items-center gap-9 text-[13px] font-bold">
              <Link href={"/"} passHref>
                Home
              </Link>
              <Link href={"/translate"} passHref>
                Translate
              </Link>
              <Link href={"/dashboard"} passHref>
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-6 mt-[20px]">
          <LanguageSelector />
          <div className="w-[2px] bg-[#E0EBEA]"></div>
          <span>
            <Button variant="outline" className="bg-transparent mr-3" size="sm">
              Sign in
            </Button>
            <Button variant="default" size="sm">
              Sign up
            </Button>
          </span>
        </div>
      </div>
    </>
  );
}
