import { type ReactElement } from "react";
import CreateDictionary from "@/components/Modals/CreateDictionaries";
import { CreateWord } from "@/components/Modals/CreateWord";
import { Share } from "@/components/Modals/Settings";

export interface IHeaders {
  title: string;
  description: string | null;
  src: string | null;
  components: ReactElement;
  child_components?: ReactElement;
}

const useHeaders = (selectedSrc: string | null = null): IHeaders[] => {
  const headers = [
    {
      src: "/dashboard/dictionaries",
      title: "Lorem Dictionaries",
      description: "Lorem Ipsum Dictionaries",
      components: <CreateDictionary label={"dictionaries.add_dictionaries"} />,
    },
    {
      src: "/dashboard/dictionaries/[id]",
      title: "Lorem Word",
      description: "Lorem Ipsum Word",
      components: <CreateWord label={"dic_words.add_word"} />,
      child_components: <Share />,
    },
  ];

  if (selectedSrc) {
    return headers.filter((header) => header.src === selectedSrc);
  }

  return headers;
};

export default useHeaders;
