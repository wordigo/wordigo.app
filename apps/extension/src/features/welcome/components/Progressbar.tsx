import { cn } from "@wordigo/ui/lib/utils"
import { useMemo } from "react"

import { useSteps } from "../context/Step"

const Progressbar = () => {
  const { current, total } = useSteps()

  const progressCalculate = useMemo(() => (current / total) * 96, [current, total])

  return (
    <div className="flex justify-between mb-1 w-1/2">
      <div className="w-full bg-gray-200 rounded h-3 dark:bg-gray-700">
        <div className="bg-gradient-to-r from-primary-blue-300 to-primary-blue-500 h-3 rounded" style={{ width: progressCalculate + "%" }}></div>
      </div>
    </div>
  )
}

export default Progressbar
