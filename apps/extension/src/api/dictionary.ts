import instance, { type BaseResponse } from "~/libs/axios";
import type { Dictionary } from "~stores/dictionary/types";

export const getUserDictionaries = async (): Promise<BaseResponse<Dictionary[]>> => {
  const response = await instance.get("/dictionaries/getUserDictionaries");
  return response.data;
};

export interface addDictonaryWordType {
  text: string;
  translatedText: string;
  nativeLanguage: string;
  targetLanguage: string;
  dictionaryId?: number;
}

export const addDictionaryWord = async (params: addDictonaryWordType): Promise<any> => {
  const response = await instance.post("/words/create", params);
  return response.data;
};
