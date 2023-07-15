import React from "react";
import Wordigo from "@/components/About";
import Team from "@/components/About/Team";
import Footer from "@/components/Home/Footers/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <Wordigo />
      <Team />
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
