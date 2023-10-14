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
            <div className="w-11 h-11 p-2 border rounded-[0.5rem] mr-4">
              <Image
                className="animate-pulse"
                alt=""
                src={"/images/party-popper.png"}
                width={43}
                height={43}
              />
            </div>
            <p className="text-sm font-semibold mr-4">
              {t("announcement.description")}
            </p>
            <ProductHunt width="200px" height="43.19px" />
          </div>
        </div>
      </section>
    )
  );
};

export default Banner;
