import { Separator } from "@wordigo/ui"

import ApparanceForm from "./apparance-form"

const Apparance = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Apparance</h3>
        <p className="text-sm text-muted-foreground">
          Customize the appearance of the app. Automatically switch between day and night themes.
        </p>
      </div>
      <Separator />
      <ApparanceForm />
    </div>
  )
}

export default Apparance
