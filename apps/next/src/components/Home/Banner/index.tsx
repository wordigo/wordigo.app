import { Badge } from "@wordigo/ui";
import { Zap } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function FeatureBanner() {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col items-center px-20 py-24 max-md:px-4 max-lg:py-16">
      <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
        <Zap className="mr-2 h-4 w-4" />
        {t("feature_mockup.badge")}
      </Badge>
      <h2 className="mt-4 text-4xl font-semibold max-lg:text-3xl">
        {t("feature_mockup.heading")}
      </h2>
      <p className="text-xl text-muted-foreground mt-5 max-lg:text-lg max-lg:mt-4">
        {t("feature_mockup.description")}
      </p>
      <div className="h-[25rem] lg:w-[40rem] lg:mt-12 lg:min-w-[35rem] lg:h-[28rem] md:w-[30rem] md:h-[24rem] max-md:w-[340px] max-md:h-[240px] max-lg:mt-12 relative border-4 border-primary bg-primary rounded-[0.625rem] mt-16">
        <Image
          src="/images/extension.png"
          fill
          alt=""
          className="rounded-[0.3125rem]"
        />
      </div>
    </section>
  );
}
