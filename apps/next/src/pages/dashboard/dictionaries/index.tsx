import { Fragment, useEffect } from "react";
import { columns } from "@/components/Dashboard/Dictionaries/columns";
import { DataTable } from "@/components/Dashboard/Dictionaries/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetUserDictionariesMutation } from "@/store/dictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Skeleton } from "@wordigo/ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

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
          <div className="flex gap-y-2 flex-col rounded">
            {new Array(6).fill(1).map((item) => (
              <div key={item}>
                <Skeleton className="w-full h-10" />
              </div>
            ))}
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
    <DashboardLayout Button={"dictionaries"}>
      <DictionariesPage />
    </DashboardLayout>
  );
};

export default DictionariesPage.Layout;
