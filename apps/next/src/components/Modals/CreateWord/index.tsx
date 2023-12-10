import CButton from "@/components/UI/Button";
import {
  useCreateWordMutation,
  useGetDictionaryWordsMutation,
} from "@/store/dictionarayWord/api";
import { zodResolver } from "@hookform/resolvers/zod";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { QueryStatus } from "@reduxjs/toolkit/query";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from "@wordigo/ui";
import { PlusIcon, Table2Icon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const CreateWordSchema = z.object({
  text: z.string().nonempty(),
  translatedText: z.string().nonempty(),
  nativeLanguage: z.string().nonempty(),
  targetLanguage: z.string().nonempty(),
  dictionaryId: z.number(),
});

type CreateWordValues = z.infer<typeof CreateWordSchema>;

export function CreateWord() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();
  const { id } = router.query as { id: string };
  const [getWordDataMutation] = useGetDictionaryWordsMutation();

  const defaultValues: Partial<CreateWordValues> = {
    text: "",
    translatedText: "",
    nativeLanguage: "EN",
    targetLanguage: "TR",
    dictionaryId: Number(id),
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

        void getWordDataMutation({ id: Number(id) });
        form.reset();
        toast(t("notifications.success"), {
          description: t("notifications.created_word"),
        });
      } else {
        toast.error(t("notifications.warning"), {
          description: data.message,
        });
      }
    }
  }, [status]);

  const toggleShow = () => setOpen(!open);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={toggleShow}
          variant="default"
          size="sm"
          className="font-normal text-sm"
        >
          <PlusIcon size={16} className="text-primary-foreground" />
          {t("dic_words.add_word")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <Table2Icon size={18} />
            {t("dic_words.add_word")}
          </DialogTitle>
          <DialogPrimitive.Close asChild>
            <button
              onClick={toggleShow}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X size={18} />
              <span className="sr-only">Close</span>
            </button>
          </DialogPrimitive.Close>
        </DialogHeader>

        <Form {...(form as any)}>
          <form
            onSubmit={form.handleSubmit(handleAddWord)}
            className="space-y-4"
          >
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control as never}
                name="text"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label>{t("dic_words.wordLabel")}</Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="text"
                        placeholder={t("dic_words.wordPlaceholder")}
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control as never}
                name="translatedText"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label>{t("dic_words.translatedLabel")} </Label>
                    <FormControl>
                      <Input
                        {...field}
                        id="translatedText"
                        placeholder={t("dic_words.translatedPlaceholder")}
                        autoCapitalize="none"
                        autoComplete="text"
                        autoCorrect="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <CButton loading={isLoading} type="submit">
                  {t("save")}
                </CButton>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
