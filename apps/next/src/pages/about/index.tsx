import React from "react";
import About from "@/components/About";
import Contact from "@/components/About/Contact";
import Team from "@/components/About/Team/team";
import Footer from "@/components/Home/Footers/Footer";
import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-32">
        <About />
        <Team />
        <Contact />
      </div>
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
