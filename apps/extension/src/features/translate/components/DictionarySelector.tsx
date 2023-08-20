import { Button, HoverCard, HoverCardContent, HoverCardTrigger, ToastAction, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, useToast } from "@wordigo/ui";
import { ChevronDown, RotateCw } from "lucide-react";
import { Fragment, useEffect, useRef } from "react";
import { useMutation } from "react-query";
import { addDictionaryWord } from "~api/dictionary";
import { useAuthStore } from "~stores/auth";
import { useDictionaryStore } from "~stores/dictionary";
import { usePopoverStore } from "~stores/popover";
import { getLocalMessage } from "~utils/locale";

const DictionarySelector = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const hoverRef = useRef<HTMLDivElement>();
  const { dictionaries } = useDictionaryStore();
  const { targetLanguage, selectedText } = usePopoverStore();
  const { mutate: addMutate, isLoading: addIsLoading, status } = useMutation(addDictionaryWord);
  const { toast } = useToast();
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (status === "success") {
      toast({
        title: getLocalMessage("successNotifyTitle"),
        description: getLocalMessage("word_add_notify"),
        action: (
          <ToastAction className="text-primary" altText="View Dictionary">
            {getLocalMessage("view_dictionary")}
          </ToastAction>
        ),
      });
    }
  }, [status]);

  const handleAddLibrary = (dictionaryId?: number) => {
    if (!isLoggedIn) return;
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
            <TooltipTrigger disabled={!isLoggedIn || addIsLoading} asChild>
              <Button
                className="!pointer-events-auto disabled:!opacity-50 !h-8 flex items-center justify-between gap-x-2"
                disabled={!isLoggedIn || addIsLoading}
                onClick={() => handleAddLibrary()}
                variant="default"
                size="sm"
              >
                {addIsLoading ? (
                  <Fragment>
                    <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                    {getLocalMessage("loading")}
                  </Fragment>
                ) : (
                  <Fragment>
                    {getLocalMessage("save_to_libraray")}
                    <ChevronDown size={16} />
                  </Fragment>
                )}
              </Button>
            </TooltipTrigger>
          </HoverCardTrigger>
          {isLoggedIn && (
            <HoverCardContent ref={hoverRef} className="!p-0 w-[145px] divide-y divide-gray-200 dark:divide-gray-700 !rounded-sm">
              <div className="text-accent-foreground select-none rounded-sm hover:bg-primary-foreground !opacity-60 !h-7 flex items-center px-2 text-[13.5px]">Select dictionary</div>
              <div className="flex flex-col">
                {dictionaries?.map((dictionary) => (
                  <Button
                    onClick={() => handleAddLibrary(dictionary.id)}
                    key={dictionary.id}
                    disabled={addIsLoading}
                    className="!rounded-sm !h-8 !text-start !justify-start truncate"
                    variant="ghost"
                    size="sm"
                  >
                    {dictionary.title}
                  </Button>
                ))}
              </div>
            </HoverCardContent>
          )}
          {!isLoggedIn && (
            <TooltipContent className="!py-0.5">
              <p>{getLocalMessage("you_need_login")}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </HoverCard>
    </TooltipProvider>
  );
};

export default DictionarySelector;
