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
