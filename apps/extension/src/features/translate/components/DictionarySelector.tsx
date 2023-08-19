import { Storage } from "@plasmohq/storage";
import { useStorage } from "@plasmohq/storage/hook";
import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common";
import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  ToastAction,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useToast,
} from "@wordigo/ui";
import { ChevronDown, RotateCw } from "lucide-react";
import { useRef } from "react";
import { Fragment, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { addDictionaryWord, getUserDictionaries } from "~api/dictionary";
import { usePopoverStore } from "~stores/popover";

const DictionarySelector = ({
  sourceLangauge,
  translatedText,
}: {
  sourceLangauge: string;
  translatedText: string;
}) => {
  const hoverRef = useRef<HTMLDivElement>();
  const { targetLanguage, selectedText } = usePopoverStore();
  const { isLoading, data: dictResponse } = useQuery({
    queryFn: getUserDictionaries,
  });
  const {
    mutate: addMutate,
    isLoading: addIsLoading,
    status,
  } = useMutation(addDictionaryWord);
  const { toast } = useToast();
  const [hasToken] = useStorage({
    key: WORDIGO_JWT_TOKEN_COOKIE,
    instance: new Storage({
      area: "local",
    }),
  });

  useEffect(() => {
    if (status === "success") {
      toast({
        title: "Successful",
        description: "Word insertion successful.",
        action: (
          <ToastAction className="text-primary" altText="View Dictionary">
            View Dictionary
          </ToastAction>
        ),
      });
    }
  }, [status]);

  const handleAddLibrary = (dictionaryId?: number) => {
    if (!hasToken) return;
    addMutate({
      nativeLanguage: sourceLangauge,
      targetLanguage,
      text: selectedText,
      translatedText,
      dictionaryId,
    });
    hoverRef.current.hidden = true;
    hoverRef.current.style.display = "hidden";
  };

  return (
    <TooltipProvider delayDuration={100}>
      <HoverCard openDelay={100}>
        <Tooltip>
          <HoverCardTrigger asChild>
            <TooltipTrigger disabled={!hasToken || addIsLoading} asChild>
              <Button
                className="!pointer-events-auto disabled:!opacity-50 !h-8 flex items-center justify-between gap-x-2"
                disabled={!hasToken || addIsLoading}
                onClick={() => handleAddLibrary()}
                variant="default"
                size="sm"
              >
                {addIsLoading ? (
                  <Fragment>
                    <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Fragment>
                ) : (
                  <Fragment>
                    Save to library
                    <ChevronDown size={16} />
                  </Fragment>
                )}
              </Button>
            </TooltipTrigger>
          </HoverCardTrigger>
          {hasToken && (
            <HoverCardContent
              ref={hoverRef}
              className="!p-0 w-[145px] divide-y divide-gray-200 dark:divide-gray-700 !rounded-sm"
            >
              <div className="text-accent-foreground select-none rounded-sm hover:bg-primary-foreground !opacity-60 !h-7 flex items-center px-2 text-[13.5px]">
                Select dictionary
              </div>
              <div className="flex flex-col">
                {dictResponse?.data?.map((dictionary) => (
                  <Button
                    onClick={() => handleAddLibrary(dictionary.id)}
                    key={dictionary.id}
                    disabled={addIsLoading}
                    className="!rounded-sm !h-8 !text-start !justify-start"
                    variant="ghost"
                    size="sm"
                  >
                    {dictionary.title}
                  </Button>
                ))}
              </div>
            </HoverCardContent>
          )}
          {!hasToken && (
            <TooltipContent className="!py-0.5">
              <p>you need to login.</p>
            </TooltipContent>
          )}
        </Tooltip>
      </HoverCard>
    </TooltipProvider>
  );
};

export default DictionarySelector;
