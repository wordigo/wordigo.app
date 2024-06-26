import CreateDictionary from "../CreateDictionary";
import {
  useCreateWordMutation,
  useGetDictionaryWordsMutation,
} from "@/store/dictionarayWord/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryStatus } from "@reduxjs/toolkit/query";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { Table2Icon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const CreateWordSchema = z.object({
  text: z.string().nonempty(),
  translatedText: z.string().nonempty(),
  nativeLanguage: z.string().nonempty(),
  targetLanguage: z.string().nonempty(),
  dictionaryId: z.any(),
});

type CreateWordValues = z.infer<typeof CreateWordSchema>;

export function CopyWord({
  label,
  className,
  isHaveData,
}: {
  label: string | null;
  className?: React.ReactNode;
  isHaveData: any;
}) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();
  const { id } = router.query as any;
  const [getWordDataMutation] = useGetDictionaryWordsMutation();

  const defaultValues: Partial<CreateWordValues> = {
    text: "",
    translatedText: "",
    nativeLanguage: "EN",
    targetLanguage: "TR",
    dictionaryId: id,
  };

  const form = useForm<CreateWordValues>({
    resolver: zodResolver(CreateWordSchema),
    defaultValues,
  });

  const [addUserDicWords, { status, isLoading, data }] =
    useCreateWordMutation();

  const handleAddWord = (values: CreateWordValues) => {
    void addUserDicWords({
      text: values.text,
      translatedText: values.translatedText,
      nativeLanguage: "TR",
      targetLanguage: "EN",
      dictionaryId: values.dictionaryId,
    });
  };

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      if (data.success) {
        setOpen(false);

        void getWordDataMutation(id);
        form.reset();
        toast.success(t("notifications.success"), {
          description: t("notifications.created_word"),
        });
      } else {
        toast(t("notifications.warning"), {
          description: data.message,
        });
      }
    }
  }, [status]);

  const toggleShow = () => setOpen(!open);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          onClick={toggleShow}
          variant="outline"
          className={cn(
            "dark:bg-white dark:text-black bg-black text-white font-semibold text-sm",
            className
          )}
        >
          {t(label)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <Table2Icon size={18} />
            {t(label)}
          </DialogTitle>
          <button
            onClick={toggleShow}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        <Select>
          <Label htmlFor="selectDictionaries" className="-mb-2">
            Dictionaries
          </Label>
          <SelectTrigger className="w-full h-[40px] px-4">
            <SelectValue placeholder="Dictionaries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center justify-between">
          <CreateDictionary />
          <Button>{t("save")}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
