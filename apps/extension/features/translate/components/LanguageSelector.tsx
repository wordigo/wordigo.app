import { AllCountryLanguages, type ILanguage } from "@wordigo/common"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, ScrollArea } from "~../../packages/ui"

export interface ILanguageSelector {
  supportLanguages?: boolean
  className?: string
  defaultValue?: string
  onSelect?: (value: ILanguage) => void
}

const LanguageSelector: React.FC<ILanguageSelector> = ({ defaultValue, onSelect }) => {
  const computedDefaultValue = AllCountryLanguages.find((lang) => lang.code === defaultValue)
  const [selected, setSelected] = useState<ILanguage>(computedDefaultValue)

  const handleSelect = (code: string) => {
    const value = AllCountryLanguages.find((lang) => lang.code === code)
    setSelected(value)
    onSelect?.(value)
  }

  const selectedValue = AllCountryLanguages.find((lang) => lang.code === selected?.code)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="rounded-md !h-9 w-[120px] !px-3 flex justify-between items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <ReactCountryFlag
              style={{
                fontSize: "1em",
                lineHeight: "1em"
              }}
              svg
              countryCode={selectedValue.icon}
            />
            {selectedValue.name}
          </div>
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent id="el-popup-container">
        <ScrollArea className="w-full h-60 rounded-md">
          {AllCountryLanguages.map(({ code, name, icon }) => {
            return (
              <DropdownMenuItem onClick={() => handleSelect(code)} key={code}>
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag
                    style={{
                      fontSize: "1em",
                      lineHeight: "1em"
                    }}
                    svg
                    countryCode={icon}
                  />
                  {name}
                </div>
              </DropdownMenuItem>
            )
          })}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageSelector
