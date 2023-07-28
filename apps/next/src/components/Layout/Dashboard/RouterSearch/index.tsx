import React from "react";
import { useRouter } from "next/router";
import { ChevronRight } from "lucide-react";

const DynamicRoute = () => {
  const router = useRouter();
  const fullPath = router.pathname; // "/dashboard/dictionaries"
  const pathParts = fullPath.split("/");
  const { id } = router.query;

  return (
    <div className="flex items-center text-[14px] font-semibol">
      {pathParts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 1 && <ChevronRight />}
          {index < 3 ? <p>{part.charAt(0).toUpperCase() + part.slice(1)}</p> : <p>{id}</p>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default DynamicRoute;
