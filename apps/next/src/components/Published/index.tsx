import PublishedFilter from "./Filter";
import PublishedItem from "./PublishedItem";
import { useGetPublicDictionariesMutation } from "@/store/publicDictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { useEffect } from "react";

const Published = () => {
  const currentDate = new Date();
  const date = currentDate.toISOString().split("T")[0];
  const time = currentDate.toTimeString().split(" ")[0];
  const uniqueId = `${date}_${time}`;

  const [handleGetPublicDictionaries] = useGetPublicDictionariesMutation();
  const publicDictionaries = useAppSelector(
    (state) => state.publicDictionaries.dictionaries
  );

  useEffect(() => {
    handleGetPublicDictionaries({ page: 1, size: 10 });
  }, []);

  return (
    <section className="flex flex-col w-full py-24 max-xl:py-16 px-20 max-md:px-4">
      <h1 className="text-5xl font-semibold text-center max-xl:text-4xl max-md:text-2xl">
        Learn from published dictionaries
      </h1>
      <p className="text-xl mt-6 text-muted-foreground text-center max-xl:text-lg max-xl:mt-4 max-md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ipsam
        possimus, facere fuga ratione aut.
      </p>
      <PublishedFilter />
      <main className="max-w-[1320px] m-auto">
        <main className="flex flex-wrap gap-4">
          {publicDictionaries?.data?.map((dictionary) => (
            <PublishedItem key={uniqueId} {...dictionary} />
          ))}
        </main>
      </main>
    </section>
  );
};

export default Published;
