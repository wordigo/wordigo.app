import React from "react";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Input, Label } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export default function Published({ ...field }) {
  const { t } = useTranslation();

  return (
    <main className="grid grid-cols-3 w-full">
      <section className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("permissions")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.permissions_notes")}</p>
      </section>
      <section className="w-full flex items-center flex-col max-w-[512px] min-w-[512px]">
        <Label
          className={cn(
            "w-full py-[22px] border px-3 max-w-[512px] min-w-[512px] mb-2 rounded-md",
            field.value === true && "border-gray-400 dark:border-gray-100",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="mr-3 flex items-center">
              <Eye className="mr-4 w-[24px] h-[24px]" />
              <h1>{t("dictionaries_settings.published.true_title")}</h1>
            </span>
            {field.value === true && <CheckCircle2 className="w-[20px] h-[20px]" />}
          </div>
          <div className="ml-10">
            <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.published.true_description")}</p>
          </div>
          <Input type="checkbox" checked={field.value === true} onChange={() => field.onChange(true)} className="hidden" />
        </Label>

        <Label
          className={cn(
            "w-full py-[22px] border px-3 max-w-[512px] min-w-[512px] mb-2 rounded-md",
            field.value === false && "border-gray-400 dark:border-gray-100",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="mr-3 flex items-center">
              <EyeOff className="mr-4 w-[24px] h-[24px]" />
              <h1>{t("dictionaries_settings.published.false_title")}</h1>
            </span>
            {field.value === false && <CheckCircle2 className="w-[20px] h-[20px]" />}
          </div>
          <div className="ml-10">
            <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.published.false_description")}</p>
          </div>
          <Input type="checkbox" checked={field.value === false} onChange={() => field.onChange(false)} className="hidden" />
        </Label>
      </section>
    </main>
  );
}
