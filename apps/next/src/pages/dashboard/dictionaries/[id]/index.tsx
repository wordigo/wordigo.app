import { Fragment } from "react";
import { useRouter } from "next/router";
import { columns } from "@/components/Dashboard/Words/columns";
import { DataTable } from "@/components/Dashboard/Words/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetWordDataQuery } from "@/store/word/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const DictionaryPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetWordDataQuery(id);

  return <DashboardShell>{data && <DataTable columns={columns} data={data?.data?.words} label="nav_addWord" />}</DashboardShell>;
};

DictionaryPage.Layout = () => {
  return (
    <DashboardLayout>
      <DictionaryPage />
    </DashboardLayout>
  );
};

export default DictionaryPage.Layout;

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
