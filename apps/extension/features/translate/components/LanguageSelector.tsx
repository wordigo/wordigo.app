import { GoogleSupportLanguages } from "@wordigo/common"
import { ChevronDown } from "lucide-react"

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, ScrollArea } from "~../../packages/ui"

export interface ILanguageSelector {
  supportLanguages?: boolean
  className?: string
  defaultValue?: string
  onSelect?: (value: string) => void
}

const LanguageSelector: React.FC<ILanguageSelector> = ({ className, defaultValue, onSelect }) => {
  const handleSelect = (value: string) => {
    onSelect?.(value)
  }

  const selectedValue = GoogleSupportLanguages.find((test) => test.code === defaultValue)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button
          variant="outline"
          size="default"
          className="rounded-md !h-9 !w-26 !px-3 flex justify-between items-center gap-x-2">
          {selectedValue.language}
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent id="el-language-container">
        <ScrollArea className="w-full h-60 rounded-md">
          {GoogleSupportLanguages.map(({ code, language }) => {
            return <DropdownMenuItem key={code}>{language}</DropdownMenuItem>
          })}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSelector
