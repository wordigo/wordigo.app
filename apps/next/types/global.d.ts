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
  numberOfWords?: number;
  id: number;
  title: string;
  sourceLang: string;
  targetLang: string;
  slug: string;
  image: string;
  description: string;
  rate: number;
  level: number;
  published: boolean;
  createdDate: string;
  updatedDate: string;
  author: IAuthor;
  words: IWord[];
}

export interface IAuthor {
  name: string;
  avatar_url: string;
}

export interface IWord {
  id: number;
  text: string;
  status: number;
  translatedText: string;
  nativeLanguage: string;
  targetLanguage: string;
  createdDate: string;
  updatedDate: string;
}
