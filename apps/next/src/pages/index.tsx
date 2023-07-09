import FeatureBanner from "@/components/Home/Banner/Banner";
import Footer from "@/components/Home/Footers/Footer";
import HeroContainer from "@/components/Home/Hero/Hero";
import FeatureSections from "@/components/Home/Steps/Steps";
import MainLayout from "@/components/Layout/MainLayout";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <div>
        <HeroContainer></HeroContainer>
      </div>
      <FeatureBanner />
      <FeatureSections />
      <Footer />
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
