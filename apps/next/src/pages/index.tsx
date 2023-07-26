import FeatureBanner from "@/components/Home/Banner";
import CTASection from "@/components/Home/CTASection";
import Comment from "@/components/Home/Comments";
import FeatureSections from "@/components/Home/FeatureSections";
import Footers from "@/components/Home/Footers";
import NewHeroSection from "@/components/Home/Hero/NewHeroSection";
import MainLayout from "@/components/Layout/MainLayout";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <NewHeroSection />
      <FeatureBanner />
      <FeatureSections />
      <Comment />
      <CTASection />
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
