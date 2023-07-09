import * as ScrollArea from "@radix-ui/react-scroll-area";
import ReactCountryFlag from "react-country-flag";

import { SupportedLanguages } from "@wordigo/common";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

export interface ILanguageSelector {
  supportLanguages?: boolean;
  className?: string;
  defaultValue?: string;
  onSelect?: (value: string) => void;
}

const LanguageSelector: React.FC<ILanguageSelector> = ({ className, defaultValue, supportLanguages = true, onSelect }) => {
  const handleSelect = (value: string) => {
    onSelect?.(value);
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={handleSelect}>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea.Root className="max-h-[400px]" type="auto">
          <SelectGroup>
            <SelectItem value="0" disabled>
              Select language
            </SelectItem>
            {SupportedLanguages.map(({ code, icon, name }) => {
              return (
                <SelectItem key={code} value={code}>
                  <div className="flex items-center gap-x-2">
                    <ReactCountryFlag
                      style={{
                        fontSize: "1em",
                        lineHeight: "1em",
                      }}
                      svg
                      countryCode={icon}
                    />
                    {name}
                  </div>
                </SelectItem>
              );
            })}
          </SelectGroup>
          <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
            <ScrollArea.Thumb className="ScrollAreaThumb" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
