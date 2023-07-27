import { useState } from "react";
import { useRouter } from "next/router";
import CButton from "@/components/UI/Button";
import { Share2 } from "lucide-react";
import { useTranslation } from "next-i18next";



import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@wordigo/ui";



import { WordPage } from "../../Translate/word.constant";
import { ShareDictionary } from "./ShareTabel";


export function CreateDictionary() {
  const [tabel, setTabel] = useState<boolean>(false);

  const { t } = useTranslation();

  return (
    <Dialog>
      <>
        <DialogTrigger asChild>
          <Button variant="default" size="sm">
            {t(WordPage.publish)}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex gap-x-2 items-center">
              <Share2 size={18} />
              {t(WordPage.publishTitle)}
            </DialogTitle>
          </DialogHeader>

          <DialogFooter className="border rounded-lg p-4">{t(WordPage.publishDescription)}</DialogFooter>

          <DialogFooter onClick={() => setTabel(!tabel)}>
            <CButton>{t(WordPage.publish)}</CButton>
          </DialogFooter>
        </DialogContent>
      </>

      {tabel && <ShareDictionary label="Publish" />}
    </Dialog>
  );
}