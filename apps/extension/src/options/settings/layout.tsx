import { Separator } from "@wordigo/ui"

import SettingsForm from "./settings-form"

const Settings = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">General</h3>
        <p className="text-sm text-muted-foreground">Update your translation preference and select target language..</p>
      </div>
      <Separator />
      <SettingsForm />
    </div>
  )
}

export default Settings
