import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
  ToastAction,
  useToast
} from "@wordigo/ui"
import { ChevronDown, RotateCw } from "lucide-react"
import { Fragment, useEffect, useState } from "react"
import { useMutation } from "react-query"

import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import { getUserDictionaries } from "../api/dictionary"
import { useContextPopover } from "../context/popover"

const DictionarySelector = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const [theme] = useStorage("theme")
  const { targetLanguage, selectedText } = useContextPopover()
  const { mutate, data, isLoading } = useMutation(getUserDictionaries)
  // const { mutate: addMutate, isLoading: addIsLoading, status } = trpc.word.addWord.useMutation()
  const [showMenu, setShowMenu] = useState(false)
  const { toast } = useToast()

  const handleOpenMenu = async () => {
    const targetValue = !showMenu

    if (targetValue) {
      const token = await sendToBackground({
        name: "getToken"
      })
      console.log(token)

      if (token) {
        setShowMenu(true)
        mutate()
      } else {
        toast({
          title: "You need to login..",
          description: "You need to be logged in to add words to your dictionary.",
          action: (
            <ToastAction className="text-primary" altText="Logi">
              Login
            </ToastAction>
          )
        })
      }
    }
  }

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

  const handleAddLibrary = (dictionaryId: string) => {
    setShowMenu(false)
    // addMutate({ dictionaryId, nativeLanguage: sourceLangauge, targetLanguage, text: selectedText, translatedText })
  }

  return (
    <DropdownMenu open={showMenu} onOpenChange={handleOpenMenu}>
      <DropdownMenuTrigger asChild className="w-[180px]">
        <Button
          variant="outline"
          size="default"
          className="rounded-md !h-9 !w-26 !px-3 flex justify-between items-center gap-x-2"
          // disabled={addIsLoading}
        >
          <Fragment>
            Dictionary
            <ChevronDown size={14} />
          </Fragment>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent data-theme={theme || "light"} className="w-[180px] border-0" id="el-popup-container">
        {isLoading ? (
          <DictionarySelector.Loader />
        ) : (
          data?.data?.map((item) => (
            <DropdownMenuItem onClick={() => handleAddLibrary(item.id)} key={item.id}>
              {item.title}
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

DictionarySelector.Loader = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 w-full rounded" />
    </div>
  )
}

export default DictionarySelector
