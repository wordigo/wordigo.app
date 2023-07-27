import { useRouter as Navigation } from "next/navigation";
import { useRouter } from "next/router";
import CButton from "@/components/UI/Button";
import { api } from "@/libs/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { WholeWord } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
} from "@wordigo/ui";

import { WordPage } from "../../Translate/word.constant";

const CreateWordSchema = z.object({
  text: z.string().nonempty(),
  translateText: z.string().nonempty(),
  nativeLanguage: z.string().nonempty(),
  targetLanguage: z.string().nonempty(),
});

type CreateWordValues = z.infer<typeof CreateWordSchema>;

export function CreateWord() {
  const { mutate, isLoading } = api.word.addWord.useMutation();

  const router = useRouter();
  const { id } = router.query as any;
  const Refresh = Navigation();

  const { t } = useTranslation();

  const defaultValues: Partial<CreateWordValues> = {
    text: "",
    translateText: "",
    nativeLanguage: "TR",
    targetLanguage: "EN",
  };

  const form = useForm<CreateWordValues>({
    resolver: zodResolver(CreateWordSchema),
    defaultValues,
  });

  const handleCreateWord = (values: CreateWordValues) => {
    mutate({
      dictionaryId: id,
      nativeLanguage: "EN",
      targetLanguage: "TR",
      text: values.text,
      translatedText: values.translateText,
    });
    void Refresh.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" size="sm">
          {t(WordPage.addWord)}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-x-2 items-center">
            <WholeWord size={18} />
            {t(WordPage.addWord)}
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateWord)} className="space-y-4">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
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
                control={form.control}
                name="translateText"
                render={({ field }) => (
                  <FormItem className="grid gap-1">
                    <Label>{t(WordPage.translatedWordLabel)}</Label>
                    <FormControl>
                      <Input
                        {...field}
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        id="translateText"
                        placeholder={t(WordPage.translatedWord)}
                        autoCapitalize="none"
                        autoComplete="email"
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
