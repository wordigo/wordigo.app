export interface Dictionary {
  title: string;
  description: string;
  slug: string;
  published: boolean;
  image: string;
  rate: number;
  level: number;
  createdDate: string;
  updatedDate: string;
}

export interface GetDictionaryIdType {
  slug: string;
}

export interface GetPublicDictionariesType {
  search: string;
  page: number;
  size: number;
}

export interface CreateDictionaryType {
  title: string;
  sourceLang?: string;
  targetLang?: string;
}
