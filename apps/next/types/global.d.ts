import { type DictionaryWord } from "@/store/dictionarayWord/type";

export interface IResponse<T = null> {
  data: T;
  message: string;
  messageCode: string;
  success: boolean;
}

export interface PageProps {
  _nextI18Next: NextI18Next;
}

export interface NextI18Next {
  initialI18nStore: InitialI18nStore;
  initialLocale: string;
  ns: string[];
  userConfig: UserConfig;
}

export interface InitialI18nStore {
  tr: Tr;
  en: En;
}

export interface IDictionary {
  id: number;
  title: string;
  description: string;
  slug: string;
  published: boolean;
  image: string;
  rate: number;
  level: number;
  createdDate: string;
  updatedDate: string;
  userWord?: DictionaryWord[];
  words?: DictionaryWord[];
  author: {
    name: string;
    avatar_url: string;
  };
}
