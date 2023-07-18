import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import { columns } from "@/components/Dashboard/Words/columns";
import { DataTable } from "@/components/Dashboard/Words/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { api } from "@/libs/trpc";
import useDictionaryStore from "@/stores/Dictionary";

export default function DashboardPage() {
  //   const data = api.dictionaryWord.addWordToDic.useMutation();
  //   const test = data.mutate({
  //     dictionaryId: "",
  //     wordId: ""
  //   })

  const router = useRouter();
  const { id } = router.query;

  const { data } = api.dictionary.getDictionaryWords.useQuery({
    dictionaryId: "clk8ba7g2000tukjoiv58901v",
  });

  useEffect(() => {
    console.log("TEST", data);
  }, []);

  const { dictionaryList } = useDictionaryStore((state) => state);

  return (
    <Fragment>
      <DashboardLayout heading={id}>
        <DashboardShell>
          <DataTable columns={columns} data={dictionaryList} label="Add Words" />
        </DashboardShell>
      </DashboardLayout>
    </Fragment>
  );
}
