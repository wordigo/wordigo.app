import FeatureBanner from "@/components/Home/Banner";
import Comment from "@/components/Home/Comments";
import FAQSection from "@/components/Home/FAQSection";
import FeatureSections from "@/components/Home/FeatureSections";
import Footers from "@/components/Home/Footers";
import NewHeroSection from "@/components/Home/Hero/NewHeroSection";
import Newsletter from "@/components/Home/Newsletter";
import MainLayout from "@/components/Layout/MainLayout";
import { useTargetElement } from "@/hooks/useTargetElement";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

export default function index({ _nextI18Next }: PageProps) {
  useTargetElement();

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
      <Newsletter />
      <Footers />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: { ...(await serverSideTranslations(locale, ["common", "zod"])) },
  };
}
