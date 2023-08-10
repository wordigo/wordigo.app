import React from "react";
import { useTranslation } from "next-i18next";
import { Input, Label } from "@wordigo/ui";

export default function Title({ ...field }) {
  const {t} = useTranslation()
  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>
            {t("title")}
          </h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.link_notes")}</p>
      </span>
      <Input {...field} className="w-full py-[22px] border px-3 max-w-[512px] min-w-[512px]" placeholder={t("title")} />
    </main>
  );
}
