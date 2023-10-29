import { Button } from "@wordigo/ui";
import { useTranslation } from "next-i18next";

const Banner = () => {
  const { t } = useTranslation();
  // const [isBannerOpen, setIsBannerOpen] = useState(true);

  // const closeBanner = () => {
  //   setIsBannerOpen(false);
  // };

  const handleBannerClick = () => {
    window.open(
      "https://www.producthunt.com/products/wordigo-your-browser-as-a-language-lab",
      "_blank"
    );
  };

  return (
    <section
      className="w-full border-b py-3 bg-[#FF6154] text-white cursor-pointer"
      onClick={handleBannerClick}
    >
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
  );
};

export default Banner;
