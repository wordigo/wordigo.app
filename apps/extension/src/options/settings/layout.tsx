import SettingsForm from "./settings-form";
import { Separator } from "@wordigo/ui";
import { getLocalMessage } from "~utils/locale";

const Settings = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{getLocalMessage("general")}</h3>
        <p className="text-sm text-muted-foreground">{getLocalMessage("generalDescription")}</p>
      </div>
      <Separator />
      <SettingsForm />
    </div>
  );
};

export default Settings;
