import { DatePickerWithRange } from "./DatePickerWithRange";
import { Levels } from "./Levels.enum";
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
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { type DateRange } from "react-day-picker";
import { useDebounce } from "usehooks-ts";

const PublishedFilter = () => {
  const [level, setLevel] = useState<string>();
  const { t } = useTranslation();

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
    setLevel(undefined);
    setDate(undefined);
    setSearchValue(undefined);
  };

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
          <Select value={level} onValueChange={(value) => setLevel(value)}>
            <SelectTrigger
              id="level"
              className="w-48 px-3 py-2 text-muted-foreground h-10 mt-1.5"
            >
              <SelectValue placeholder="Level" />
            </SelectTrigger>
            <SelectContent>
              {computedLevels.map(({ label, value }) => (
                <SelectItem key={value} className="text-left" value={value}>
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
            className="md:mt-[1.2rem]"
          >
            {t("public_dictionaries.clear_filters")}
          </Button>
        </Label>
      </section>
    </main>
  );
};

export default PublishedFilter;
