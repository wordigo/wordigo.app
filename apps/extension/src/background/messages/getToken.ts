import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {}

export type RequestResponse = string | null

const handler: PlasmoMessaging.MessageHandler<RequestBody, RequestResponse> = async (req, res) => {
  try {
    const token = JSON.parse(
      decodeURIComponent(
        (
          await chrome.cookies.get({
            name: "token",
            url: "https://wordigo.app"
          })
        )?.value || ""
      )
    )[0]
    res.send(token as string)
  } catch {
    res.send(null)
  }
}

export default handler
