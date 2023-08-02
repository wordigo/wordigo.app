import { Fragment, useEffect } from "react";
import { columns } from "@/components/Dashboard/Dictionaries/columns";
import { DataTable } from "@/components/Dashboard/Dictionaries/data-table";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetDictionaryDataQuery } from "@/store/dictionary/api";
import { setDictionary } from "@/store/dictionary/slice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

//Wait for fix type

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { data } = useGetDictionaryDataQuery();
  const dictionaries = useAppSelector((state) => state.dictionary);

  //Fix type Error
  useEffect(() => {
    dispatch(setDictionary(data));
  }, [data]);

  return (
    <Fragment>
      <DashboardLayout>
        <DashboardShell>
          {dictionaries && dictionaries?.dictionary && dictionaries?.dictionary?.data && (
            <DataTable columns={columns} data={dictionaries?.dictionary?.data} label="nav_addDictionary" />
          )}
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
