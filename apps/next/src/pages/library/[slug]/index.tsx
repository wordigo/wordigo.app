import MainLayout from "@/components/Layout/MainLayout";
import {
  ActionsLoader,
  DetailLoader,
  WordsItemLoader,
} from "@/components/Published/Library/Library.loaders";
import DictionaryRating from "@/components/Published/Rating";
import SocialShare from "@/components/Published/SocialShare";
import ArrowRightLeft from "@/components/Published/WordsPage/ArrowRightLeft";
import { TextToSpeechProvider, useTextToSpeech } from "@/contexts/textToSpeech";
import { axiosBaseQuery } from "@/store/baseQuery";
import { AllCountryLanguages } from "@wordigo/common";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
} from "@wordigo/ui";
import { type AxiosResponse } from "axios";
import { Book, Copy, Hash, Languages, Link, Star, Volume2 } from "lucide-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { Fragment, useMemo } from "react";
import ReactCountryFlag from "react-country-flag";
import { toast } from "sonner";
import { type IDictionary, type IResponse } from "types/global";

const LibraryDetail = ({ dictionary }: { dictionary: IDictionary }) => {
  const { t } = useTranslation();

  const computedSourceLang = useMemo(
    () =>
      AllCountryLanguages.find(
        (item) => item.code === dictionary?.sourceLang.toUpperCase()
      )?.icon,
    [dictionary?.sourceLang]
  );

  const computedTargetLang = useMemo(
    () =>
      AllCountryLanguages.find(
        (item) => item.code === dictionary?.targetLang.toUpperCase()
      )?.icon,
    [dictionary?.targetLang]
  );

  const splittedText = dictionary?.author?.name?.toUpperCase()?.split(" ");
  const computedName =
    (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const host =
    typeof window !== "undefined" ? window.location.origin : undefined;
  const url = `${host}/library/${dictionary?.slug}`;

  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      toast.success(t("notifications.copied_link_title"), {
        description: t("notifications.copied_link"),
        duration: 3000,
      });
      navigator.clipboard.writeText(url as string);
    }
  };

  return (
    <Fragment>
      <NextSeo
        title={dictionary.title}
        description={dictionary.description}
        canonical={"https://www.wordigo.app/library/" + dictionary.slug}
        twitter={{
          handle: "@wordigoapp",
          site: "@wordigoapp",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: "https://www.wordigo.app/library/" + dictionary.slug,
          title: dictionary.title,
          description: dictionary.description,
          images: [
            {
              url:
                dictionary.image ||
                "https://www.wordigo.app/images/dictionary_banner.jpg",
              alt: dictionary.title,
            },
          ],
        }}
      />
      <MainLayout>
        <TextToSpeechProvider>
          <section className="flex w-full flex-col px-20 py-24 pt-16 max-xl:py-16 max-md:px-4">
            {!false ? (
              <Fragment>
                <div className="flex items-center justify-between space-x-16 max-xl:flex-col max-xl:space-x-3 max-md:mr-3">
                  <div className="flex flex-col my-auto">
                    <Badge
                      className="text-sm font-medium px-3 py-2 w-fit"
                      variant="outline"
                    >
                      <ReactCountryFlag
                        svg
                        countryCode={computedSourceLang}
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
                        countryCode={computedTargetLang}
                        style={{
                          width: "1rem",
                          height: "1rem",
                          aspectRatio: "1 / 1",
                          borderRadius: "999rem",
                          objectFit: "cover",
                        }}
                      />
                    </Badge>
                    <h1 className="text-6xl font-semibold mt-4 max-xl:text-3xl">
                      {dictionary?.title}
                    </h1>
                    <p className="text-xl text-muted-foreground mt-6 max-xl:mt-4 max-xl:text-lg">
                      {dictionary?.description ||
                        t("libraryDetail.no_description")}
                    </p>
                    <div className="flex gap-y-6 flex-col md:flex-row mt-12 gap-x-5 items-start md:items-center max-xl:mt-6 max-md:grid-cols-1 max-md:gap-y-3">
                      <div className="flex items-center">
                        <Star className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                        <span className="text-xl font-semibold max-lg:text-lg">
                          {dictionary?.rate} {t("general.rating")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Hash className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                        <span className="text-xl font-semibold max-lg:text-lg">
                          {dictionary?.words?.length} {t("general.words")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Languages className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                        <span className="text-xl font-semibold max-lg:text-lg">
                          {dictionary?.level} {t("general.level")}
                        </span>
                      </div>
                    </div>
                    <div className="flex mt-12 items-center max-xl:mt-6">
                      <div className="relative h-14 w-14 mr-1">
                        <Avatar className="relative h-10 w-10 mr-3 md:h-12 md:w-12">
                          <AvatarImage
                            className="w-10 h-10 md:h-12 md:w-12"
                            src={dictionary?.author.avatar_url}
                            alt={"@" + dictionary?.author.name}
                          />
                          <AvatarFallback>{computedName}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold">
                          {dictionary?.author.name}
                        </span>
                        <span className="text-base text-muted-foreground">
                          {new Date(dictionary?.createdDate).toDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-square w-[480px] h-[340px] max-xl:mt-6 max-md:w-[350px] max-md:h-[240px]">
                    <Image
                      alt=""
                      className="rounded-2xl object-cover"
                      src={dictionary?.image || "/images/dictionary_banner.jpg"}
                      fill
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-24 max-xl:mt-12 max-md:flex-col">
                  <span className="flex flex-col">
                    <h2 className="text-4xl font-semibold max-lg:text-3xl">
                      {t("general.words")}
                    </h2>
                    <p className="text-xl text-muted-foreground mt-5 max-lg:text-lg max-lg:mt-4">
                      {t("libraryDetail.description")}
                    </p>
                  </span>
                  <div className="grid grid-flow-col gap-x-3 max-md:mt-4">
                    <Button
                      onClick={copyToClipboard}
                      type="button"
                      variant="outline"
                      size="icon"
                    >
                      <Link className="h-5 w-5" />
                    </Button>
                    <SocialShare {...dictionary} />
                    <DictionaryRating />
                    <Button
                      type="button"
                      variant="default"
                      className="max-xl:px-3"
                    >
                      <Book className="h-5 w-5 xl:mr-2" />
                      <h1 className="max-xl:hidden">
                        {t("libraryDetail.copy_dictionary")}
                      </h1>
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-3 mt-20 gap-y-6 gap-x-6 max-xl:mt-12 max-xl:gap-y-4 max-xl:gap-x-4 max-xl:grid-cols-2 max-md:grid-cols-1">
                  {dictionary?.words.map(({ text, translatedText }, index) => (
                    <LibraryDetail.WordItem
                      key={index}
                      word={text}
                      translatedWord={translatedText}
                    />
                  ))}
                </div>
              </Fragment>
            ) : (
              <LibraryDetail.Loader />
            )}
          </section>
        </TextToSpeechProvider>
      </MainLayout>
    </Fragment>
  );
};

LibraryDetail.WordItem = ({ word, translatedWord }) => {
  const { textToSpeech, isSpeaking, spokenWord } = useTextToSpeech();
  const { t } = useTranslation();

  const handleTextToSpeech = () => {
    textToSpeech(word);
  };

  const handleCopyWord = () => {
    void navigator.clipboard.writeText(word);
    toast.success(t("notifications.copied_word_title"), {
      description: t("notifications.copied_word"),
      duration: 3000,
    });
  };

  const hasDubbing = spokenWord === word && isSpeaking;

  return (
    <div className="p-6 border rounded-[0.5rem] hover:border-foreground flex items-start justify-between">
      <div className="flex flex-col">
        <span className="text-sm font-medium">{word}</span>
        <span className="text-sm text-muted-foreground">{translatedWord}</span>
      </div>
      <div className="flex">
        <Button
          disabled={hasDubbing}
          onClick={handleTextToSpeech}
          variant="ghost"
          size="icon"
          className="mr-1"
        >
          {
            <Volume2
              className={`w-5 h-5 ${
                hasDubbing ? "animate-pulse" : "animate-none"
              }`}
            />
          }
        </Button>
        <Button onClick={handleCopyWord} variant="ghost" size="icon">
          <Copy className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

LibraryDetail.Loader = () => (
  <Fragment>
    <DetailLoader />
    <ActionsLoader />
    <WordsItemLoader />
  </Fragment>
);

export default LibraryDetail;

export const getServerSideProps = async ({ params, locale }) => {
  const { slug } = params;

  if (!slug) {
    return {
      redirect: {
        permanent: false,
        destination: "/library",
      },
    };
  }

  const { data: response } = (await axiosBaseQuery()(
    {
      method: "GET",
      url: `/publicDictionary/getPublicDictionaryBySlug?slug=${slug}`,
    },
    null,
    null
  )) as AxiosResponse<IResponse<IDictionary>>;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
      dictionary: response.data,
    },
  };
};
