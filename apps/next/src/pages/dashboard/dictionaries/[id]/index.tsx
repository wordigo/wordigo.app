import { Fragment, useEffect } from "react";
import { type GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { columns } from "@/components/Dashboard/Words/columns";
import { DataTable } from "@/components/Dashboard/Words/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { api } from "@/libs/trpc";
import useWordStore from "@/stores/Words";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function DashboardPage() {
  //   const data = api.dictionaryWord.addWordToDic.useMutation();
  //   const test = data.mutate({
  //     dictionaryId: "",
  //     wordId: ""
  //   })

  const { wordList, setWordList } = useWordStore((state) => state);
  const router = useRouter();
  const { id } = router.query;

  const { data } = api.dictionary.getDictionaryWords.useQuery({
    dictionaryId: id as string,
  });

  return (
    <Fragment>
      <DashboardLayout heading={data?.data?.dictionary?.title}>
        <DashboardShell>{data && <DataTable columns={columns} data={data} label="Add Words" />}</DashboardShell>
      </DashboardLayout>
    </Fragment>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
