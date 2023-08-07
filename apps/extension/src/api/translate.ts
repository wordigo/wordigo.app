import axios from "axios"

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

export const blobToDataURL = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(blob)
  })
}

export type TextToSpeechParams = { text: string; phonetic?: string }

export const TextToSpeechApi = async ({ text, phonetic = "en-US" }: TextToSpeechParams): Promise<any> => {
  const res = await fetch(
    `https://translate.googleapis.com/translate_tts?client=gtx&tl=${phonetic}&q=${encodeURIComponent(text)}`,
    {
      credentials: "same-origin",
      mode: "no-cors"
    }
  )
  const blob = await res.blob()
  console.log(blob)

  const dataURL = await blobToDataURL(blob)

  return dataURL
}
