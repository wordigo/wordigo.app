export interface GetDictionaryIdType {
  slug: string;
}

export interface GetPublicDictionariesType {
  search: string;
  page: number;
  size: number;
}

export interface GetPublicDictionaryBySlugType {
  slug: string;
}

export interface CreateDictionaryType {
  title: string;
  sourceLang?: string;
  targetLang?: string;
}
