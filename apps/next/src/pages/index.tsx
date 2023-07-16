import { useEffect } from "react";
import FeatureBanner from "@/components/Home/Banner";
import Comment from "@/components/Home/Comments";
import FeatureSections from "@/components/Home/FeatureSections";
import Footers from "@/components/Home/Footers";
import HeroContainer from "@/components/Home/Hero";
import MainLayout from "@/components/Layout/MainLayout";
import { api } from "@/libs/trpc";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function index() {
  const addingWord = api.userWord.removeUserWord.useMutation();

  useEffect(() => {
    addingWord.mutate({
      wordId: "clk59s6vn000h8pbn6e7pf5w5",
    });

    // addingDic.mutate({
    //   title:'testDic',
    //   published:false
    // })
  }, []);

  return (
    <MainLayout>
      <div>
        <HeroContainer />
      </div>
      <FeatureBanner />
      <FeatureSections />
      <Comment />
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
