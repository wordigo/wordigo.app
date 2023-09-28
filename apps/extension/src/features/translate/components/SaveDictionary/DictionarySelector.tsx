import { Button } from "baseui/button"
import { StatefulPopover } from "baseui/popover"
import { ToasterContainer, toaster } from "baseui/toast"
import { ChevronDown } from "lucide-react"
import { useEffect } from "react"
import React from "react"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"

import { addDictionaryWord } from "~api/dictionary"
import { useAuthStore } from "~stores/auth"
import { useDictionaryStore } from "~stores/dictionary"
import { usePopoverStore } from "~stores/popover"
import { getLocalMessage } from "~utils/locale"

import { StyledSelectButton, StyledSelectContainer } from "./Dictionary.styles"

const DictionarySelector = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const { dictionaries } = useDictionaryStore()
  const { targetLanguage, selectedText } = usePopoverStore()
  const { mutate: addMutate, isLoading: addIsLoading, status, data } = useMutation(addDictionaryWord)
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
    console.log(status)

    if (status === "success") {
      if (data.success) {
        // {
        //   // title: getLocalMessage("successNotifyTitle"),
        //   // description: getLocalMessage("word_add_notify"),
        //   action: (
        //     <ToastAction onClick={openDictionaryPage} className="text-primary" altText={getLocalMessage("view_dictionary")}>
        //       {getLocalMessage("view_dictionary")}
        //     </ToastAction>
        //   )
        // }
        console.log("test")
        toaster.info("This is the message.", {})
      } else {
        // toast({
        //   variant: "destructive",
        //   title: getLocalMessage("errorNotifyTitle"),
        //   description: data.message
        // })
      }
    }
  }, [status])

  const handleAddLibrary = (dictionaryId?: number, close?: () => void) => {
    if (!isLoggedIn) return
    addMutate({
      nativeLanguage: sourceLangauge.toLowerCase(),
      targetLanguage: targetLanguage.toLowerCase(),
      text: selectedText,
      translatedText,
      dictionaryId
    })
    close?.()
  }

  return (
    <StatefulPopover
      showArrow
      placement="bottom"
      popoverMargin={5}
      accessibilityType="tooltip"
      triggerType="hover"
      content={({ close }) => (
        <StyledSelectContainer>
          <StyledSelectButton>Select dictionary</StyledSelectButton>
          {dictionaries.map((dictionary) => (
            <Button
              key={dictionary.id}
              size="mini"
              kind="tertiary"
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    borderBottom: `1px solid ${$theme.colors.gray200}`,
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                    textAlign: "left",
                    fontWeight: 400,
                    height: $theme.sizing.scale800,
                    fontSize: $theme.sizing.scale500,
                    overflow: "hidden",
                    textelipsis: "ellipsis"
                  })
                }
              }}
              onClick={() => handleAddLibrary(dictionary.id, close)}
              isLoading={addIsLoading}
              disabled={addIsLoading}>
              {dictionary.title}
            </Button>
          ))}
        </StyledSelectContainer>
      )}
      returnFocus>
      <Button isLoading={addIsLoading} disabled={addIsLoading} size="mini">
        {getLocalMessage("save_to_libraray")}
        <ChevronDown size={16} />
      </Button>
    </StatefulPopover>
  )
}

export default DictionarySelector
