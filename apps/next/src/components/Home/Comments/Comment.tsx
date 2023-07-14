import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import { cn } from "@wordigo/ui/lib/utils";

export default function Comment({
  name,
  title,
  description,
  src,
  teams,
  linkedin,
  twitter,
  github,
}: {
  name: string;
  title: string;
  description: string;
  src: string;
  teams?: boolean;
  linkedin?: string;
  twitter?: string;
  github?: string;
}) {
  return (
    <div className="max-w-[420px] h-fit px-[30px] py-[20px] rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-lg dark:shadow-black">
      <span className={cn("flex items-center gap-3", teams && "flex-col")}>
        <span className="border-2 border-gray-600 rounded-full">
          {src && !teams && <Image className="rounded-full m-1" alt="" src={src} width={42} height={42}></Image>}

          {src && teams && <Image className="rounded-full m-1" alt="" src={src} width={128} height={128}></Image>}

          {!src && !teams && <div className="rounded-full m-1 w-[42px] h-[42px] bg-sky-500"></div>}
          {!src && teams && <div className="rounded-full m-1 w-[84px] h-[84px] bg-sky-500"></div>}
        </span>
        <span className={cn("flex items-center gap-2 text-sm py-1", teams && "flex-col")}>
          <h1 className="font-semibold">{name}</h1>
          <p className="opacity-60">
            {" "}
            {!teams && <span className="mr-1">{"―"}</span>} {title}
          </p>
        </span>
      </span>
      {description && <div className="mt-4">{description}</div>}
      {teams && (
        <div className="mt-2 flex items-center justify-center">
          <div className="flex gap-1 items-center">
            {github && (
              <Link href={github} target="_blank" className="dark:bg-[#020817] p-2 rounded-full hover:opacity-80">
                <Github className="text-sm w-[15px] h-[15px]" />
              </Link>
            )}
            {twitter && (
              <Link href={twitter} target="_blank" className="dark:bg-[#020817]  p-2 rounded-full hover:opacity-80">
                <Twitter className="text-sm w-[15px] h-[15px]" />
              </Link>
            )}
            {linkedin && (
              <Link href={linkedin} target="_blank" className="dark:bg-[#020817]  p-2 rounded-full hover:opacity-80">
                <Linkedin className="text-sm w-[15px] h-[15px]" />
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
