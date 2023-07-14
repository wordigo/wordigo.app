import FeatureBanner from "@/components/Home/Banner"
import Comment from "@/components/Home/Comments"
import FeatureSections from "@/components/Home/FeatureSections"
import Footers from "@/components/Home/Footers"
import HeroContainer from "@/components/Home/Hero"
import MainLayout from "@/components/Layout/MainLayout"
import { api } from '@/libs/trpc'
import { i18n } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useEffect } from 'react'

export default function index() {
  const addingWord = api.word.addWord.useMutation()
  const addingDic = api.dictionary.addDictionary.useMutation()

  useEffect(()=>{
    addingWord.mutate({
      text:'test4',
      translatedText:'deneme4',
      targetLanguage:'en',
      nativeLanguage:'tr',
      dictionaryId:'clk24mii60004p7xk9u6344mm'
    })

    // addingDic.mutate({
    //   title:'testDic',
    //   published:false
    // })
  },[])

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
