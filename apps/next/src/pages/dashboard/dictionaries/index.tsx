import { Fragment, useEffect } from "react";
import { columns } from "@/components/Dashboard/Dictionaries/columns";
import { DataTable } from "@/components/Dashboard/Dictionaries/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { api } from "@/libs/trpc";
import { useGetDictionaryDataQuery } from "@/store/dictionary/api";
import useDictionaryStore from "@/stores/Dictionary";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSelector } from "react-redux";

interface IData {
  success: boolean;
  data: any;
  message: string;
}

export default function DashboardPage() {
  const { data: dictionary } = api.dictionary.getUserDictionaries.useQuery() as unknown as IData;
  const { dictionaryList, setDictionaryList } = useDictionaryStore((state) => state);

  const { data, isLoading, error } = useGetDictionaryDataQuery();
  console.log("data", data);
  console.log(isLoading);
  console.log(error);

  //Fix type Error
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setDictionaryList(dictionary?.data || []);
  }, [dictionary, setDictionaryList]);

  return (
    <Fragment>
      <DashboardLayout>
        <DashboardShell>
          <DataTable columns={columns} data={dictionaryList} label="nav_addDictionary" />
        </DashboardShell>
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
