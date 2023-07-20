import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
  ToastAction,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useToast
} from "@wordigo/ui"
import { motion } from "framer-motion"
import { ChevronDown, LanguagesIcon, RotateCw } from "lucide-react"
import { Fragment, useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import trpc from "~libs/trpc"
import { getPopupCordinate } from "~utils"

import { useContextPopover } from "../context/popover"

const DictionarySelector = ({ sourceLangauge, translatedText }: { sourceLangauge: string; translatedText: string }) => {
  const { targetLanguage, selectedText } = useContextPopover()
  const { mutate, data, isLoading } = trpc.dictionary.getUserDictionariesMutation.useMutation()
  const { mutate: addMutate, isLoading: addIsLoading, status } = trpc.word.addWord.useMutation()
  const [showMenu, setShowMenu] = useState(false)
  const { toast } = useToast()

  const handleOpenMenu = async () => {
    const targetValue = !showMenu

    if (targetValue) {
      const token = await sendToBackground({
        name: "getToken"
      })
      if (token) {
        setShowMenu(true)
        mutate()
      } else {
        toast({
          title: "You need to login..",
          description: "You need to be logged in to add words to your dictionary.",
          action: <ToastAction altText="Logi">Login</ToastAction>
        })
      }
    }
  }

  useEffect(() => {
    if (status === "success") {
      toast({
        title: "Successful",
        description: "Word insertion successful.",
        action: <ToastAction altText="View Dictionary">View Dictionary</ToastAction>
      })
    }
  }, [status])

  const handleAddLibrary = (dictionaryId: string) => {
    setShowMenu(false)
    addMutate({ dictionaryId, nativeLanguage: sourceLangauge, targetLanguage, text: selectedText, translatedText })
  }

  return (
    <DropdownMenu open={showMenu} onOpenChange={handleOpenMenu} data-theme="dark">
      <DropdownMenuTrigger asChild className="w-[180px]">
        <Button
          variant="outline"
          size="default"
          className="rounded-md !h-9 !w-26 !px-3 flex justify-between items-center gap-x-2"
          disabled={addIsLoading}>
          {!addIsLoading ? (
            <Fragment>
              Dictionary
              <ChevronDown size={14} />
            </Fragment>
          ) : (
            <div className="flex justify-between items-center w-full">
              Please wait
              <RotateCw className="mr-2 h-4 w-4 animate-spin" />
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px] border-0" data-theme="dark" id="el-popup-container">
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

const FloatingButton = () => {
  const { cordinate, setFloating, setPopup } = useContextPopover()
  const { top, left } = getPopupCordinate(cordinate)

  const handleTogglePopup = () => {
    setFloating(false)
    setPopup(true)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            tabIndex={50}
            className="absolute cursor-pointer z-50"
            initial={{
              top: top - 5,
              left
            }}
            animate={{
              top: top + 15,
              left
            }}>
            <Button className="font-bold !h-8 !w-8" variant="default" onClick={handleTogglePopup} size="icon">
              <LanguagesIcon size={18} />
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p className="!text-sm">Translate selection text</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
