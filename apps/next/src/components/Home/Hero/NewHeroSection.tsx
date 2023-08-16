import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Badge, Button } from "@wordigo/ui";

function NewHeroSection() {
  const { t } = useTranslation();

  // max - lg:flex max - lg: flex - col max - lg: pb - 16 max - md: px - 4

  return (
    <div className="w-full pt-16 pb-24 px-20 grid grid-cols-2 gap-x-16 max-lg:grid-cols-1 justify-center items-center max-lg:flex max-lg:flex-col max-lg:pb-16 max-md:px-4">
      <section className="flex flex-col items-start justify-center max-lg:items-center">
        <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
          <div className="w-2.5 h-2.5 mr-2 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-primary animate-ping rounded-full"></span>
          </div>
          {t("hero.badge")} <ArrowRight className="ml-2 h-4 w-4" />
        </Badge>
        <h1 className="text-6xl text-left font-semibold mt-4 max-lg:text-5xl max-md:text-3xl">{t("hero.title")}</h1>
        <p className="text-left font-normal text-xl text-muted-foreground mt-6 max-lg:text-lg max-lg:mt-4 max-md:text-lg">{t("hero.description")}</p>
        <div className="grid grid-cols-2 gap-x-3 mt-12 max-lg:mt-8">
          <Button variant="outline" size="lg">
            <ExternalLink className="mr-2 h-4 w-4" />
            {t("hero.try_our_extension")}
          </Button>
          <Button size="lg">{t("hero.get_started")}</Button>
        </div>
      </section>
      <section className="relative aspect-square lg:min-w-[30rem] xl:max-w-[40rem] xl:max-h-[35rem] md:w-[30rem] md:h-[24rem] max-md:w-[340px] max-md:h-[240px] max-lg:mt-12 mt-0">
        <Image src="/images/extension.png" fill alt="" className="rounded-2xl object-cover" />
      </section>
    </div>
  );
}

// min - w - [35rem] h - [25rem] lg: w - [40rem] lg: mt - 12 lg: h - [28rem] md: w - [30rem] md: h - [24rem] max - md: w - [343px] max - md: h - [380px] max - lg: mt - 12 relative

export default NewHeroSection;
