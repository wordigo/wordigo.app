"use client";

import * as React from "react";
import Link from "next/link";
import ProfilAvatar from "@/components/ProfilAvatar";
import { siteConfig } from "@/config/site";
import { GitlabIcon } from "lucide-react";

import ThemeMode from "../ThemeMode";

export function MainNav({ user }: { user: { name: string; image: string; email: string } }) {
  return (
    <div className="flex items-center w-full relative justify-between">
      <div>
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <GitlabIcon />
          <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
      </div>
      <div className=" flex gap-4">
        <ThemeMode />
        <ProfilAvatar user={user} />
      </div>
    </div>
  );
}
