import type { PlasmoMessaging } from "@plasmohq/messaging"

import { getSession } from "~api/auth"

export type RequestBody = {}

export type RequestResponse = string | null

const handler: PlasmoMessaging.MessageHandler<RequestBody, any> = async (req, res) => {
  try {
    const token = await chrome.cookies.get({
      name: "__Secure-next-auth.session-token",
      url: "https://localhost:3000"
    })
    const data = await getSession({ sessionToken: token.value })
    console.log(data)

    res.send(token)
  } catch {
    res.send(null)
  }
}

export default handler
