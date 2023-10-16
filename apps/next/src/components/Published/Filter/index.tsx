import { DatePickerWithRange } from "./DatePickerWithRange";
import { useGetPublicDictionariesMutation } from "@/store/publicDictionaries/api";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@wordigo/ui";
import { addDays } from "date-fns";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { type DateRange } from "react-day-picker";
import { useDebounce } from "usehooks-ts";

const PublishedFilter = () => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  console.log(date);

  const [handleGetPublicDictionaries] = useGetPublicDictionariesMutation();
  useEffect(() => {
    void handleGetPublicDictionaries({
      search: debouncedSearchValue,
      page: 1,
      size: 10,
    });
  }, [debouncedSearchValue]);

  return (
    <main className="flex items-end justify-between mt-10 max-lg:flex-col max-lg:spacse-y-5 max-lg:justify-center max-lg:items-center">
      <section>
        <Label htmlFor="search">{t("public_dictionaries.search")}</Label>
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={t("public_dictionaries.search")}
          className="w-80 mt-1.5 max-md:w-48"
          id="search"
        />
      </section>
      <section className="flex items-center space-x-2 max-md:flex-col max-md:space-y-5">
        <div className="flex flex-col">
          <Label htmlFor="category" className="mb-2">
            {t("public_dictionaries.date")}
          </Label>
          <DatePickerWithRange date={date} setDate={setDate} />
        </div>
        <div className="ml-3 grid">
          <Label htmlFor="level">{t("public_dictionaries.level")}</Label>
          <Select>
            <SelectTrigger
              id="level"
              className="w-48 px-3 py-2 text-muted-foreground h-10 mt-1.5"
            >
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-left" value="a1">
                A1 Level
              </SelectItem>
              <SelectItem className="text-left" value="a2">
                A2 Level
              </SelectItem>
              <SelectItem className="text-left" value="b1">
                B1 Level
              </SelectItem>
              <SelectItem className="text-left" value="b2">
                B2 Level
              </SelectItem>
              <SelectItem className="text-left" value="c1">
                C1 Level
              </SelectItem>
              <SelectItem className="text-left" value="c2">
                C2 Level
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Label htmlFor="clearFilters">
          <Button variant="outline" className="md:mt-[1.2rem]">
            {t("public_dictionaries.clear_filters")}
          </Button>
        </Label>
      </section>
    </main>
  );
};

export default PublishedFilter;
