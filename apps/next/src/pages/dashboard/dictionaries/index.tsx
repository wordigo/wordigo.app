import { DictionariesTableShell } from "@/components/Dashboard/Dictionaries/DictionariesTable";
import DashboardLayout from "@/components/Layout/Dashboard";
import DashboardHeaders from "@/components/Layout/Dashboard/Headers";
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
  const [getDictionaries, { data }] = useGetDictionariesMutation();
  const userDictionaries =
    useAppSelector((state) => state.dictionary.dictionaries) || [];

  useEffect(() => {
    void getDictionaries("");
  }, []);

  return (
    <DashboardShell>
      <DashboardHeaders />
      <DictionariesTableShell data={userDictionaries} />
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
