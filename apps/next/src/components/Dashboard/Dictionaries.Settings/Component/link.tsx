import React from "react";
import { useRouter } from "next/router";
import { Copy } from "lucide-react";

import { Input, Label } from "@wordigo/ui";

export default function link() {
  const router = useRouter();
  const { id } = router.query;
  const username = "Test_User";
  const test = `https://wordigo.app/library/${username}/${id}`;
  return (
    <main className="grid grid-cols-3 gap-4 my-5 w-full">
      <Label className="max-w-[280px] min-w-[280px] mr-8">Link</Label>
      <div className="border border-gray-300 dark:border-gray-800  flex items-center rounded-md w-full overflow-hidden max-w-[512px] min-w-[512px]">
        <div className="py-[10px] px-3 border-r border-gray-300 dark:border-gray-800">
          <Copy />
        </div>
        <Input className="w-full h-[26px] py-[10px] px-3 border-none rounded-none" placeholder={test} disabled />
      </div>
    </main>
  );
}
