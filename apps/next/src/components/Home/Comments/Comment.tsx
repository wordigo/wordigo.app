import React from "react";
import Image from "next/image";

export default function Comment({ name, title, description, src }: { name: string; title: string; description: string; src: string }) {
  return (
    <div className="max-w-[420px] h-fit px-[30px] py-[20px] rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-lg dark:shadow-black">
      <span className="flex items-center gap-3">
        <span className="border-2 border-gray-600 rounded-full">
          {src && (
            <Image
              className="rounded-full m-1"
              alt=""
              src={"https://avatars.githubusercontent.com/u/99817309?s=400&u=9d0d061c3894f58e53c39aa8ed1b8a0bee470110&v=4"}
              width={42}
              height={42}
            ></Image>
          )}

          {!src && <div className="rounded-full m-1 w-[42px] h-[42px] bg-sky-500"></div>}
        </span>
        <span className="flex items-center gap-2 text-sm">
          <h1 className="font-semibold">{name}</h1>
          <p className="opacity-60">
            {" "}
            <span className="mr-1">{"―"}</span> {title}
          </p>
        </span>
      </span>
      <div className="mt-4">{description}</div>
    </div>
  );
}
