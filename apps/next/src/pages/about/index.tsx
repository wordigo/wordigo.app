import About from "@/components/About";
import Contact from "@/components/About/Contact";
import Team from "@/components/About/Team/team";
import Footer from "@/components/Home/Footers/Footer";
import Newsletter from "@/components/Home/Newsletter";
import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

export default function index({ _nextI18Next }: PageProps) {
  return (
    <MainLayout>
      <NextSeo title={_nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common.seo.about_title} />
      <About />
      <Team />
      <Contact />
      <Newsletter />
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
