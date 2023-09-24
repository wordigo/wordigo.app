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
import { useDebounce } from "usehooks-ts";

const PublishedFilter = () => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
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
          <Label htmlFor="category">{t("public_dictionaries.category")}</Label>
          <Select>
            <SelectTrigger
              id="category"
              className="w-48 px-3 py-2 text-muted-foreground h-10 mt-1.5"
            >
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-left" value="item1">
                Meeting
              </SelectItem>
              <SelectItem className="text-left" value="item2">
                Cooking
              </SelectItem>
              <SelectItem className="text-left" value="item3">
                Sports
              </SelectItem>
              <SelectItem className="text-left" value="item4">
                Business
              </SelectItem>
              <SelectItem className="text-left" value="item5">
                Travel
              </SelectItem>
              <SelectItem className="text-left" value="item6">
                Technology
              </SelectItem>
            </SelectContent>
          </Select>
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
