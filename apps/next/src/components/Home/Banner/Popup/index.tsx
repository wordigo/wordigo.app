import { useTranslateWordMutation } from "@/store/common/api";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Textarea,
  buttonVariants,
} from "@wordigo/ui";
import { motion } from "framer-motion";
import { Copy, Settings, Volume2, XIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React, {
  useEffect,
  type FunctionComponent,
  type PropsWithChildren,
} from "react";
import ReactCountryFlag from "react-country-flag";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const DynamicIconLogo = dynamic(
  () => import("@/components/Logo/DynamicIconLogo"),
  {
    ssr: false,
  }
) as FunctionComponent;

const TranslatePopup: React.FC<
  PropsWithChildren<{ selectedWord: string; style: React.CSSProperties }>
> = ({ selectedWord, style }) => {
  const { t } = useTranslation();

  const [handleTranslate, { data: response, isLoading }] =
    useTranslateWordMutation();

  useEffect(() => {
    void handleTranslate({
      query: selectedWord,
      sourceLanguage: "en",
      targetLanguage: "tr",
    });
  }, [selectedWord]);

  return (
    <div
      id="translate-popup"
      tabIndex={500}
      style={{
        width: "420px",
        ...style,
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
        }}
        initial={{
          marginTop: 0,
        }}
        animate={{
          marginTop: 15,
        }}
      >
        <Card tabIndex={1} className="flex-col flex !h-50 bg-background">
          <CardHeader className="flex flex-row items-center justify-between px-4 !py-[8px]">
            <CardTitle className="!text-base dark:text-white !text-primary flex gap-x-1 items-center ">
              <DynamicIconLogo />
              {t("general.translator")}
            </CardTitle>
            <div className="flex gap-x-2">
              <div
                className={buttonVariants({
                  variant: "outline",
                  size: "sm",
                  className: "flex gap-x-2 items-center rounded-lg !h-7",
                })}
              >
                <ReactCountryFlag
                  style={{
                    fontSize: "1em",
                    lineHeight: "1em",
                  }}
                  svg
                  countryCode={"TR"}
                />
                <FaArrowRightArrowLeft className="!text-gray-300" size={12} />
                <ReactCountryFlag
                  style={{
                    fontSize: "1em",
                    lineHeight: "1em",
                  }}
                  svg
                  countryCode={"US"}
                />
              </div>
              <Button
                className="!h-7 !w-7 flex-end"
                variant="outline"
                size="icon"
              >
                <XIcon size={16} />
              </Button>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="!px-5 !py-3 !h-28 relative">
            {isLoading ? (
              <div className="flex  flex-col gap-y-1 h-full">
                <Skeleton className="rounded-sm h-4 w-full" />
                <Skeleton className="rounded-sm h-4 w-full" />
              </div>
            ) : (
              <Textarea
                className="!border-0 !p-0 !opacity-75 disabled:!cursor-default !h-full resize-none"
                value={response?.data?.translatedText}
                disabled
              />
            )}
            <div className="absolute right-5 bottom-1">
              <Button className="!h-7 !w-7" variant="ghost" size="icon">
                <Copy size={16} />
              </Button>
              <Button className="!h-7 !w-7" variant="ghost" size="icon">
                <Volume2 size={16} />
              </Button>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="!p-3 flex items-center justify-between relative">
            <div className="flex flex-row gap-x-2 items-center justify-end">
              <Button className="!h-7 !w-8" variant="outline" size="icon">
                <Settings size={16} />
              </Button>
            </div>
            <Select>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Select dictionary" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">English 100 verbs</SelectItem>
              </SelectContent>
            </Select>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

// TranslatePopup.CopyTranslatedText = ({ text }: { text: string }) => {
//   const [visible, setVisible] = useState<boolean>(false);
//   const [copiedStatus, setCopiedStatus] = useState<boolean>(false);

//   const copyTranslatedText = () => {
//     void navigator.clipboard.writeText(text);
//     setCopiedStatus(true);
//     setTimeout(() => setCopiedStatus(false), 700);
//   };

//   return (
//     <TooltipProvider delayDuration={100}>
//       <Tooltip open={visible}>
//         <TooltipTrigger
//           onMouseEnter={() => setVisible(true)}
//           onMouseLeave={() => setVisible(false)}
//           onClick={copyTranslatedText}
//           asChild
//         >
//           <Button className="!h-9 !w-9" variant="outline" size="icon">
//             <Copy size={18} />
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent className="!py-0.5">
//           <p>{copiedStatus ? "Translation copied" : "Copy to clipboard"}</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// TranslatePopup.SettingsAction = () => {
//   return (
//     <TooltipProvider delayDuration={100}>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <Button className="!h-9 !w-9" variant="outline" size="icon">
//             <Settings size={18} />
//           </Button>
//         </TooltipTrigger>
//         <TooltipContent className="!py-0.5">
//           <p>Open Settings page</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

export default TranslatePopup;
