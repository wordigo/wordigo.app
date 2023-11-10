export interface DictionaryWord {
  id: string;
  text: string;
  translatedText: string;
  updatedDate: string;
}

export interface ResponseDictionaryWords {
  numberOfWords: number;
  words: DictionaryWord[];
}
