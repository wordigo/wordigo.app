import FAQ from "@/components/FAQ";
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
            .seo.faq_title
        }
        openGraph={{
          title:
            _nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common
              .seo.faq_title,
        }}
      />
      <FAQ />
    </MainLayout>
  );
}
