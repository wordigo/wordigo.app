import MainLayout from "@/components/Layout/MainLayout";
import {
  ActionsLoader,
  DetailLoader,
  WordsItemLoader,
} from "@/components/Published/Library/Library.loaders";
import { Rating } from "@/components/Published/Rating";
import ArrowRightLeft from "@/components/Published/WordsPage/ArrowRightLeft";
import { TextToSpeechProvider, useTextToSpeech } from "@/contexts/textToSpeech";
import { useGetPublicDictionaryBySlugMutation } from "@/store/publicDictionaries/api";
import { AllCountryLanguages } from "@wordigo/common";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  useToast,
} from "@wordigo/ui";
import {
  Book,
  Copy,
  Hash,
  Heart,
  Languages,
  Link,
  Star,
  Volume2,
} from "lucide-react";
import { type GetStaticPaths } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useEffect, useMemo } from "react";
import ReactCountryFlag from "react-country-flag";

const LibraryDetail = () => {
  const { t } = useTranslation();
  const { slug } = useRouter().query;

  const [handleGetPublicDictionary, { data: response, isLoading }] =
    useGetPublicDictionaryBySlugMutation();

  useEffect(() => {
    void handleGetPublicDictionary({ slug: slug as string });
  }, []);

  const computedSourceLang = useMemo(
    () =>
      AllCountryLanguages.find(
        (item) => item.code === response?.data?.sourceLang.toUpperCase()
      )?.icon,
    [response?.data?.sourceLang]
  );

  const computedTargetLang = useMemo(
    () =>
      AllCountryLanguages.find(
        (item) => item.code === response?.data?.targetLang.toUpperCase()
      )?.icon,
    [response?.data?.targetLang]
  );

  const splittedText = response?.data?.author?.name?.toUpperCase()?.split(" ");
  const computedName =
    (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  return (
    <MainLayout>
      <TextToSpeechProvider>
        <section className="flex w-full flex-col px-20 py-24 pt-16 max-xl:py-16 max-md:px-4">
          {!isLoading ? (
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
                    {response?.data?.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mt-6 max-xl:mt-4 max-xl:text-lg">
                    {response?.data?.description ||
                      t("libraryDetail.no_description")}
                  </p>
                  <div className="flex gap-y-6 flex-col md:flex-row mt-12 gap-x-5 items-start md:items-center max-xl:mt-6 max-md:grid-cols-1 max-md:gap-y-3">
                    <div className="flex items-center">
                      <Star className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                      <span className="text-xl font-semibold max-lg:text-lg">
                        {response?.data?.rate} {t("general.rating")}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Hash className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                      <span className="text-xl font-semibold max-lg:text-lg">
                        {response?.data?.words?.length} {t("general.words")}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Languages className="w-12 h-12 p-3 rounded-[0.625rem] border mr-4 max-lg:p-2 max-lg:w-9 max-lg:h-9" />
                      <span className="text-xl font-semibold max-lg:text-lg">
                        {response?.data?.level} {t("general.level")}
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-12 items-center max-xl:mt-6">
                    <div className="relative h-14 w-14 mr-4">
                      <Image
                        src={response?.data?.author.avatar_url}
                        fill
                        alt=""
                        className="rounded-full"
                      />
                      <Avatar className="relative h-10 w-10 mr-3 md:h-12 md:w-12">
                        <AvatarImage
                          className="w-10 h-10 md:h-12 md:w-12"
                          src={response?.data?.author.avatar_url}
                          alt={"@" + response?.data?.author.name}
                        />
                        <AvatarFallback>{computedName}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">
                        {response?.data?.author.name}
                      </span>
                      <span className="text-base text-muted-foreground">
                        {response?.data?.createdDate}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square w-[480px] h-[340px] max-xl:mt-6 max-md:w-[350px] max-md:h-[240px]">
                  <Image
                    alt=""
                    className="rounded-2xl object-cover"
                    src={
                      response?.data?.image || "/images/dictionary_banner.jpg"
                    }
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
                  <Button type="button" variant="outline" size="icon">
                    <Link className="h-5 w-5" />
                  </Button>
                  <Rating />
                  <Button type="button" variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
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
                {response?.data?.words.map(
                  ({ text, translatedText }, index) => (
                    <LibraryDetail.WordItem
                      key={index}
                      word={text}
                      translatedWord={translatedText}
                    />
                  )
                )}
              </div>
            </Fragment>
          ) : (
            <LibraryDetail.Loader />
          )}
        </section>
      </TextToSpeechProvider>
    </MainLayout>
  );
};

LibraryDetail.WordItem = ({ word, translatedWord }) => {
  const { toast } = useToast();
  const { textToSpeech, isSpeaking, spokenWord } = useTextToSpeech();
  const { t } = useTranslation();

  const handleTextToSpeech = () => {
    textToSpeech(word);
  };

  const handleCopyWord = () => {
    void navigator.clipboard.writeText(word);
    toast({
      title: t("notifications.copied_word_title"),
      description: t("notifications.copied_word"),
      status: "success",
      duration: 3000,
      isClosable: true,
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
