import { Fragment, useEffect } from "react";
import { type GetStaticPaths } from "next";
import { useRouter } from "next/router";
import Settings from "@/components/Dashboard/Dictionaries.Settings/index";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetWordDataMutation } from "@/store/word/api";
import { useAppSelector } from "@/utils/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Skeleton } from "@wordigo/ui";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

const DictionariesSettings = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  const [getWordDataMutation, { isLoading }] = useGetWordDataMutation();
  const userDicWords = useAppSelector((state) => state.word.word);

  useEffect(() => {
    void getWordDataMutation(slug);
  }, []);

  return (
    <DashboardShell>
      {isLoading || !userDicWords ? (
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
        <Settings></Settings>
      )}
    </DashboardShell>
  );
};

DictionariesSettings.Layout = () => {
  return (
    <DashboardLayout>
      <DictionariesSettings />
    </DashboardLayout>
  );
};

export default DictionariesSettings.Layout;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
