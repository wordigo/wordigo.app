export interface Dictionary {
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
  authorId: string;
  createdDate: string;
  updatedDate: string;
  numberOfWords: number;
}
