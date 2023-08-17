import React from "react";
import { type GetStaticPaths } from "next";
import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";
import { Rating } from "@/components/Published/Rating";
import { Book, Copy, Hash, Heart, Languages, Link, Star, Volume2 } from "lucide-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ReactCountryFlag from "react-country-flag";

import { Badge, Button } from "@wordigo/ui";

import ArrowRightLeft from "../../../components/Published/WordsPage/ArrowRightLeft";
import WordPageConstants from "../../../components/Published/WordsPage/id.constants";

export default function index() {
  return (
    <MainLayout>
      <section className="flex w-full flex-col px-20 py-24 pt-16 max-xl:py-16 max-md:px-4">
        <div className="flex items-center justify-between space-x-16 max-xl:flex-col max-xl:space-x-3 max-md:mr-3">
          <div className="flex flex-col my-auto">
            <Badge className="text-sm font-medium px-2.5 py-1 w-fit" variant="outline">
              <ReactCountryFlag
                svg
                countryCode={WordPageConstants.sourceLanguage}
                style={{
                  width: "1rem",
                  height: "1rem",
                  marginRight: "0.5rem",
                  aspectRatio: "1 / 1",
                  borderRadius: "999rem",
                  objectFit: "cover",
                }}
              />
              <ArrowRightLeft className={"w-4 h-4 mr-2"} />
              <ReactCountryFlag
                svg
                countryCode={WordPageConstants.targetLanguage}
                style={{
                  width: "1rem",
                  height: "1rem",
                  aspectRatio: "1 / 1",
                  borderRadius: "999rem",
                  objectFit: "cover",
                }}
              />
            </Badge>
            <h1 className="text-6xl font-semibold mt-4 max-xl:text-3xl">{WordPageConstants.title}</h1>
            <p className="text-xl text-muted-foreground mt-6 max-xl:mt-4 max-xl:text-lg">{WordPageConstants.description}</p>
            <div className="grid grid-cols-3 gap-y-6 mt-12 items-center max-xl:mt-6 max-md:grid-cols-1 max-md:gap-y-3">
              <div className="flex items-center">
                <Star className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                <span className="text-xl font-semibold max-lg:text-lg">{WordPageConstants.rating} Rating</span>
              </div>
              <div className="flex items-center">
                <Hash className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                <span className="text-xl font-semibold max-lg:text-lg">{WordPageConstants.wordsLength} Words</span>
              </div>
              <div className="flex items-center">
                <Languages className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                <span className="text-xl font-semibold max-lg:text-lg">{WordPageConstants.level} Level</span>
              </div>
            </div>
            <div className="flex mt-12 items-center max-xl:mt-6">
              <div className="relative h-14 w-14 mr-4">
                <Image src={WordPageConstants.user.profilAvatar} fill alt="" className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{WordPageConstants.user.name}</span>
                <span className="text-base text-muted-foreground">Published {WordPageConstants.createdAt}</span>
              </div>
            </div>
          </div>
          <div className="relative aspect-square w-[480px] h-[340px] max-xl:mt-6 max-md:w-[350px] max-md:h-[240px]">
            <Image src={WordPageConstants.src} alt="" fill className="rounded-2xl object-cover" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-24 max-xl:mt-12 max-md:flex-col">
          <span className="flex flex-col">
            <h2 className="text-4xl font-semibold max-lg:text-3xl">Words</h2>
            <p className="text-xl text-muted-foreground mt-5 max-lg:text-lg max-lg:mt-4">Learn the meanings of words, listen and share with others.</p>
          </span>
          <div className="grid grid-flow-col gap-x-3 max-md:mt-4">
            <Button type="button" variant="outline" size="icon">
              <Link className="h-5 w-5" />
            </Button>
            <Rating />
            <Button type="button" variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button type="button" variant="default" className="max-xl:px-3">
              <Book className="h-5 w-5 xl:mr-2" />
              <h1 className="max-xl:hidden">Copy Dictionary</h1>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20 gap-y-6 gap-x-6 max-xl:mt-12 max-xl:gap-y-4 max-xl:gap-x-4 max-xl:grid-cols-2 max-md:grid-cols-1">
          {WordPageConstants.words.map(({ word, translatedWord }, index) => (
            <WordCard key={index} word={word} translatedWord={translatedWord} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

const WordCard = ({ word, translatedWord }) => {
  return (
    <div className="p-6 border rounded-[0.5rem] hover:border-foreground flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium">{word}</span>
        <span className="text-sm text-muted-foreground">{translatedWord}</span>
      </div>
      <div className="flex">
        <Button variant="ghost" size="icon" className="mr-1">
          <Volume2 className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Copy className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
