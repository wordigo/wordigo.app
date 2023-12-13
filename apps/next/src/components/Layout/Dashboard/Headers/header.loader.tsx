import { Skeleton } from "@wordigo/ui";
import { Fragment } from "react";

const DashboardHeaderLoader = () => {
  return (
    <Fragment>
      <Skeleton className="w-1/3 h-10 animate-pulse" />
      <Skeleton className="w-1/2 h-8 animate-pulse" />
    </Fragment>
  );
};

export default DashboardHeaderLoader;
