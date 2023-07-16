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
import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import trpc from "~libs/trpc"

const DictionarySelector = () => {
  const { mutate, data, isLoading } = trpc.dictionary.getUserDictionariesMutation.useMutation()
  const [showMenu, setShowMenu] = useState(false)
  const { toast } = useToast()

  const handleOpenMenu = async () => {
    const targetValue = !showMenu

    if (targetValue) {
      const token = await sendToBackground({
        name: "getToken"
      })
      if (token) {
        setShowMenu(!showMenu)
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

  const handleAddLibrary = () => {}

  return (
    <DropdownMenu open={showMenu} onOpenChange={handleOpenMenu}>
      <DropdownMenuTrigger asChild className="w-[180px]">
        <Button
          variant="outline"
          size="default"
          className="rounded-md !h-9 !w-26 !px-3 flex justify-between items-center gap-x-2">
          Dictionary
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]" id="el-popup-container">
        {isLoading ? (
          <DictionarySelector.Loader />
        ) : (
          data?.dictionaries?.map((item) => <DropdownMenuItem key={item.id}>{item.title}</DropdownMenuItem>)
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
