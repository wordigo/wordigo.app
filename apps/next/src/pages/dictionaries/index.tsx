import MainLayout from "@/components/Layout/MainLayout";
import { DataTable } from "@/components/Published/Table/data-table";
import PublishedConstan from "@/components/Published/published.constan";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

export default function index({ _nextI18Next }: PageProps) {
  return (
    <MainLayout>
      <NextSeo title={_nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common.seo_dictionaries_title} />
      <DataTable data={PublishedConstan} label="" />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
