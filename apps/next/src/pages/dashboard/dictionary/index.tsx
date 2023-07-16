import { Fragment } from "react";
import { columns } from "@/components/Dashboard/Dictionary/data-table/columns";
import { DataTable } from "@/components/Dashboard/Dictionary/data-table/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { api } from "@/libs/trpc";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function DashboardPage() {
  const { data } = api.dictionary.getUserDictionaries.useQuery();

  return (
    <Fragment>
      <DashboardLayout heading="Dictionary">
        <DashboardShell>{data && <DataTable columns={columns} data={data.dictionaries as never} />}</DashboardShell>
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
