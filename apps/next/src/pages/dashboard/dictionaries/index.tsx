import { TasksTableShell } from "@/components/Dashboard/Dictionaries/TestTable";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionariesMutation } from "@/store/dictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

const DictionariesPage = () => {
  const [getDictionaries, { isLoading }] = useGetDictionariesMutation();
  const userDictionaries =
    useAppSelector((state) => state.dictionary.dictionaries) || [];

  useEffect(() => {
    void getDictionaries("");
  }, []);

  return (
    <DashboardShell>
      {/* <DataTable
        columns={columns}
        data={userDictionaries}
        isLoading={isLoading}
      /> */}
      <TasksTableShell data={userDictionaries} pageCount={10} />
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
