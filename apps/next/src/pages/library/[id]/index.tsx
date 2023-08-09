import React from "react";
import { type GetStaticPaths } from "next";
import Image from "next/image";
import MainLayout from "@/components/Layout/MainLayout";
import { Book, Copy, Hash, Heart, Languages, Link, Star, Volume2 } from "lucide-react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ReactCountryFlag from "react-country-flag";

import { Badge, Button } from "@wordigo/ui";

import ArrowRightLeft from "../../../components/Published/WordsPage/ArrowRightLeft";
import WordPageConstants from "../../../components/Published/WordsPage/id.constants";

export default function index() {
  return (
    <MainLayout>
      <section className="flex w-full flex-col px-20 py-24 pt-16">
        <div className="grid grid-cols-2 gap-x-16">
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
            <h1 className="text-6xl font-semibold mt-4">{WordPageConstants.title}</h1>
            <p className="text-xl text-muted-foreground mt-6">{WordPageConstants.description}</p>
            <div className="grid grid-cols-3 gap-y-6 mt-12 items-center">
              <div className="flex items-center">
                <Star className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4" />
                <span className="text-xl font-semibold">{WordPageConstants.rating} Rating</span>
              </div>
              <div className="flex items-center">
                <Hash className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4" />
                <span className="text-xl font-semibold">{WordPageConstants.wordsLength} Words</span>
              </div>
              <div className="flex items-center">
                <Languages className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4" />
                <span className="text-xl font-semibold">{WordPageConstants.level} Level</span>
              </div>
            </div>
            <div className="flex mt-12 items-center">
              <div className="relative h-14 w-14 mr-4">
                <Image src={WordPageConstants.user.profilAvatar} fill alt="" className="rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">{WordPageConstants.user.name}</span>
                <span className="text-base text-muted-foreground">Published {WordPageConstants.createdAt}</span>
              </div>
            </div>
          </div>
          <div className="h-[40rem] relative w-full aspect-square">
            <Image src={WordPageConstants.src} alt="" fill className="rounded-2xl object-cover" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-24">
          <span className="flex flex-col">
            <h2 className="text-4xl font-semibold">Words</h2>
            <p className="text-xl text-muted-foreground mt-5">Learn the meanings of words, listen and share with others.</p>
          </span>
          <div className="grid grid-flow-col gap-x-3">
            <Button type="button" variant="outline" size="icon">
              <Link className="h-5 w-5" />
            </Button>
            <Button type="button" variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button type="button" variant="default">
              <Book className="h-5 w-5 mr-2" />
              Copy Dictionary
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20 gap-y-6 gap-x-6">
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
