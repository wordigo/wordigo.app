export const getSession = async (token: string): Promise<any> => {
  const response = await fetch(process.env.PLASMO_PUBLIC_SITE_URL + "/api/auth/session", {
    headers: {
      "Content-Type": "application/json",
      Cookie: `next-auth.session-token=${token}`
    },
    credentials: "same-origin",
    mode: "no-cors"
  })
  const data = response.json()
  return data
}