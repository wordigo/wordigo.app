import React from "react";

import { Input, Label } from "@wordigo/ui";

export default function Title({ ...field }) {
  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>Title</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">Make it easy for people to search the dictionary.</p>
      </span>
      <Input {...field} className="w-full py-[22px] border px-3 max-w-[512px] min-w-[512px]" placeholder="Title" />
    </main>
  );
}
