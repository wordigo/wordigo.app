import { type IPagination } from "types/global";
import { type Dictionary } from "../dictionaries/type";

export interface DictionaryWord {
  id: string;
  text: string;
  translatedText: string;
  updatedDate: string;
}

export interface ResponseDictionaryWords extends Dictionary {
  numberOfWords: number;
  words: DictionaryWord[];
}

export interface GetUserDictionaryWordsType
  extends Partial<Dictionary>,
    IPagination {}
