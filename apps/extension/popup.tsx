import { useEffect, useState } from "react"

import { trpc } from "~utils/trpc"

function App() {
  const [data, setData] = useState([])
  const getData = async () => {
    const test = await trpc.post.all.query()
    console.log(test)
    setData(test)
  }

  useEffect(() => {
    getData()
  }, [])

  return <div>{data[0]?.content}</div>
}

export default App
