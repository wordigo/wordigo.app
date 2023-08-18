import { useContextPopover } from "../context/popover";
import AuidoPlayer from "./AudioPlayer";
import DictionarySelector from "./DictionarySelector";
import Logo from "./Logo";
import { sendToBackground } from "@plasmohq/messaging";
import { AllCountryLanguages } from "@wordigo/common";
import {
  Button,
  Card,
  Skeleton,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  buttonVariants,
} from "@wordigo/ui";
import { motion } from "framer-motion";
import { ArrowRightLeft, Copy, Settings, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useMutation } from "react-query";
import { TranslateApi } from "~api/translate";
import { getPopupCordinate } from "~utils";
import { TRANSLATE_CARD_WIDTH } from "~utils/constants";
import { getLocalMessage } from "~utils/locale";

const TranslatePopup = () => {
  const { cordinate, selectedText, targetLanguage, setPopup } =
    useContextPopover();
  const {
    mutate: handleTranslate,
    isLoading,
    data: result,
  } = useMutation(TranslateApi);
  const { top, left } = getPopupCordinate(cordinate);

  const getSourceLanguageFlag = useMemo(
    () =>
      AllCountryLanguages.find(
        (lang) =>
          lang.code === (result?.data?.sourceLanguage || "").toUpperCase()
      ),
    [result?.data?.sourceLanguage]
  );

  const getTargetLanguageFlag = useMemo(
    () =>
      AllCountryLanguages.find(
        (lang) =>
          lang.code ===
          (result?.data?.targetLanguage || targetLanguage)?.toUpperCase()
      ),
    [result?.data?.targetLanguage]
  );

  useEffect(() => {
    handleTranslate({
      query: selectedText,
      sourceLanguage: null,
      targetLanguage,
    });
  }, [selectedText]);

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <motion.div
      tabIndex={50}
      id="el-translate-container"
      className="absolute z-50"
      initial={{
        top: top - 20,
        left: left - 200,
        width: TRANSLATE_CARD_WIDTH,
      }}
      animate={{
        top: top + 20,
        left: left - 200,
      }}
    >
      <Card className="border-1 border-gray-300 shadow-md flex items-center space-x-1 rounded-md p-3 flex-col gap-y-3 bg-background">
        <div className="flex items-center justify-between h-8 w-full">
          <div className="flex items-center gap-x-1">
            <Logo className="h-8 w-8 bg-transparent cursor-pointer" />
            <p className="font-bold text-lg text-gray-950 dark:text-white">
              {getLocalMessage("translate")}
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <div
              className={buttonVariants({
                variant: "outline",
                size: "sm",
                className: "flex gap-x-2 items-center rounded-lg !h-7",
              })}
            >
              {isLoading || !getSourceLanguageFlag ? (
                <Skeleton className="w-4 h-4" />
              ) : (
                <ReactCountryFlag
                  style={{
                    fontSize: "1em",
                    lineHeight: "1em",
                  }}
                  svg
                  countryCode={getSourceLanguageFlag?.icon || "DT"}
                />
              )}
              <ArrowRightLeft className="!text-gray-300" size={12} />
              <ReactCountryFlag
                style={{
                  fontSize: "1em",
                  lineHeight: "1em",
                }}
                svg
                countryCode={getTargetLanguageFlag?.icon || "DT"}
              />
            </div>
            <Button
              onClick={handleClose}
              className="!h-8 !w-8 text-gray-500"
              variant="ghost"
              size="icon"
            >
              <X size={18} />
            </Button>
          </div>
        </div>
        <div className="w-full gap-y-2 flex flex-col">
          <div className="relative">
            <div className="border-gray-200 border-[1.5px] w-full h-32 max-h-32 rounded !opacity-75 disabled:!cursor-default text-sm text-primary p-2">
              {isLoading ? (
                <TranslatePopup.Loader />
              ) : (
                <div className="line-clamp-4 overflow-y-visible">
                  {result?.data?.translatedText}
                </div>
              )}
            </div>
            <div className="absolute bottom-2 right-3 flex items-center justify-between gap-x-2">
              <TranslatePopup.AudioPlayer />
              <TranslatePopup.CopyTranslatedText
                text={result?.data?.translatedText}
              />
            </div>
          </div>
        </div>
        {/* <Separator /> */}
        <div className="w-full flex items-center justify-between">
          <TranslatePopup.SettingsAction />
          <DictionarySelector
            translatedText={result?.data?.translatedText}
            sourceLangauge={result?.data?.sourceLanguage}
          />
        </div>
      </Card>
    </motion.div>
  );
};

TranslatePopup.AudioPlayer = AuidoPlayer;

TranslatePopup.CopyTranslatedText = ({ text }: { text: string }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

  const copyTranslatedText = () => {
    void navigator.clipboard.writeText(text);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 700);
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={visible}>
        <TooltipTrigger
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          onClick={copyTranslatedText}
          asChild
        >
          <Button
            className="!w-7 !h-7 text-accent-foreground dark:text-accent"
            variant="ghost"
            size="icon"
          >
            <Copy size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!py-0.5">
          <p>{copiedStatus ? "Translation copied" : "Copy to clipboard"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

TranslatePopup.SettingsAction = () => {
  const { setPopup } = useContextPopover();

  const openSettingsPage = async () => {
    const opeendSettings = await sendToBackground({
      name: "openSettings",
    });
    opeendSettings && setPopup(false);
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={openSettingsPage}
            className="!h-8 !w-8 text-accent-foreground dark:text-accent"
            variant="outline"
            size="icon"
          >
            <Settings size={17} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="!py-0.5">
          <p>Open Settings page</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

TranslatePopup.Loader = () => {
  return (
    <div className="flex flex-col gap-y-1">
      <Skeleton className="rounded-sm h-4 w-full" />
      <Skeleton className="rounded-sm h-4 w-full" />
    </div>
  );
};

export default TranslatePopup;
