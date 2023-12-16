import { type DictionaryWord } from "../dictionarayWord/type";
import { type IPagination } from "types/global";

export interface Dictionary {
  description: string;
  id: number;
  title: string;
  slug: string;
  updatedDate: string;
  published: boolean;
  userWord?: DictionaryWord[];
  sourceLang?: string;
  targetLang?: string;
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
