import useHeaders from "./headers.constant";
import { useRouter } from "next/router";
import React from "react";

const DashboardHeaders = () => {
  return (
    <div>
      <DashboardHeaders.Item />
    </div>
  );
};

const DashboardButton = () => {
  return (
    <div>
      <DashboardHeaders.Button />
    </div>
  );
};

DashboardHeaders.Item = () => {
  const router = useRouter();
  const params = router.pathname;
  const headers = useHeaders(params);
  return (
    <>
      {headers.map((item, index) => (
        <main key={index}>
          <h1 className="text-3xl font-semibold dark:text-white text-[#101828]">{item.title}</h1>
          <p className="font-normal dark:text-gray-300 text-[#475467]">{item.description}</p>
        </main>
      ))}
    </>
  );
};

DashboardHeaders.Button = () => {
  const router = useRouter();
  const params = router.pathname;
  const headers = useHeaders(params);
  return (
    <>
      {headers.map((item, index) => (
        <main key={index} className="flex items-center">
          <div className="mr-2">{item.components}</div>
          <div>{item.child_components}</div>
        </main>
      ))}
    </>
  );
};

export { DashboardHeaders as default, DashboardButton };
