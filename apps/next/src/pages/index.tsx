import FeatureBanner from "@/components/Home/Banner";
import Comment from "@/components/Home/Comments";
import FAQSection from "@/components/Home/FAQSection";
import FeatureSections from "@/components/Home/FeatureSections";
import Footers from "@/components/Home/Footers";
import NewHeroSection from "@/components/Home/Hero/NewHeroSection";
import Newsletter from "@/components/Home/Newsletter";
import Pricing from "@/components/Home/PricingSection";
import MainLayout from "@/components/Layout/MainLayout";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { type PageProps } from "types/global";

export default function index({ _nextI18Next }: PageProps) {
  return (
    <MainLayout>
      <NextSeo title={_nextI18Next?.initialI18nStore[_nextI18Next?.initialLocale]?.common.seo.home_title} />
      <NewHeroSection />
      <FeatureBanner />
      <FeatureSections />
      <Comment />
      <Pricing />
      <FAQSection />
      {/* <CTASection /> */}
      <Newsletter />
      <Footers />
    </MainLayout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  if (process.env.NODE_ENV === "development") {
    await i18n?.reloadResources();
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
