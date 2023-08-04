import { Fragment, useEffect } from "react";
import { columns } from "@/components/Dashboard/Dictionaries/columns";
import { DataTable } from "@/components/Dashboard/Dictionaries/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetUserDictionariesMutation } from "@/store/dictionary/api";
import { useAppSelector } from "@/utils/hooks";

import { Skeleton } from "@wordigo/ui";

const DictionariesPage = () => {
  const [getUserDictionaries, { isLoading }] = useGetUserDictionariesMutation();
  const userDictionaries = useAppSelector((state) => state.dictionary.dictionaries);

  useEffect(() => {
    void getUserDictionaries("");
  }, []);

  return (
    <DashboardShell>
      {isLoading || !userDictionaries ? (
        <Fragment>
          <div className="flex gap-y-4 flex-col bg-gray-50 rounded">
            <div className="h-10 flex">
              <Skeleton className="w-full h-10 rounded-none" />
              <Skeleton className="w-full h-10 rounded-none" />
              <Skeleton className="w-full h-10 rounded-none" />
              <Skeleton className="w-full h-10 rounded-none" />
            </div>
            {new Array(6).fill(1).map((item) => (
              <div key={item} className="h-10 flex gap-x-4">
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-x-2">
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
            <Skeleton className="w-8 h-8" />
          </div>
        </Fragment>
      ) : (
        <DataTable columns={columns} data={userDictionaries} label="nav_addDictionary" />
      )}
    </DashboardShell>
  );
};

DictionariesPage.Layout = () => {
  return (
    <DashboardLayout>
      <DictionariesPage />
    </DashboardLayout>
  );
};

export default DictionariesPage.Layout;
