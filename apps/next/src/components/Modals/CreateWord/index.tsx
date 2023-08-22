import { WordPage } from "../../Translate/word.constant";
import CButton from "@/components/UI/Button";
import { useCreateWordMutation, useGetDictionaryWordsMutation } from "@/store/dictionarayWord/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Form, FormControl, FormField, FormItem, FormMessage, Input, Label, useToast } from "@wordigo/ui";
import { Table2Icon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateWordSchema = z.object({
  text: z.string().nonempty(),
  translatedText: z.string().nonempty(),
  nativeLanguage: z.string().nonempty(),
  targetLanguage: z.string().nonempty(),
  dictionaryId: z.any(),
});

type CreateWordValues = z.infer<typeof CreateWordSchema>;

export function CreateWord({ label }: { label: string | null }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
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

  const [addUserDicWords, { status, isLoading, data }] = useCreateWordMutation();

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
    if (status === "fulfilled") {
      if (data.success) {
        setOpen(false);

        void getWordDataMutation(id);
        form.reset();
        toast({
          variant: "success",
          title: t("notifications.success"),
          description: t("notifications.created_word"),
        });
      } else {
        toast({
          variant: "destructive",
          title: t("notifications.warning"),
          description: data.message,
        });
      }
    }
  }, [status]);

  const toggleShow = () => setOpen(!open);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={toggleShow} variant="outline" className="dark:bg-white dark:text-black bg-black text-white font-semibold text-sm">
          {t(label)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <Table2Icon size={18} />
            Add Word
          </DialogTitle>
          <button
            onClick={toggleShow}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <Form {...(form as any)}>
          <form onSubmit={form.handleSubmit(handleAddWord)} className="space-y-4">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control as never}
                name="text"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label>{t(WordPage.wordLabel)}</Label>
                    <FormControl>
                      <Input {...field} id="text" placeholder={t(WordPage.word)} autoCapitalize="none" autoComplete="email" autoCorrect="off" />
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
                    <Label>{t(WordPage.translatedWordLabel)}</Label>
                    <FormControl>
                      <Input {...field} id="translatedText" placeholder={t(WordPage.translatedWord)} autoCapitalize="none" autoComplete="text" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <CButton loading={isLoading} type="submit">
                  {t(WordPage.saveWord)}
                </CButton>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
