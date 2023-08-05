import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CButton from "@/components/UI/Button";
import { useCreateWordMutation, useGetWordDataMutation } from "@/store/word/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Table2Icon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  useToast,
} from "@wordigo/ui";

import { WordPage } from "../../Translate/word.constant";

const CreateWordSchema = z.object({
  text: z.string().nonempty(),
  translatedText: z.string().nonempty(),
  nativeLanguage: z.string().nonempty(),
  targetLanguage: z.string().nonempty(),
  dictionaryId: z.any(),
});

type CreateWordValues = z.infer<typeof CreateWordSchema>;

export function CreateWord() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const router = useRouter();
  const { id } = router.query as any;
  const [getWordDataMutation] = useGetWordDataMutation();

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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        void getWordDataMutation(id);
        form.reset();
        toast({
          variant: "success",
          title: "Successfull",
          description: data.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Warning",
          description: data.message,
        });
      }
    }
  }, [status]);

  const toggleShow = () => setOpen(!open);

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={toggleShow} variant="default" className="px-4 py-[10px] font-semibold text-sm">
          Add Word
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <Table2Icon size={18} />
            Add Dictionary
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
                      <Input
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        id="text"
                        placeholder={t(WordPage.word)}
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
                    <Label>{t(WordPage.translatedWordLabel)}</Label>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        id="translatedText"
                        placeholder={t(WordPage.translatedWord)}
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
