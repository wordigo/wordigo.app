import PublishedFilter from "./Filter";
import PublishedLoader from "./Published.loader";
import PublishedItem from "./PublishedItem";
import NoDataAnimation from "@/animations/no_data.json";
import { useGetPublicDictionariesMutation } from "@/store/publicDictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { cn } from "@wordigo/ui/lib/utils";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Published = () => {
  const { t } = useTranslation();

  const [handleGetPublicDictionaries] = useGetPublicDictionariesMutation();
  const { dictionaries, dictionariesLoading } = useAppSelector(
    (state) => state.publicDictionaries
  );

  useEffect(() => {
    void handleGetPublicDictionaries({ page: 1, size: 10 });
  }, []);

  const [isAccordionShow, setIsAccordionShow] = useState(false);

  return (
    <>
      <section className="text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          {t("public_dictionaries.title")}
        </h1>
        <p className="sm:text-lg md:text-xl lg:text-lg mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 text-muted-foreground">
          {t("public_dictionaries.description")}
        </p>
      </section>

      <section className="flex flex-col gap-6 sm:gap-8">
        <PublishedFilter
          isAccordionShow={isAccordionShow}
          setIsAccordionShow={setIsAccordionShow}
        />
        {dictionaries?.data?.length === 0 ? (
          <Published.NotFound />
        ) : (
          <div
            className={cn(
              "flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 transition-transform duration-300",
              isAccordionShow
                ? "translate-y-[221px] sm:translate-y-[82px]"
                : "sm:translate-y-0"
            )}
          >
            {dictionariesLoading ? (
              <PublishedLoader />
            ) : (
              <Fragment>
                {dictionaries?.data?.map((dictionary, index) => (
                  <PublishedItem key={index} {...dictionary} />
                ))}
              </Fragment>
            )}
          </div>
        )}
      </section>
    </>
  );
};

Published.NotFound = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col items-center justify-center w-full py-24 max-xl:py-16 px-20 max-md:px-4">
      <Lottie
        className="w-60 h-60"
        animationData={NoDataAnimation}
        loop={true}
        width={100}
        height={100}
      />
      <div className="absolute bottom-14 flex-col flex items-center justify-center">
        <p className="font-bold text-lg text-gray-600 dark:text-gray-400">
          {t("search_no_result.title")}
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {t("search_no_result.description")}
        </p>
      </div>
    </section>
  );
};

export default Published;
