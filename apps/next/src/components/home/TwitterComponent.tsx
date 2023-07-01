import React from "react";

export default function TwitterComponent({ text, name, position, avatar }: { text: string; name: string; position: string; avatar: string | null }) {
  return (
    <div className="w-[350px] rounded-lg px-[15px] py-[8px] shadow-lg max-w-[350px] line-clamp-6">
      <p className="line-clamp-6 text-[#364150] max-w-[350px] break-words">{text}</p>
      <div className="flex items-center justify-between border-t pt-[15px] mt-[15px]">
        <span>
          <p className="font-semibold">{name}</p>
          <p className="opacity-70 text-[14px]">{position}</p>
        </span>
        {avatar === "" && <div className="w-[42px] h-[42px] rounded-full bg-orange-400"></div>}
      </div>
    </div>
  );
}
