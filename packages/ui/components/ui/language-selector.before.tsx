import * as ScrollArea from "@radix-ui/react-scroll-area";
import ReactCountryFlag from "react-country-flag";

import { AllCountryLanguages, SupportedLanguages } from "@wordigo/common";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

export interface ILanguageSelector {
  placeholder?: string;
  providerLanguages?: boolean;
  targetLanguageSelect?: boolean;
  className?: string;
  defaultValue?: string;
  onSelect?: (value: string) => void;
}

const LanguageSelector: React.FC<ILanguageSelector> = ({
  className,
  defaultValue,
  targetLanguageSelect,
  placeholder,
  providerLanguages = false,
  onSelect,
}) => {
  const handleSelect = (value: string) => {
    onSelect?.(value);
  };

  const computedLanguages = providerLanguages ? AllCountryLanguages : SupportedLanguages;

  return (
    <Select defaultValue={targetLanguageSelect ? "DT" : defaultValue || "0"} onValueChange={handleSelect}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder || "Select language"} />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea.Root className="max-h-[400px]" type="auto">
          <SelectGroup>
            <SelectItem value="0" disabled>
              Select language
            </SelectItem>
            {targetLanguageSelect && (
              <SelectItem key="DT" value="DT">
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag
                    style={{
                      fontSize: "1em",
                      lineHeight: "1em",
                    }}
                    svg
                    countryCode="DT"
                  />
                  Detect Language
                </div>
              </SelectItem>
            )}
            {computedLanguages.map(({ code, name, icon }) => {
              return (
                <SelectItem key={code} value={code}>
                  <div className="flex items-center gap-x-2">
                    <ReactCountryFlag
                      style={{
                        fontSize: "1em",
                        lineHeight: "1em",
                      }}
                      svg
                      countryCode={icon as string}
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
