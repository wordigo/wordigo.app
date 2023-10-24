import PublishedFilter from "./Filter";
import PublishedLoader from "./Published.loader";
import PublishedItem from "./PublishedItem";
import NoDataAnimation from "@/animations/no_data.json";
import { useGetPublicDictionariesMutation } from "@/store/publicDictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { cn } from "@wordigo/ui/lib/utils";
import Lottie from "lottie-react";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect, useState } from "react";

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
    <section className="py-16 sm:py-20 md:py-24 px-20 max-md:px-4 w-full">
      <div className="mb-14 sm:mb-16 md:mb-20 lg:mb-24 text-center max-w-sm sm:max-w-none mx-auto sm:mx-0">
        <h1 className="text-5xl font-semibold max-xl:text-4xl max-md:text-2xl">
          {t("public_dictionaries.title")}
        </h1>

        <p className="text-xl mt-6 text-muted-foreground max-xl:text-lg max-xl:mt-4 max-md:text-base">
          {t("public_dictionaries.description")}
        </p>
      </div>

      <PublishedFilter
        isAccordionShow={isAccordionShow}
        setIsAccordionShow={setIsAccordionShow}
      />
      {dictionaries?.data?.length === 0 ? (
        <Published.NotFound />
      ) : (
        <main
          className={cn(
            "mt-6 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-12 sm:gap-y-14 md:gap-y-16 transition-transform duration-300",
            isAccordionShow ? "translate-y-[221px] sm:translate-y-[82px]" : "sm:translate-y-0"
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
        </main>
      )}
    </section>
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
