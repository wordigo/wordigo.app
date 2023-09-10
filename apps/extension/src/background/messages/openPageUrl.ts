import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = { slug: string }

export type RequestResponse = boolean

const handler: PlasmoMessaging.MessageHandler<RequestBody, RequestResponse> = async (req, res) => {
  try {
    void chrome.windows.create({ url: process.env.PLASMO_PUBLIC_SITE_URL + "/dashboard/dictionaries/" + req.body.slug })
    res.send(true)
  } catch (err) {
    res.send(false)
  }
}

export default handler
