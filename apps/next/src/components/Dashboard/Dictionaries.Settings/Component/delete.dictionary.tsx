import React from "react";
import { useTranslation } from "next-i18next";

import { Button, Label } from "@wordigo/ui";

export default function Title() {
  const { t } = useTranslation();
  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("title")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.title_notes")}</p>
      </span>
      <Button>Delete</Button>
    </main>
  );
}
