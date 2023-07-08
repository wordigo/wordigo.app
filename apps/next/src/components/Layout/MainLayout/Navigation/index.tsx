import React from "react";
import Link from "next/link";
import { cn } from "@wordigo/ui/lib/utils";

export default function index({variant} : {variant?: 'Sidebar'}) {
  return (
    <ul className={cn("flex items-center",
        variant === 'Sidebar' && 'text-[12px] text-blue-800',
        variant !== 'Sidebar' && 'text-[#4A5562] justify-between text-[13px] w-full dark:text-white dark:opacity-80'
    )}>
      <li className={cn("flex items-center font-bold", variant === 'Sidebar' && 'gap-5', variant !== 'Sidebar' && 'gap-9')}>
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
  );
}
