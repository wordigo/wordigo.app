import * as ScrollArea from "@radix-ui/react-scroll-area";
import ReactCountryFlag from "react-country-flag";

import { AllCountryLanguages, SupportedLanguages } from "@wordigo/common";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

export interface ILanguageSelector {
  supportLanguages?: boolean;
}

const LanguageSelector: React.FC<ILanguageSelector> = ({ supportLanguages = true }) => {
  const computedLanguages = supportLanguages ? SupportedLanguages : AllCountryLanguages;

  return (
    <Select>
      <SelectTrigger className="w-[150px] !h-9">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea.Root className="max-h-[400px]" type="auto">
          <SelectGroup>
            <SelectItem value="0" disabled>
              Select language
            </SelectItem>
            {computedLanguages.map(([code, lang]) => {
              return (
                <SelectItem key={code} value={code}>
                  <div className="flex items-center gap-x-2">
                    <ReactCountryFlag
                      style={{
                        fontSize: "1em",
                        lineHeight: "1em",
                      }}
                      svg
                      countryCode={code}
                    />
                    {lang}
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
