import { Fragment } from "react";
import { type GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { columns } from "@/components/Dashboard/Words/columns";
import { DataTable } from "@/components/Dashboard/Words/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetWordDataQuery } from "@/store/word/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";





export default function DashboardPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetWordDataQuery(id);
  return (
    <Fragment>
      <DashboardLayout>
        <DashboardShell>{data && <DataTable columns={columns} data={data?.data?.words} label="nav_addWord" />}</DashboardShell>
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