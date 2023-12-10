import { type Dictionary } from "../dictionaries/type";
import { type IPagination } from "types/global";

export interface DictionaryWord {
  id: string;
  text: string;
  translatedText: string;
  updatedDate: string;
  createdDate: string;
}

export interface ResponseDictionaryWords extends Dictionary {
  numberOfWords: number;
  words: DictionaryWord[];
}

export interface GetUserDictionaryWordsType
  extends Partial<Dictionary>,
    IPagination {}
