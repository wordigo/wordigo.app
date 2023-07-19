import React from "react";
import Footer from "@/components/Home/Footers/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import { DataTable } from "@/components/Published/Table/data-table";
import PublishedConstan from "@/components/Published/published.constan";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <main className="flex w-full">
        <DataTable data={PublishedConstan} label="TEST" />
      </main>
      <Footer />
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
