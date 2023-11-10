import useHeaders from "./headers.constant";
import { useRouter } from "next/router";
import { Fragment } from "react";

const HeaderItem = ({ title, description }) => (
  <main>
    <h1 className="text-3xl font-semibold dark:text-white text-[#101828]">
      {title}
    </h1>
    <p className="font-normal dark:text-gray-300 text-[#475467]">
      {description}
    </p>
  </main>
);

const DashboardHeaders = () => {
  const router = useRouter();
  const headers = useHeaders(router.pathname);

  return (
    <div className="flex justify-between items-center">
      {headers.map((item, index) => (
        <HeaderItem key={index} {...item} />
      ))}
      <DashboardButtons />
    </div>
  );
};

const DashboardButtons = () => {
  const router = useRouter();
  const headers = useHeaders(router.pathname);

  return (
    <div className="flex flex-row gap-x-2">
      {headers.map((item) =>
        item?.components?.map((component, index) => (
          <Fragment key={index}>{component}</Fragment>
        ))
      )}
    </div>
  );
};

export default DashboardHeaders;
