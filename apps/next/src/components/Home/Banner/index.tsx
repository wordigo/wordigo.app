import Image from "next/image";
import Animation from "@/components/Animation";
import { useTranslation } from "next-i18next";
import { FaFileDownload } from "react-icons/fa";

import { Button } from "@wordigo/ui";

export default function FeatureBanner() {
  const { t } = useTranslation();
  return (
    <Animation>
      <div className="container px-4 mx-auto max-w-[1440px] w-full">
        <div className="relative py-18 px-6 bg-blue-500 rounded-2xl overflow-hidden">
          <Image
            src="/images/background-banner-squares.png"
            width={1126}
            height={323}
            className="absolute top-0 left-0 h-full w-full object-cover opacity-70"
            alt=""
            data-config-id="auto-img-1-4"
          />
          <div className="relative max-w-lg mx-auto text-center my-[25px]">
            <h3 className="text-3xl font-bold text-white mb-3">{t("nav_HeroBannerHeading")}</h3>
            <p className="font-medium text-blue-200 mb-6">{t("nav_HeroBannerDescription")}</p>
            <Button className=" gap-x-2" variant={"default"} size={"lg"}>
              <FaFileDownload size={15} />
              {t("nav_HeroBannerButton")}
            </Button>
          </div>
        </div>
      </div>
    </Animation>
  );
}
