import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { ChevronRight } from "lucide-react";

import { cn } from "@wordigo/ui/lib/utils";

const DynamicRoute = () => {
  const router = useRouter();
  const fullPath = router.asPath; // "/dashboard/dictionaries"

  const pathParts = fullPath.split("/");

  return (
    <div className="flex items-center text-[14px] font-semibol">
      {pathParts.map((part, index) => (
        <DynamicRoute.Item key={index} index={index} item={part} active={index === pathParts.length - 1} />
      ))}
    </div>
  );
};

DynamicRoute.Item = ({ index, item, active }) => {
  const name = item.charAt(0).toUpperCase() + item.slice(1);

  const classes = cn("text-black p-1 rounded", active ? "bg-gray-100" : "");

  return (
    <Fragment>
      {index > 1 && <ChevronRight />}
      <p className={classes}>{name}</p>
    </Fragment>
  );
};

export default DynamicRoute;
