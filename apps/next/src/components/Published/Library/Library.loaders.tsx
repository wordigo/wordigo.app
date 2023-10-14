import { Skeleton } from "@wordigo/ui";

export const ActionsLoader = () => (
  <div className="flex items-center justify-between mt-24 max-xl:mt-12 max-md:flex-col">
    <span className="flex flex-col w-1/3">
      <div className="text-4xl font-semibold max-lg:text-3xl w-full">
        <Skeleton className="w-32 h-12 max-lg:w-24 max-lg:h-10" />
      </div>
      <Skeleton className="w-full h-6 mt-5 max-lg:h-4 max-lg:mt-4" />
    </span>
    <div className="grid grid-flow-col gap-x-3 max-md:mt-4">
      <div>
        <Skeleton className="w-8 h-8 rounded" />
      </div>
      <div>
        <Skeleton className="w-8 h-8 rounded" />
      </div>
      <div>
        <Skeleton className="w-8 h-8 rounded" />
      </div>
      <div className="flex items-center">
        <Skeleton className="w-24 h-8" />
        <Skeleton className="w-32 h-6 ml-2 hidden max-xl:block" />
      </div>
    </div>
  </div>
);

export const DetailLoader = () => {
  return (
    <div className="flex items-center justify-between space-x-16 max-xl:flex-col max-xl:space-x-3 max-md:mr-3">
      <div className="flex flex-col my-auto">
        <Skeleton className="w-14 h-6" />
        <h1 className="text-6xl font-semibold mt-4 max-xl:text-3xl">
          <Skeleton className="w-full h-12 mt-4 max-xl:h-8" />
        </h1>
        <p className="text-xl text-muted-foreground mt-6 max-xl:mt-4 max-xl:text-lg">
          <Skeleton className="w-full h-6 mt-6 max-xl:h-4 max-xl:mt-4" />
        </p>
        <div className="grid grid-cols-3 gap-x-10  gap-y-6 mt-12 items-center max-xl:mt-6 max-md:grid-cols-1 max-md:gap-y-3">
          <div className="flex items-center">
            <Skeleton className="w-12 h-12 p-3 rounded-[0.625rem] mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
            <Skeleton className="w-32 h-6 max-lg:w-24 max-lg:h-4" />
          </div>
          <div className="flex items-center">
            <Skeleton className="w-12 h-12 p-3 rounded-[0.625rem]  mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
            <Skeleton className="w-32 h-6 max-lg:w-24 max-lg:h-4" />
          </div>
          <div className="flex items-center">
            <Skeleton className="w-12 h-12 p-3 rounded-[0.625rem] mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
            <Skeleton className="w-32 h-6 max-lg:w-24 max-lg:h-4" />
          </div>
        </div>
        <div className="flex mt-12 items-center max-xl:mt-6">
          <div className="relative h-14 w-14 mr-4">
            <Skeleton className="rounded-full w-14 h-14" />
          </div>
          <div className="flex flex-col">
            <Skeleton className="w-32 h-6" />
            <Skeleton className="w-40 h-4 mt-2" />
          </div>
        </div>
      </div>
      <div className="relative aspect-square w-[480px] h-[340px] max-xl:mt-6 max-md:w-[350px] max-md:h-[240px]">
        <Skeleton className="rounded-2xl w-full h-full" />
      </div>
    </div>
  );
};

export const WordsItemLoader = () => (
  <div className="grid grid-cols-3 mt-20 gap-y-6 gap-x-6 max-xl:mt-12 max-xl:gap-y-4 max-xl:gap-x-4 max-xl:grid-cols-2 max-md:grid-cols-1">
    {Array.from({ length: 20 }).map((_, index) => (
      <div
        key={index}
        className="p-6 border rounded-[0.5rem] flex items-start justify-between"
      >
        <div className="flex flex-col">
          <Skeleton className="w-16 h-4 mt-1" />
          <Skeleton className="w-16 h-4 mt-1" />
        </div>
        <div className="flex">
          <Skeleton className="w-5 h-5 rounded-full mr-1" />
          <Skeleton className="w-5 h-5 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);
