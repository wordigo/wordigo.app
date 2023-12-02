import CreateDictionary from "@/components/Modals/CreateDictionary";
import { CreateWord } from "@/components/Modals/CreateWord";
import { DictionarySettingsLink } from "@/components/Modals/Settings";
import { capitalizeWords } from "@/utils";
import { useAppSelector } from "@/utils/hooks";
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

  const dictionaryDetail = useAppSelector(
    (state) => state?.dictionaryWord?.dictionaryWords
  );

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
      components: [<CreateDictionary key="create_dictionary" />],
    },
    {
      src: "/dashboard/dictionaries/[slug]",
      title: capitalizeWords(dictionaryDetail?.title),
      description:
        dictionaryDetail?.description ||
        t("headers.dictionaries_detail.description"),
      components: [
        <CreateWord key="dictionary_add_words" />,
        <DictionarySettingsLink key="dictionary_settings_link" />,
      ],
    },
  ];

  if (selectedSrc) {
    return headers.filter((header) => header.src === selectedSrc);
  }

  return headers;
};

export default useHeaders;
