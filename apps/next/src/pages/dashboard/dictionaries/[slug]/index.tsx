import { DictionarayWordsTable } from "@/components/Dashboard/DictionaryDetail/WordsTable";
import DashboardLayout from "@/components/Layout/Dashboard";
import DashboardHeaders from "@/components/Layout/Dashboard/Headers";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionaryWordsMutation } from "@/store/dictionarayWord/api";
import { useAppSelector } from "@/utils/hooks";
import { type GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

const DictionaryWordPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  const [getDictionaryWordMutation, { status, isLoading }] =
    useGetDictionaryWordsMutation();

  const dictionaryDetail = useAppSelector(
    (state) => state.dictionaryWord.dictionaryWords
  );

  useEffect(() => {
    void getDictionaryWordMutation(slug);
  }, []);

  return (
    <DashboardShell>
      <DashboardHeaders />
      <DictionarayWordsTable
        data={dictionaryDetail?.words}
        pageCount={dictionaryDetail?.numberOfWords}
        isLoading={isLoading || status !== "fulfilled"}
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
