import React from "react";
import Image from "next/image";

import Rating from "./Rating";
import { type IPublished } from "./published.constan";

export default function Published({ item }: { item: IPublished }) {
  return (
    <>
      {item.user.name && (
        <div className="flex flex-col gap-2 max-w-[318px] h-fit px-2 py-2 rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-lg dark:shadow-black">
          {item.src ? (
            <Image alt="" src={""} width={300} height={140} className="rounded-xl"></Image>
          ) : (
            <div className="w-[300px] h-[140px] bg-gray-500 rounded-xl"></div>
          )}
          <span className="flex flex-col">
            <div className="font-semibold">{item.title}</div>
            <h1 className="opacity-60 text-sm">{item.description}</h1>
          </span>
          <span className="flex items-center justify-between">
            <div>
              <Rating rating={item.rating} />
            </div>
            <span className="flex items-center gap-3">
              {item.user.profil_avatar ? (
                <Image alt="" src={""} width={30} height={30} className="rounded-full"></Image>
              ) : (
                <div className="w-[30px] h-[30px] bg-gray-500 rounded-full"></div>
              )}
              <div>{item.user.name}</div>
            </span>
          </span>
        </div>
      )}
    </>
  );
}
