import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";
import { SettingsIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export function DictionarySettingsLink() {
  const { t } = useTranslation();

  const router = useRouter();
  const routers = router.asPath;
  const goingSettings = () => {
    void router.push(`${routers}/settings`);
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={goingSettings} variant="outline">
            <SettingsIcon size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("dictionaries.open_settings")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
