import instance from "~/libs/axios"

export const getSession = async ({ sessionToken }: { sessionToken: string }): Promise<any> => {
  const response = await instance.get("/api/auth/session", {
    baseURL: "http://localhost:3000",
    headers: {
      Cookie: `next-auth.session-token=${sessionToken}`
    }
  })
  return response.data
}
