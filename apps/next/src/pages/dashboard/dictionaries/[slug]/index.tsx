import { DictionarayWordsTable } from "@/components/Dashboard/DictionaryDetail/WordsTable";
import DashboardLayout from "@/components/Layout/Dashboard";
import DashboardHeaders from "@/components/Layout/Dashboard/Headers";
import DashboardHeaderLoader from "@/components/Layout/Dashboard/Headers/header.loader";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionaryWordsMutation } from "@/store/dictionarayWord/api";
import { type GetUserDictionaryWordsType } from "@/store/dictionarayWord/type";
import { useAppSelector } from "@/utils/hooks";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import nextI18nextConfig from "~/next-i18next.config";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
    },
  };
}

const DictionaryWordPage = () => {
  const router = useRouter();
  const queryFilter = router.query as unknown as GetUserDictionaryWordsType;

  const [getDictionaryWordMutation, { status, isLoading }] =
    useGetDictionaryWordsMutation();

  const dictionaryDetail = useAppSelector(
    (state) => state.dictionaryWord.dictionaryWords
  );

  useEffect(() => {
    void getDictionaryWordMutation(queryFilter);
  }, []);

  return (
    <DashboardShell>
      {isLoading ? <DashboardHeaderLoader /> : <DashboardHeaders />}
      <DictionarayWordsTable
        data={dictionaryDetail?.words}
        pageCount={
          Number(dictionaryDetail?.numberOfWords / 10).toFixed(0) as never
        }
        isLoading={isLoading || status !== QueryStatus.fulfilled}
      />
    </DashboardShell>
  );
};

DictionaryWordPage.Layout = () => {
  return (
    <DashboardLayout>
      <DictionaryWordPage />
    </DashboardLayout>
  );
};

export default DictionaryWordPage.Layout;
