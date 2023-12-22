import { Badge, buttonVariants } from "@wordigo/ui";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

function NewHeroSection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center gap-y-12 sm:gap-y-14 md:gap-y-16">
      <div className="flex flex-col items-center gap-y-8 sm:gap-y-9 md:gap-y-10 text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
        <Badge
          className="text-sm font-medium w-max px-2.5 py-1 self-center -mb-4 backdrop-blur"
          variant="outline"
        >
          <div className="w-2.5 h-2.5 mr-2 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-primary animate-ping rounded-full"></span>
          </div>
          {t("hero.badge")} <ArrowRight className="ml-2 h-4 w-4" />
        </Badge>

        <div className="flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6 lg:gap-y-7 xl:gap-y-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            {t("hero.title")}
          </h1>

          <p className="sm:text-lg md:text-xl text-muted-foreground">
            {t("hero.description")}
          </p>
        </div>

        <div className="flex gap-x-4">
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "lg",
            })}
            href="https://chrome.google.com/webstore/detail/wordigo-translator-dictio/mckifajhmdgpffjciaanamiheadnclpi?hl=tr"
            target="_blank"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            {t("hero.try_our_extension")}
          </Link>
          <Link
            className={buttonVariants({
              size: "lg",
            })}
            href="/auth/signup"
          >
            {t("hero.get_started")}
          </Link>
        </div>
      </div>

      <div className="relative aspect-square lg:min-w-[30rem] xl:max-w-[40rem] xl:max-h-[35rem] md:w-[30rem] md:h-[24rem] max-md:w-[340px] max-md:h-[240px] max-lg:mt-12 mt-0">
        <Image
          src="/images/hero-extension.png"
          fill
          alt=""
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}

export default NewHeroSection;
