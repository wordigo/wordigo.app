import React from "react";

import { Label, Textarea } from "@wordigo/ui";

export default function description({ ...field }) {
  return (
    <div className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>Description</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">Let people know about your dictionary.</p>
      </span>
      <span className="max-w-[512px] min-w-[512px]">
        <Textarea
          {...field}
          className="w-full max-h-[104px] min-h-[104px] rounded-md border border-gray-300 dark:border-gray-800 px-[14px] py-[12px]"
          placeholder="Description"
        />
        <p className="text-[hsl(var(--muted-foreground))] text-sm">220 charachters left</p>
      </span>
    </div>
  );
}
