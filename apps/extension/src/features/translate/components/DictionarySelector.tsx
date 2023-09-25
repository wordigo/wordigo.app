import { Button, HoverCard, HoverCardContent, HoverCardTrigger, ToastAction, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, useToast } from "@wordigo/ui"
import { cn } from "@wordigo/ui/lib/utils"
import { ChevronDown, RotateCw } from "lucide-react"
import { useMemo } from "react"
import { Fragment, useEffect, useRef } from "react"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"

import { addDictionaryWord } from "~api/dictionary"
import { useAuthStore } from "~stores/auth"
import { useDictionaryStore } from "~stores/dictionary"
import { usePopoverStore } from "~stores/popover"
import { getLocalMessage } from "~utils/locale"

const DictionarySelector = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const hoverRef = useRef<HTMLDivElement>()
  const { dictionaries } = useDictionaryStore()
  const { targetLanguage, selectedText } = usePopoverStore()
  const { mutate: addMutate, isLoading: addIsLoading, status, data } = useMutation(addDictionaryWord)
  const { toast } = useToast()
  const { isLoggedIn } = useAuthStore()

  const openDictionaryPage = async () => {
    const openedDictionaryPage = await sendToBackground({
      name: "openPageUrl",
      body: {
        slug: data?.data?.slug
      }
    })
  }

  useEffect(() => {
    if (status === "success") {
      if (data.success) {
        toast({
          title: getLocalMessage("successNotifyTitle"),
          description: getLocalMessage("word_add_notify"),
          action: (
            <ToastAction onClick={openDictionaryPage} className="text-primary" altText={getLocalMessage("view_dictionary")}>
              {getLocalMessage("view_dictionary")}
            </ToastAction>
          )
        })
      } else {
        toast({
          variant: "destructive",
          title: getLocalMessage("errorNotifyTitle"),
          description: data.message
        })
      }
    }
  }, [status])

  const handleAddLibrary = (dictionaryId?: number) => {
    if (!isLoggedIn) return
    addMutate({
      nativeLanguage: sourceLangauge.toLowerCase(),
      targetLanguage: targetLanguage.toLowerCase(),
      text: selectedText,
      translatedText,
      dictionaryId
    })
    hoverRef.current.hidden = true
    hoverRef.current.style.display = "ui-hidden"
  }

  const language = useMemo(() => chrome.i18n.getUILanguage(), [chrome.i18n])

  return (
    <TooltipProvider delayDuration={100}>
      <HoverCard openDelay={100}>
        <Tooltip>
          <HoverCardTrigger asChild>
            <TooltipTrigger disabled={!isLoggedIn || addIsLoading} asChild>
              <Button
                className="ui-pointer-events-auto disabled:ui-opacity-50 ui-h-8 ui-flex ui-items-center ui-justify-between ui-gap-x-2"
                disabled={!isLoggedIn || addIsLoading}
                onClick={() => handleAddLibrary()}
                variant="default"
                size="sm">
                {addIsLoading ? (
                  <Fragment>
                    <RotateCw className="ui-mr-2 ui-h-4 ui-w-4 ui-animate-spin" />
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
            <HoverCardContent ref={hoverRef} className={cn("!p-0 ui-divide-y ui-divide-gray-200 dark:ui-divide-gray-700 !rounded-sm", language === "tr" ? "w-[195px]" : "w-[145px]")}>
              <div className="text-accent-foreground ui-select-none ui-rounded-sm hover:bg-primary-foreground !opacity-60 !h-7 ui-flex ui-items-center ui-px-2 text-[13.5px]">
                {getLocalMessage("select_dictionary")}
              </div>
              <div className="ui-flex ui-flex-col">
                {dictionaries?.map((dictionary) => (
                  <Button
                    onClick={() => handleAddLibrary(dictionary.id)}
                    key={dictionary.id}
                    disabled={addIsLoading}
                    className="!rounded-sm !h-8 !text-start !justify-start ui-truncate"
                    variant="ghost"
                    size="sm">
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
  )
}

export default DictionarySelector
