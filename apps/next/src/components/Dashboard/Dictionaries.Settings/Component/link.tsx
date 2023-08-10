import React from "react";
import { Copy } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Button, Input, Label } from "@wordigo/ui";

export default function link() {
  const { t } = useTranslation();
  const username = "Test_User";
  const url = `https://wordigo.app/library/${username}/`;
  return (
    <main className="grid grid-cols-3 w-full mt-10 my-7">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("link")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.link_notes")}</p>
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
