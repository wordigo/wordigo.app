import { appRouter, createTRPCContext } from "@acme/api"
import { createNextApiHandler } from "@trpc/server/adapters/next"
import Cors from 'cors'
import { type NextApiRequest, type NextApiResponse } from "next"

const cors = Cors({
  origin: '*', // İzin verilen kaynakları buraya ekleyebilirsiniz
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // İzin verilen HTTP metotları
})

// export API handler
const handler = createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
})

const nextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    cors(req, res, (error) => {
      if (error) {
        return reject(error)
      }
      resolve(handler(req, res))
    })
  })
}

export default nextApiHandler