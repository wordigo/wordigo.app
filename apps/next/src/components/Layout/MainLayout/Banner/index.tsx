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
      "https://www.producthunt.com/posts/wordigo-your-browser-as-a-language-lab",
      "_blank"
    );
  };

  return (
    <section
      className="w-full border-b relative py-3 bg-[#FF6154] text-white cursor-pointer"
      onClick={handleBannerClick}
    >
      <div className="max-w-[90rem] max-lg:w-full px-20 h-10 md:h-full max-md:px-4 flex items-start mx-auto  justify-center sm:items-center">
        <div className="flex items-center">
          <p className="text-sm font-semibold">
            {t("announcement.description")}
          </p>
          <div className="absolute bottom-2 right-0 left-0 flex items-center justify-center sm:static">
            <Button className="px-1.5 h-5 rounded-sm font-bold bg-white text-[#FF6154] mx-2 hover:bg-white">
              Product Hunt
            </Button>
          </div>
          <p className="text-sm font-semibold mr-2 ml-1 sm:ml-auto">
            {t("announcement.button")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
