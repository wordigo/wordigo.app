import { Skeleton } from "@wordigo/ui";
import { Fragment } from "react";

const PublishedLoader = () => {
  return (
    <Fragment>
      {new Array(6).fill(0).map((_, index) => (
        <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33%-18.5px)] max-w-sm sm:max-w-none" key={index}>
          <Skeleton className="w-full h-60" />
          <div className="mt-4 flex flex-col gap-y-2">
            <Skeleton className="w-full h-7 rounded-sm" />
            <Skeleton className="w-full h-3 rounded-sm" />
          </div>
          <div className="mt-3 flex items-center justify-center gap-x-3">
            <Skeleton className="w-7 h-7 rounded-lg" />
            <Skeleton className="w-full h-6" />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default PublishedLoader;
