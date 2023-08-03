import { WORDIGO_JWT_TOKEN_COOKIE } from "@wordigo/common"
import { Button, ToastAction, useToast } from "@wordigo/ui"
import { RotateCw } from "lucide-react"
import { Fragment, useEffect } from "react"
import { useMutation } from "react-query"

import { Storage } from "@plasmohq/storage"
import { useStorage } from "@plasmohq/storage/hook"

import { addDictionaryWord } from "~api/dictionary"

import { useContextPopover } from "../context/popover"

const DictionarySelector = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const { targetLanguage, selectedText } = useContextPopover()
  const { mutate: addMutate, isLoading: addIsLoading, status } = useMutation(addDictionaryWord)
  const { toast } = useToast()
  const [hasToken] = useStorage({
    key: WORDIGO_JWT_TOKEN_COOKIE,
    instance: new Storage({
      area: "local"
    })
  })

  useEffect(() => {
    if (status === "success") {
      toast({
        title: "Successful",
        description: "Word insertion successful.",
        action: (
          <ToastAction className="text-primary" altText="View Dictionary">
            View Dictionary
          </ToastAction>
        )
      })
    }
  }, [status])

  const handleAddLibrary = () => {
    addMutate({ nativeLanguage: sourceLangauge, targetLanguage, text: selectedText, translatedText })
  }

  return (
    <Button disabled={!hasToken || addIsLoading} onClick={handleAddLibrary} variant="default" size="sm">
      {addIsLoading ? (
        <Fragment>
          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Fragment>
      ) : (
        "Save to library"
      )}
    </Button>
  )
}

export default DictionarySelector
