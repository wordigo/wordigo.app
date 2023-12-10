import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { AllCountryLanguages, SupportedLanguages } from "@wordigo/common";
import ReactCountryFlag from "react-country-flag";

export interface ILanguageSelector {
  placeholder?: string;
  detectLanguage?: string;
  providerLanguages?: boolean;
  className?: string;
  defaultValue?: string;
  onSelect?: (value: string) => void;
  value?: string;
}

const LanguageSelector: React.FC<ILanguageSelector> = ({ className, value, defaultValue, placeholder, detectLanguage, providerLanguages = false, onSelect }) => {
  const handleSelect = (value: string) => {
    onSelect?.(value);
  };

  const computedLanguages = providerLanguages ? AllCountryLanguages : SupportedLanguages;

  return (
    <Select value={value || (detectLanguage && defaultValue)} defaultValue={detectLanguage && !defaultValue ? "DT" : defaultValue || "0"} onValueChange={handleSelect}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder || "Select language"} />
      </SelectTrigger>
      <SelectContent>
        <ScrollArea.Root className="max-h-[400px] overflow-auto" type="auto">
          <SelectGroup>
            {providerLanguages && (
              <SelectItem className="text-start" value="0" disabled>
                {placeholder || "Select language"}
              </SelectItem>
            )}
            {detectLanguage && !defaultValue && (
              <SelectItem key="DT" value="DT">
                <div className="flex items-center gap-x-2">
                  <ReactCountryFlag
                    style={{
                      fontSize: "1em",
                      lineHeight: "1em",
                    }}
                    svg
                    alt="Detect Language"
                    countryCode="DT"
                  />
                  {detectLanguage || "Detect Language"}
                </div>
              </SelectItem>
            )}
            {computedLanguages.map(({ code, name, icon }) => {
              return (
                <SelectItem key={code} value={code}>
                  <div className="flex w-fit items-center gap-x-2 text-[12px]">
                    <ReactCountryFlag
                      style={{
                        fontSize: "1em",
                        lineHeight: "1em",
                      }}
                      svg
                      alt={name}
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
