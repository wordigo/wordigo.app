import MainLayout from "@/components/Layout/MainLayout";
import Section2_Container from "@/components/home/Banner/Banner";
import Footer from "@/components/home/Footers/Footer";
import Section_1 from "@/components/home/Hero/Hero_Container";
import Section3_Container from "@/components/home/Steps/Steps";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  return (
    <MainLayout>
      <div>
        <Section_1></Section_1>
      </div>
      <Section2_Container></Section2_Container>
      <Section3_Container></Section3_Container>
      <Footer></Footer>
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
