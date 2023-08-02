import type { PlasmoMessaging } from "@plasmohq/messaging"

export type RequestBody = {}

export type RequestResponse = string | null

const handler: PlasmoMessaging.MessageHandler<RequestBody, RequestResponse> = async (req, res) => {
  try {
    const token = await chrome.cookies.get({
      name: "__Secure-next-auth.session-token",
      url: "https://localhost:3000"
    })
    res.send(token.value)
  } catch {
    res.send(null)
  }
}

export default handler

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRsc21ub3NtYW5AZ21haWwuY29tIiwiaWQiOiJjbGtub3UwcmowMDAwOGMwMTE3Z2p6MHFkIiwiaWF0IjoxNjkwOTgwNjI1LCJleHAiOjE2OTA5ODQyMjV9.oueQxpKVkBgPnhMbdNhTL-OOQOCbVZpRTjbYyc9TJls

// eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..4P2YWZikjwwzbYgR.yb8n9dhBRQDLbtshlDLyP55FXYOubEVDkK3uNzyiQWXWO4K8AWKRPK13i0jGeeWHMBp9z7xot23KXiVINERlMwKwCENLlfzb3x85lH7ukyK-29AG-CWlKUv5RQCmeOf7KzB0siJXv21Vqw5Z_7ePEzqkdzOymy2iN538JvOKYHvdmQjFoeSZKZFPSgvVsyCcQxRmi_zekyXTm9Flm67KYm-tKU4BtiMFX1b02YZiOvhIWsKa_lMIbYzz1L8DMyqVvs3aKkuFCAE6ktYx6usf_DgDl-qoqm5eZfoonzO8ihQ2KUO8-lJpUVd8_qYTFS5dZoPKRqItlm4WdzoLutbLkeotmrwcZmq68TgScfnaLtWsv1WjEPEVN-CiV5algGY-Eb8kr6K1_r-ycYU6HQZmDzZViBJajuAGsBeT-SMGTwqF3EfArSm-kzX-AaZD8dok-JJDRpn-UUtJe-9a2FQiuO8YrSLLvKOYDjbKbk27QJjSwJVcHCxb16PnGTd55rui1DbNUgwnGyGZsEeyy6Hl9H8F45Lh4ZkJlWQoP3xZeHGiYWvyPoqSZQ7l5UmxdZoIKcMumJ2jmgk0BN7EVZ-urGK4zuWsuHS5oeqYgrfpp_NCwb-79PxR5Bn-2QuOrQOlbD2DKP4fZLkLUo9RNF9ftCDYHPOhtPbSN87HS8G55pIwHBO25EHBcxF6WsHbIoNctLhehHAn3nbUIq3AKPYbPY-s6WiN0Xzjf6vZgqda9YB-aiNDbltXDMgZ9x_0GeIwLzTKw6Dg5_SyNAG0Ecv-QtoAEAsN-gdDZu7tJ9kMfg6EwqhGV-r--ninwttlD1R958EPxjcE7tc.DxnIr6A0ZzS0gczOzkip8g
