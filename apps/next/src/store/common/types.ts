import { IResponse } from "types/global";

export interface BaseTranslate {
  sourceLanguage?: string;
  targetLanguage: string;
}

export type TranslateParams = BaseTranslate & { query: string };

export type TranslateResponseData = BaseTranslate & { translatedText: string };
export type TranslateResponse = IResponse<TranslateResponseData>;
