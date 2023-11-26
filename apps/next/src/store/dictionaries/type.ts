import { type IPagination } from "types/global";
import { type DictionaryWord } from "../dictionarayWord/type";

export interface Dictionary {
  id: number;
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

export interface UpdateDictionaryImageType {
  dictionaryId: number;
  encodedImage: string;
}

export interface GetUserDictionariesType
  extends Partial<Dictionary>,
    IPagination {}
