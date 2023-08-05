/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Fragment, useEffect } from "react";
import { type GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { columns } from "@/components/Dashboard/Words/columns";
import { DataTable } from "@/components/Dashboard/Words/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetWordDataMutation } from "@/store/word/api";
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

const DictionariWordPage = () => {
  const router = useRouter();
  const { id } = router.query as any;

  const [getWordDataMutation, { isLoading }] = useGetWordDataMutation();
  const userDicWords = useAppSelector((state) => state.word.word);

  useEffect(() => {
    void getWordDataMutation(id);
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
        <DataTable columns={columns} data={userDicWords?.words as never} label="nav_addWord" />
      )}
    </DashboardShell>
  );
};

DictionariWordPage.Layout = () => {
  return (
    <DashboardLayout>
      <DictionariWordPage />
    </DashboardLayout>
  );
};

export default DictionariWordPage.Layout;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
