import { type DictionaryWord } from "../dictionarayWord/type";
import { IPagination } from "types/global";

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

export interface GetUserDictionariesType
  extends Partial<Dictionary>,
    IPagination {}
