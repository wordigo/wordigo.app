import CreateDictionary from "@/components/Modals/CreateDictionary";
import { CreateWord } from "@/components/Modals/CreateWord";
import { DictionarySettingsLink } from "@/components/Modals/Settings";
import { useTranslation } from "next-i18next";
import { type ReactElement } from "react";

export interface IHeaders {
  title: string;
  description: string | null;
  src: string | null;
  components?: ReactElement[];
}

const useHeaders = (selectedSrc: string | null = null): IHeaders[] => {
  const { t } = useTranslation();

  const headers = [
    {
      src: "/dashboard",
      title: t("headers.dashboard.title"),
      description: t("headers.dashboard.description"),
    },
    {
      src: "/dashboard/dictionaries",
      title: t("headers.dictionaries.title"),
      description: t("headers.dictionaries.description"),
      components: [<CreateDictionary />],
    },
    {
      src: "/dashboard/dictionaries/[slug]",
      title: t("headers.dictionaries_detail.title"),
      description: t("headers.dictionaries_detail.description"),
      components: [
        <CreateWord label={"dic_words.add_word"} />,
        <DictionarySettingsLink />,
      ],
    },
  ];

  if (selectedSrc) {
    return headers.filter((header) => header.src === selectedSrc);
  }

  return headers;
};

export default useHeaders;
