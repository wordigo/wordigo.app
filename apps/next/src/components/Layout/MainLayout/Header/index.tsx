import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";

import Banner from "../Banner";
import { ModeToggle } from "./ThemeMode";

export default function HomeHeader() {
  return (
    <Fragment>
      <Banner />
      <div className="flex items-center justify-between max-w-[1380px] m-auto">
        <nav className="flex items-center justify-between gap-16">
          <span className="flex gap-3 items-center">
            <Image src="/images/Logo.png" width={26} height={26} alt="" className="rounded-md" />
            <Link href={"/"} className="font-bold text-[18px]">
              Wordigo
            </Link>
          </span>

          <ul className="flex items-center gap-8 text-[#4A5562] justify-between w-full dark:text-white dark:opacity-80">
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

              <Link href={"/team"} passHref>
                Team
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-y-6 gap-x-3 mt-[20px]">
          <ModeToggle />
          <LanguageSelector className="w-[150px] !h-9" />
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
    </Fragment>
  );
}
