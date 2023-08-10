import React from "react";
import { Copy } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";

import { Label } from "@wordigo/ui";

import CInput from "./Input";

export default function Link({ ...field }) {
  const { t } = useTranslation();
  const { data } = useSession();
  const linkCopy = `wordigo.app/library/${data.user.username}/TITLE`;

  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("link")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">{t("dictionaries_settings.link_notes")}</p>
      </span>
      <CInput
        disabled
        links={linkCopy}
        classNames="w-full border max-w-[512px] min-w-[512px]"
        className="w-full rounded-none border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
        leftSection={<span className=" text-center text-sm text-muted-foreground select-none">wordigo.app/library/{data.user.username}/</span>}
        rightSection={<Copy className="text-muted-foreground" size={20} />}
        placeholder={field.value}
        {...field}
      />
    </main>
  );
}
