import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";
import { SettingsIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export function DictionarySettingsLink() {
  const { t } = useTranslation();

  const router = useRouter();
  const routers = router.asPath;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`${routers}/settings`}>
            <Button variant="outline">
              <SettingsIcon size={16} />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("dictionaries.open_settings")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
