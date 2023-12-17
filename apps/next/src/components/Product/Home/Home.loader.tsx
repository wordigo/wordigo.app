import { Skeleton } from "@wordigo/ui";
import { Fragment } from "react";

const DashboardLoader = () => {
  return (
    <Fragment>
      {Array.from({ length: 4 }).map((item) => (
        <Skeleton className="flex-1 flex items-center space-x-4 h-24"></Skeleton>
      ))}
    </Fragment>
  );
};

export default DashboardLoader;
