import { useState } from "react";
import CButton from "@/components/UI/Button";
import { Share2 } from "lucide-react";

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@wordigo/ui";

import { ShareDictionary } from "./ShareTabel";

export function CreateDictionary({ label }: { label: string }) {
  const [tabel, setTabel] = useState<boolean>(false);
  return (
    <Dialog>
      <>
        <DialogTrigger asChild>
          <Button variant="default" size="sm">
            {label}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex gap-x-2 items-center">
              <Share2 size={18} />
              Published Dictionary
            </DialogTitle>
          </DialogHeader>

          <DialogFooter className="border rounded-lg p-4">
            It is the feature that allows you to share your dictionary publicly. It is only valid for the dictionary you have activated
          </DialogFooter>

          <DialogFooter onClick={() => setTabel(!tabel)}>
            <CButton>Publish</CButton>
          </DialogFooter>
        </DialogContent>
      </>

      {tabel && <ShareDictionary label="Publish" />}
    </Dialog>
  );
}
