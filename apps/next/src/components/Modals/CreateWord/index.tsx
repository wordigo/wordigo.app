import CButton from "@/components/UI/Button";
import { useTranslateWordMutation } from "@/store/common/api";
import {
  useCreateWordMutation,
  useGetDictionaryWordsMutation,
} from "@/store/dictionarayWord/api";
import { useGetDictionaryDetailMutation } from "@/store/dictionaries/api";
import { useAppSelector } from "@/utils/hooks";
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
  Switch,
} from "@wordigo/ui";
import { PlusIcon, Table2Icon, X } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useDebounce } from "usehooks-ts";
import { z } from "zod";

const CreateWordSchema = z.object({
  text: z.string().nonempty(),
  translatedText: z.string().nonempty(),
  nativeLanguage: z.string().nonempty(),
  targetLanguage: z.string().nonempty(),
  slug: z.string(),
});

type CreateWordValues = z.infer<typeof CreateWordSchema>;

export function CreateWord() {
  const [autoTranslate, setAutoTranslate] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const { id, slug } = router.query as { id: string; slug: string };
  const [getWordDataMutation] = useGetDictionaryWordsMutation();

  const [getDictionaryDetail] = useGetDictionaryDetailMutation();
  const dictionaryDetail = useAppSelector(
    (state) => state.dictionary.dictionaryDetail
  );
  useEffect(() => {
    open && void getDictionaryDetail({ slug });
  }, [open]);

  const defaultValues: Partial<CreateWordValues> = {
    text: "",
    translatedText: "",
    nativeLanguage:
      dictionaryDetail && dictionaryDetail?.sourceLang?.length > 0
        ? dictionaryDetail?.sourceLang
        : "EN",
    targetLanguage:
      dictionaryDetail && dictionaryDetail?.targetLang?.length > 0
        ? dictionaryDetail?.targetLang
        : "TR",
    slug: slug,
  };

  const form = useForm<CreateWordValues>({
    resolver: zodResolver(CreateWordSchema),
    defaultValues,
  });

  const debouncedWord = useDebounce<string>(form.watch().text, 500);

  const handleAutoTranslate = () => {
    setAutoTranslate(!autoTranslate);
    form.setValue("translatedText", "");
    form.setValue("text", "");
  };

  const [addUserDicWords, { status, isLoading, data }] =
    useCreateWordMutation();

  const [handleTranslate, { data: response, isLoading: translateWordLoading }] =
    useTranslateWordMutation();

  useEffect(() => {
    if (debouncedWord.length > 0 && autoTranslate === true) {
      void handleTranslate({
        query: form.watch().text,
        sourceLanguage: "tr",
        targetLanguage: "en",
      })
        .then((res) =>
          form.setValue("translatedText", res?.data?.data?.translatedText)
        )
        .catch((error) => {
          toast.error(t("notifications.warning"), {
            description: error.message,
          });
        });
    }
  }, [debouncedWord]);

  const handleAddWord = (values: CreateWordValues) => {
    console.log(values);
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
                    <div className="flex items-center justify-between ali w-full">
                      <Label>{t("dic_words.translatedLabel")} </Label>
                      <Label className="flex items-center gap-1">
                        <p className="text-[12px]">
                          {t("dic_words.auto_translate")}
                        </p>
                        <Switch
                          style={{ transform: "scale(0.8)" }}
                          checked={autoTranslate}
                          onCheckedChange={() => handleAutoTranslate()}
                        ></Switch>
                      </Label>
                    </div>
                    <FormControl>
                      <Input
                        {...field}
                        id="translatedText"
                        placeholder={t("dic_words.translatedPlaceholder")}
                        autoCapitalize="none"
                        autoComplete="text"
                        autoCorrect="off"
                        disabled={autoTranslate}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter className="w-full items-center">
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
