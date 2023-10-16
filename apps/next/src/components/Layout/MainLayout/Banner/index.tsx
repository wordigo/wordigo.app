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
      <section className="w-full border-b py-3">
        <div className="max-w-[90rem] max-lg:w-full px-20 max-md:px-4 flex items-center mx-auto justify-center">
          <div className="flex items-center">
            <Image
              className="animate-pulse mr-4"
              alt=""
              src={"/images/party-popper.png"}
              width={22}
              height={22}
            />
            <p className="text-sm font-semibold mr-4">
              {t("announcement.description")}
            </p>
            <Button className="px-3 h-7 rounded-md bg-[#FF6154] text-white font-bold">
              Product Hunt
            </Button>
          </div>
        </div>
      </section>
    )
  );
};

export default Banner;
