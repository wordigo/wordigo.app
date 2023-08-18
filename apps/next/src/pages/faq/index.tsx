import React from 'react'
import MainLayout from '@/components/Layout/MainLayout'
import FAQ from '@/components/FAQ'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Newsletter from "@/components/Home/Newsletter";
import Footer from "@/components/Home/Footers";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

export default function index() {
  return (
    <MainLayout>
      <FAQ />
      <Newsletter />
      <Footer />
    </MainLayout>
  )
}
