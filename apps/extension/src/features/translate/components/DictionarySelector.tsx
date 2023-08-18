import { useContextPopover } from "../context/popover";
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
import { Fragment, useEffect } from "react";
import { useMutation } from "react-query";
import { addDictionaryWord } from "~api/dictionary";

const DictionarySelector = ({
  sourceLangauge,
  translatedText,
}: {
  sourceLangauge: string;
  translatedText: string;
}) => {
  const { targetLanguage, selectedText } = useContextPopover();
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

  const handleAddLibrary = () => {
    if (!hasToken) return;
    addMutate({
      nativeLanguage: sourceLangauge,
      targetLanguage,
      text: selectedText,
      translatedText,
    });
  };

  return (
    <TooltipProvider delayDuration={100}>
      <HoverCard openDelay={100}>
        <Tooltip>
          <HoverCardTrigger asChild>
            <TooltipTrigger disabled={!hasToken || addIsLoading} asChild>
              <Button
                className="!pointer-events-auto disabled:!opacity-100 !h-8 flex items-center justify-between gap-x-2"
                disabled={!hasToken || addIsLoading}
                onClick={handleAddLibrary}
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
          <HoverCardContent>test</HoverCardContent>
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
