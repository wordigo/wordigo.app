import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import { Button } from "@wordigo/ui";

export function Share() {
  const { t } = useTranslation();

  const router = useRouter();
  const routers = router.asPath;
  const goingSettings = () => {
    void router.push(`${routers}/settings`);
  };

  return (
    <Button onClick={goingSettings} variant="outline" className="dark:bg-white dark:text-black bg-black text-white font-semibold text-sm">
      {t("dic_words.settings")}
    </Button>
  );
}
