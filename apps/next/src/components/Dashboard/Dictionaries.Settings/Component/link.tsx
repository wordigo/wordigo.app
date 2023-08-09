import React from "react";
import { Copy } from "lucide-react";

import { Button, Input, Label } from "@wordigo/ui";

export default function link() {
  const username = "Test_User";
  const url = `https://wordigo.app/library/${username}/`;
  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>Link</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">You can share your dictionary from this link.</p>
      </span>
      <div className="border flex items-center rounded-md w-full overflow-hidden max-w-[512px] min-w-[512px]">
        <Button className="py-[10px] px-3 border-r border-gray-300 dark:border-gray-800">
          <Copy />
        </Button>
        <Input className="w-full h-[26px] py-[10px] px-3 border-none rounded-none" placeholder={url} disabled />
      </div>
    </main>
  );
}
