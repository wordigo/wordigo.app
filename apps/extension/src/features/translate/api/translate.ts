import instance from "~/libs/axios"

export interface BaseTranslate {
  sourceLanguage: string
  targetLanguage: string
}

export type TranslateParams = BaseTranslate & { query: string }
export type TranslateResponse = BaseTranslate & { translatedText: string }

export const TranslateApi = async (params: TranslateParams): Promise<TranslateResponse> => {
  const response = await instance.post("/translation/translate", params)
  return response.data
}
