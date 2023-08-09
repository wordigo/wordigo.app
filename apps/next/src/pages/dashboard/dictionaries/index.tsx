import { useEffect } from "react";
import { columns } from "@/components/Dashboard/Dictionaries/columns";
import { DataTable } from "@/components/Dashboard/Dictionaries/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetUserDictionariesMutation } from "@/store/dictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

const DictionariesPage = () => {
  const [getUserDictionaries, { isLoading }] = useGetUserDictionariesMutation();
  const userDictionaries = useAppSelector((state) => state.dictionary.dictionaries) || [];

  useEffect(() => {
    void getUserDictionaries("");
  }, []);

  return (
    <DashboardShell>
      <DataTable columns={columns} data={userDictionaries} isLoading={isLoading} />
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
