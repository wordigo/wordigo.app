import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {}

export type RequestResponse = boolean

const handler: PlasmoMessaging.MessageHandler<RequestBody, RequestResponse> = async (req, res) => {
  try {
    chrome.runtime.openOptionsPage()
    res.send(true)
  } catch (err) {
    res.send(false)
  }
}

export default handler
