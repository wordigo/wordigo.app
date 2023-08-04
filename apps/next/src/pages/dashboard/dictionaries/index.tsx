import { Fragment } from "react";
import { columns } from "@/components/Dashboard/Dictionaries/columns";
import { DataTable } from "@/components/Dashboard/Dictionaries/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionaryDataQuery } from "@/store/dictionary/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Skeleton } from "@wordigo/ui";

export default function DashboardPage() {
  const { data, isLoading } = useGetDictionaryDataQuery("");

  return (
    <Fragment>
      <DashboardLayout>
        <DashboardShell>
          {isLoading ? (
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
            <DataTable columns={columns} data={data.data} label="nav_addDictionary" />
          )}
        </DashboardShell>
      </DashboardLayout>
    </Fragment>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
