import Settings from "@/components/Dashboard/Dictionaries.Settings/index";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionaryDetailMutation } from "@/store/dictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { Skeleton } from "@wordigo/ui";
import { type GetStaticPaths } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";

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

  const [getDictionaryDetail, { isLoading }] = useGetDictionaryDetailMutation();
  const dictionaryDetail = useAppSelector(
    (state) => state.dictionary.dictionaryDetail
  );

  useEffect(() => {
    void getDictionaryDetail({ slug });
  }, []);

  return (
    <DashboardShell>
      {isLoading || !dictionaryDetail ? (
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
        <Settings />
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
