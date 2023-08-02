import instance from "~/libs/axios"

export const getUserDictionaries = async (): Promise<any> => {
  const response = await instance.get("/dictionaries/getUserDictionaries")
  return response.data
}
