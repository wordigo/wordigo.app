import React from "react";

import { Label, Textarea } from "@wordigo/ui";

export default function description({ ...field }) {
  return (
    <div className="grid grid-cols-3 gap-4 my-5 w-full">
      <Label className="max-w-[280px] min-w-[280px] mr-8">Description</Label>
      <span className="max-w-[512px] min-w-[512px]">
        <Textarea { ...field }
          className="w-full max-h-[104px] min-h-[104px] rounded-md border border-gray-300 dark:border-gray-800 px-[14px] py-[12px]"
          placeholder="Description"
        />
        <p className="opacity-70 text-[#475467] text-[14px]">220 charachters left</p>
      </span>
    </div>
  );
}
