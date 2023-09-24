import PublishedFilter from "./Filter";
import PublishedLoader from "./Published.loader";
import PublishedItem from "./PublishedItem";
import NoDataAnimation from "@/animations/no_data.json";
import { useGetPublicDictionariesMutation } from "@/store/publicDictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import Lottie from "lottie-react";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect } from "react";

const Published = () => {
  const { t } = useTranslation();

  const [handleGetPublicDictionaries] = useGetPublicDictionariesMutation();
  const { dictionaries, dictionariesLoading } = useAppSelector(
    (state) => state.publicDictionaries
  );

  useEffect(() => {
    void handleGetPublicDictionaries({ search: "", page: 1, size: 10 });
  }, []);

  return (
    <section className="flex flex-col w-full py-24 max-xl:py-16 px-20 max-md:px-4">
      <h1 className="text-5xl font-semibold text-center max-xl:text-4xl max-md:text-2xl">
        {t("public_dictionaries.title")}
      </h1>
      <p className="text-xl mt-6 text-muted-foreground text-center max-xl:text-lg max-xl:mt-4 max-md:text-base">
        {t("public_dictionaries.description")}
      </p>
      <PublishedFilter />
      {dictionaries?.data?.length === 0 ? (
        <Published.NotFound />
      ) : (
        <main className="grid grid-cols-3 gap-x-8 gap-y-16 mt-14 max-xl:mt-10 w-full max-xl:justify-center max-xl:flex max-xl:flex-wrap max-xl:px-2 max-xl:grid-cols-2">
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
