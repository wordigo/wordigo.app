import React from "react";
import CInput from "@/components/UI/Input/Input";
import { InfoIcon } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Label, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@wordigo/ui";

export default function Link({ ...field }) {
  const { t } = useTranslation();
  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("link")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.link_notes")}</p>
      </span>
      <CInput
        classNames="w-full border max-w-[512px] min-w-[512px]"
        className="w-full bg-white rounded-none border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        leftSection={<span className=" text-center text-sm text-muted-foreground select-none">wordigo.app/library/TESTUSER/</span>}
        rightSection={
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="text-muted-foreground" size={16} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Lorem ipsum dolor sit amet.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        placeholder={field.value}
        {...field}
      />
    </main>
  );
}
