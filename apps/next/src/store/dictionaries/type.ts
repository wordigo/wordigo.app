import { type DictionaryWord } from "../word/type";

export interface Dictionary {
  title: string;
  slug: string;
  userWord?: DictionaryWord[];
}
