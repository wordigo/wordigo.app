import { DictionariesTableShell } from "@/components/Dashboard/Dictionaries/DictionariesTable";
import DashboardLayout from "@/components/Layout/Dashboard";
import DashboardHeaders from "@/components/Layout/Dashboard/Headers";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionariesMutation } from "@/store/dictionaries/api";
import { type GetUserDictionariesType } from "@/store/dictionaries/type";
import { useAppSelector } from "@/utils/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import nextI18nextConfig from "~/next-i18next.config";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
    },
  };
}

const DictionariesPage = () => {
  const router = useRouter();
  const queryFilter = router.query as GetUserDictionariesType;

  const [getDictionaries, { data: response, isLoading }] =
    useGetDictionariesMutation();
  const userDictionaries =
    useAppSelector((state) => state.dictionary.dictionaries) || [];

  useEffect(() => {
    void getDictionaries(queryFilter);
  }, []);

  return (
    <DashboardShell>
      <DashboardHeaders />
      <DictionariesTableShell
        isLoading={isLoading}
        data={userDictionaries}
        pageCount={response?.pagination?.totalPage}
      />
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
