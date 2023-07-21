import { Fragment } from "react";
import { useRouter } from "next/router";
import { columns } from "@/components/Dashboard/Words/columns";
import { DataTable } from "@/components/Dashboard/Words/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { api } from "@/libs/trpc";

export default function DashboardPage() {
  //   const data = api.dictionaryWord.addWordToDic.useMutation();
  //   const test = data.mutate({
  //     dictionaryId: "",
  //     wordId: ""
  //   })

  const router = useRouter();
  const { id } = router.query;

  const { data } = api.dictionary.getDictionaryWords.useQuery({
    dictionaryId: id as string,
  });

  return (
    <Fragment>
      <DashboardLayout heading={"Dictionary"} query={data?.data?.dictionary?.title}>
        <DashboardShell>{data && <DataTable columns={columns} data={data?.data?.dictionary} label="Add Words" />}</DashboardShell>
      </DashboardLayout>
    </Fragment>
  );
}