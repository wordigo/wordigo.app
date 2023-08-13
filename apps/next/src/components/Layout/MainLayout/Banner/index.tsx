import { useState } from "react";
import { PartyPopper } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Button } from "@wordigo/ui";

const Banner = () => {
  const { t } = useTranslation();
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    isBannerOpen && (
      <section className="w-full border-b py-3">
        <div className="max-w-[90rem] max-lg:w-full max-lg:px-3 px-20 flex items-center mx-auto justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 p-2.5 border rounded-[0.5rem] mr-4">
              <PartyPopper className="w-5 h-5 animate-pulse" />
            </div>
            <p className="text-sm" dangerouslySetInnerHTML={{ __html: t("announcement.description") }}></p>
          </div>
          <div className="flex items-center">
            <Button variant="default">{t("announcement.button")}</Button>
            {/* <Button variant="ghost" onClick={closeBanner}>
                <X className="w-4 h-4" />
              </Button> */}
          </div>
        </div>
      </section>
    )
  );
};

export default Banner;
