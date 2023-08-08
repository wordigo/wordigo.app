import React from "react";
import { Input, Label } from "@wordigo/ui";

export default function Title({...field}) {
  return (
    <main className="grid grid-cols-3 gap-4 my-5 w-full">
      <Label>Title</Label>
      <div className="border border-gray-300 dark:border-gray-800 py-[10px] rounded-md overflow-hidden max-w-[512px] min-w-[512px]">
        <Input {...field} className="w-full h-[26px] py-[10px] px-3 border-none rounded-none" placeholder="Title"/>
      </div>
    </main>
  );
}
