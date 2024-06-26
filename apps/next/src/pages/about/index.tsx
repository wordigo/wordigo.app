import About from "@/components/Company/About";
import Contact from "@/components/Company/About/Contact";
import Team from "@/components/Company/About/Team/team";
import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";
import nextI18nextConfig from "~/next-i18next.config";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
    },
  };
}

export default function index({ _nextI18Next }: PageProps) {
  return (
    <MainLayout>
      <NextSeo
        title={
          _nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common
            .seo.about_title
        }
      />
      <About />
      <Team />
      <Contact />
    </MainLayout>
  );
}
