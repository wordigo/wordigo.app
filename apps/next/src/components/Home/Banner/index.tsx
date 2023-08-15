import Image from "next/image";
import { Zap } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Badge } from "@wordigo/ui";

export default function FeatureBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col items-center px-20 py-24 max-lg:py-16">
      <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
        <Zap className="mr-2 h-4 w-4" />
        {t("feature_mockup.badge")}
      </Badge>
      <h2 className="mt-4 text-4xl font-semibold">{t("feature_mockup.heading")}</h2>
      <p className="text-xl text-muted-foreground mt-5">{t("feature_mockup.description")}</p>
      <div className="w-[48rem] h-[32rem] relative border-4 border-primary bg-primary rounded-[0.625rem] mt-16">
        <Image src="/images/extension.png" fill alt="" className="rounded-[0.3125rem]" />
      </div>
    </section>
  );
}
