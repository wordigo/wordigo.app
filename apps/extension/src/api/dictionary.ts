import instance from "~/libs/axios"

export const getUserDictionaries = async (): Promise<any> => {
  const response = await instance.get("/dictionaries/getUserDictionaries")
  return response.data
}

export interface addDictonaryWordType {
  text: string
  translatedText: string
  nativeLanguage: string
  targetLanguage: string
}

export const addDictionaryWord = async (params: addDictonaryWordType): Promise<any> => {
  const response = await instance.post("/words/create", { data: params })
  return response.data
}
