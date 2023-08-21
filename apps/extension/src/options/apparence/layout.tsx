import ApparanceForm from "./apparance-form";
import { Separator } from "@wordigo/ui";
import { getLocalMessage } from "~utils/locale";

const Apparance = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">{getLocalMessage("apparance")}</h3>
        <p className="text-sm text-muted-foreground">{getLocalMessage("apparanceDesciption")}</p>
      </div>
      <Separator />
      <ApparanceForm />
    </div>
  );
};

export default Apparance;
e