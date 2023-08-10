import React from "react";
import { useTranslation } from "next-i18next";

import { Label, Textarea } from "@wordigo/ui";

export default function description({ ...field }) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("description")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.description.description_notes")}</p>
      </span>
      <span className="max-w-[512px] min-w-[512px]">
        <Textarea
          {...field}
          className="w-full max-h-[104px] min-h-[104px] rounded-md border border-gray-300 dark:border-gray-800 px-[14px] py-[12px]"
          placeholder={t("description")}
        />
        <p className="text-[hsl(var(--muted-foreground))] text-sm">220 {t("dictionaries_settings.description.left_charachters")}</p>
      </span>
    </div>
  );
}
