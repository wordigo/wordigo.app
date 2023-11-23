import Container from "../SettingsContainer";
import CButton from "@/components/UI/Button";
import CInput from "@/components/UI/Input/Input";
import { DictionariesSettingsSchema } from "@/schemas/dictionaries.settings";
import {
  useGetDictionaryDetailMutation,
  useUpdateDictionariesMutation,
} from "@/store/dictionaries/api";
import { useAppSelector } from "@/utils/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Separator,
  Switch,
  Textarea,
} from "@wordigo/ui";
import { Copy } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

export type DictionariesValues = z.infer<typeof DictionariesSettingsSchema>;

export default function Settings() {
  const { t } = useTranslation();
  const { data } = useSession();
  const router = useRouter();
  const { slug } = router.query as { slug: string };

  const [dictionaryUpdate, { isLoading, status, data: updateData }] =
    useUpdateDictionariesMutation();

  const [getDictionaryDetail] = useGetDictionaryDetailMutation();
  const dictionaryDetail = useAppSelector(
    (state) => state.dictionary.dictionaryDetail
  );

  useEffect(() => {
    void getDictionaryDetail({ slug });
  }, [getDictionaryDetail]);

  const defaultValues: Partial<DictionariesValues> = dictionaryDetail;

  const form = useForm<DictionariesValues>({
    resolver: zodResolver(DictionariesSettingsSchema),
    defaultValues,
    mode: "onChange",
  });

  const handleSave = (data: DictionariesValues) => {
    void dictionaryUpdate({
      slug: dictionaryDetail.slug,
      ...data,
    });
  };

  const handleCopyUrl = () => {
    void navigator.clipboard.writeText(
      `https://wordigo.app/` + form.getValues().title
    );
    toast.success("Successful", {
      description: "Copied dictionary public url.",
    });
  };

  const handleCancel = () => {
    void router.push(`/dashboard/dictionaries/${slug}`);
  };

  const disabled = form.formState.isSubmitting || isLoading;

  useEffect(() => {
    if (status === "fulfilled") {
      void router.push(`/dashboard/dictionaries`);
      toast.success(t("notifications.success"), {
        description: t("notifications.updated_dictionary"),
      });
    } else if (status === "rejected") {
      toast.error(t("notifications.warning"), {
        description: updateData.message,
      });
    }
  }, [status]);

  return (
    <Container
      tTitle="appearanceSettings.title"
      tDescription="appearanceSettings.description"
    >
      <Form {...(form as any)}>
        <form onSubmit={form.handleSubmit(handleSave)}>
          <div className="grid">
            <FormField
              control={form.control as never}
              name="theme"
              render={({ field }) => (
                <FormItem className="grid gap-1 my-7">
                  <FormControl>
                    <>
                      <main className="grid grid-cols-3 w-full">
                        <span className="!max-w-2xl min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("password")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">
                            {t("accountSettings.password_label")}
                          </p>
                        </span>
                        <Input
                          {...field}
                          placeholder={t("********")}
                          className="w-full"
                        />
                      </main>

                      <main className="grid grid-cols-3 w-full mt-3">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break"></span>
                        <Input
                          {...field}
                          placeholder={t("********")}
                          className="w-full"
                        />
                      </main>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full text-end my-7">
              <CButton
                disabled={disabled}
                loading={isLoading}
                type="submit"
                variant="outline"
                className="w-fit dark:bg-LightBackground bg-DarkBackground font-semibold text-sm dark:text-black text-white"
              >
                {t("buttons.save")}
              </CButton>
            </div>
          </div>
        </form>
      </Form>
    </Container>
  );
}
