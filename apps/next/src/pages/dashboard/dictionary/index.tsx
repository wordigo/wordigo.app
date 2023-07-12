import { useEffect, useState } from "react";
import { CreateDictionary } from "@/components/Dashboard/Dictionary/CreateDictionary";
import { columns } from "@/components/Dashboard/Dictionary/data-table/columns";
import { DataTable } from "@/components/Dashboard/Dictionary/data-table/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardHeader } from "@/components/Layout/Dashboard/Header";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { api } from "@/libs/trpc";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function DashboardPage() {
  // //const deneme = api.dictionary.addDictionary.useMutation()
  // //deneme.mutation

  //Fix Type!
  const [data, setData] = useState<any>();

  const dataQuery = api.dictionary.getUserDictionaries.useQuery();

  useEffect(() => {
    if (dataQuery.data) {
      setData(dataQuery.data.data);
    }
  }, [dataQuery.data]);

  return (
    <>
      <DashboardLayout heading="Dictionary">
        <DashboardShell>
          <DashboardHeader>
            <DataTable columns={columns} data={data} />
          </DashboardHeader>
        </DashboardShell>
      </DashboardLayout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
