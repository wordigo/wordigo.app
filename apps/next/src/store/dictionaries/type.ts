import { type DictionaryWord } from "../dictionarayWord/type";

export interface Dictionary {
  title: string;
  slug: string;
  updatedDate: string;
  published: boolean;
  userWord?: DictionaryWord[];
}

export interface GetDictionaryIdType {
  slug: string;
}

export interface CreateDictionaryType {
  title: string;
  sourceLang?: string;
  targetLang?: string;
}
