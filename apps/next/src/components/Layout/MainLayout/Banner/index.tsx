import ProductHunt from "./product.hunt";
import PartyPopper from "/public/images/party-popper.svg";
import { Button } from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const { t } = useTranslation();
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    isBannerOpen && (
      <section className="w-full border-b py-3 bg-[#FF6154] text-white">
        <div className="max-w-[90rem] max-lg:w-full px-20 max-md:px-4 flex items-center mx-auto justify-center">
          <div className="flex items-center">
            <p className="text-sm font-semibold">
              {t("announcement.description")}
            </p>
            <Button className="px-1.5 h-5 rounded-sm font-bold bg-white text-[#FF6154] mx-2 hover:bg-white">
              Product Hunt
            </Button>
            <p className="text-sm font-semibold mr-2">
              {t("announcement.button")}
            </p>
          </div>
        </div>
      </section>
    )
  );
};

export default Banner;
