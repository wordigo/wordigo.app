import FeatureBanner from "@/components/Company/Banner";
import Comment from "@/components/Company/Comments";
import FAQSection from "@/components/Company/FAQSection";
import FeatureSections from "@/components/Company/FeatureSections";
import NewHeroSection from "@/components/Company/Hero/HeroSection";
import MainLayout from "@/components/Layout/MainLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";
import nextI18nextConfig from "~/next-i18next.config";

export default function index({ _nextI18Next }: PageProps) {
  const seoTitle =
    _nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale || "en"]?.common
      .seo.home_title;

  return (
    <MainLayout>
      <NextSeo title={seoTitle} titleTemplate={seoTitle} />
      <NewHeroSection />
      <FeatureBanner />
      <FeatureSections />
      <Comment />
      <FAQSection />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, nextI18nextConfig.ns)) },
  };
}
