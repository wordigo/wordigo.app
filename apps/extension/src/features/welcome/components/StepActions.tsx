import { Button } from "@wordigo/ui"

import { useSteps } from "../context/Step"

const StepActions = () => {
  const { current, total, prev, next } = useSteps()

  if (current === total) return

  return (
    <div className="flex gap-x-4 z-50 container w-full justify-end items-center">
      <Button variant="outline" size="sm" onClick={prev}>
        Previous
      </Button>
      <Button size="sm" onClick={next}>
        Next
      </Button>
    </div>
  )
}

export default StepActions
