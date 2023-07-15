import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@wordigo/ui"
import { ChevronDown } from "lucide-react"

export function DictionarySelector() {
  return (
    <DropdownMenu>
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
        <DropdownMenuItem>Default Dictionary</DropdownMenuItem>
        <DropdownMenuItem>Private</DropdownMenuItem>
        <DropdownMenuItem>Software</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
