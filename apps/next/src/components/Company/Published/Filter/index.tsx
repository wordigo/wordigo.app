import { DatePickerWithRange } from "./DatePickerWithRange";
import { Levels } from "./Levels.enum";
import { useGetPublicDictionariesMutation } from "@/store/publicDictionaries/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { type DateRange } from "react-day-picker";
import { useDebounce, useWindowSize } from "usehooks-ts";

const PublishedFilter = ({ isAccordionShow, setIsAccordionShow }: any) => {
  const { t } = useTranslation();

  const [level, setLevel] = useState<string>("0");
  const [searchValue, setSearchValue] = useState<string>();
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const [date, setDate] = useState<DateRange | undefined>({
    from: null,
    to: null,
  });

  const [handleGetPublicDictionaries] = useGetPublicDictionariesMutation();

  useEffect(() => {
    void handleGetPublicDictionaries({
      search: debouncedSearchValue,
      level,
      page: 1,
      size: 10,
    });
  }, [debouncedSearchValue, level]);

  const computedLevels = Object.keys(Levels).map((level) => ({
    label: level.toUpperCase() + " " + t("general.level"),
    value: Levels[level],
  }));

  const handleClearFilters = () => {
    setLevel("0");
    setDate(undefined);
    setSearchValue("");
  };

  const { width } = useWindowSize();

  const handleAccordion = () => {
    setIsAccordionShow(!isAccordionShow);
  };

  return (
    <div className="relative mx-auto sm:mx-0 w-full max-w-sm sm:max-w-none flex md:flex-col lg:flex-row items-end lg:justify-between gap-4">
      <div className="w-full lg:max-w-[250px] md:mb-1">
        <Label htmlFor="search">{t("public_dictionaries.search")}</Label>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={t("public_dictionaries.search")}
          className="mt-2"
          id="search"
        />
      </div>

      <div className="md:w-full">
        <Accordion
          type="single"
          collapsible
          value={isAccordionShow || width >= 768 ? "item-1" : ""}
          className="mt-2 md:mt-0"
        >
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger
              onClick={handleAccordion}
              className="w-10 sm:w-auto sm:px-3.5 h-10 border rounded-md md:hidden flex items-center justify-center gap-3"
            >
              <div className="hidden sm:block mb-0.5">
                {t("general.filter")}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <section className="absolute md:static left-0 z-50 mt-4 md:mb-1 md:mt-0 w-full flex flex-col sm:flex-row sm:items-end lg:justify-end gap-4">
                <div className="w-full lg:max-w-[250px] flex flex-col gap-2">
                  <Label htmlFor="category">
                    {t("public_dictionaries.date")}
                  </Label>
                  <DatePickerWithRange date={date} setDate={setDate} />
                </div>

                <div className="w-full lg:max-w-[250px] grid gap-2">
                  <Label htmlFor="level">
                    {t("public_dictionaries.level")}
                  </Label>
                  <Select
                    value={level}
                    onValueChange={(value) => setLevel(value.toString())}
                  >
                    <SelectTrigger
                      id="level"
                      className="px-3 py-2 text-muted-foreground h-10 mt-1"
                    >
                      <SelectValue placeholder="Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem key={0} className="text-left" value={"0"}>
                        {t("general.all_levels")}
                      </SelectItem>
                      {computedLevels.map(({ label, value }) => (
                        <SelectItem
                          key={value}
                          className="text-left"
                          value={value.toString()}
                        >
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Label htmlFor="clearFilters">
                  <Button
                    onClick={handleClearFilters}
                    variant="outline"
                    className="w-full sm:w-max"
                  >
                    {t("public_dictionaries.clear_filters")}
                  </Button>
                </Label>
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default PublishedFilter;
