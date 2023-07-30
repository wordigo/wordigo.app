import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Badge, Button } from "@wordigo/ui";

function NewHeroSection() {
  const { t } = useTranslation();

  return (
    <div className="w-full pt-16 pb-24 px-20 grid grid-cols-2 gap-x-16">
      <section className="flex flex-col items-start justify-center">
        <Badge className="text-sm font-medium px-2.5 py-1" variant="outline">
          <div className="w-2.5 h-2.5 mr-2 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-primary animate-ping rounded-full"></span>
          </div>
          {t("hero.badge")} <ArrowRight className="ml-2 h-4 w-4" />
        </Badge>
        <h1 className="text-6xl text-left font-semibold mt-4">{t("hero.title")}</h1>
        <p className="text-left font-normal text-xl text-muted-foreground mt-6">{t("hero.description")}</p>
        <div className="grid grid-cols-2 gap-x-3 mt-12">
          <Button variant="outline" size="lg">
            <ExternalLink className="mr-2 h-4 w-4" />
            {t("hero.try_our_extension")}
          </Button>
          <Button size="lg">{t("hero.get_started")}</Button>
        </div>
      </section>
      <section className="relative aspect-square">
        <Image src="/images/extension.png" fill alt="" className="rounded-2xl object-cover" />
      </section>
    </div>
  );
}

export default NewHeroSection;
