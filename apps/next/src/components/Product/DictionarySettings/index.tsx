import BannerDropzone from "./BannerDropzone";
import CButton from "@/components/UI/Button";
import { ConfirmModal } from "@/components/UI/ConfirmDialog";
import CInput from "@/components/UI/Input/Input";
import { DictionariesSettingsSchema } from "@/schemas/dictionaries.settings";
import {
  useDeleteDictionariesMutation,
  useGetDictionaryDetailMutation,
  useUpdateDictionariesMutation,
  useUpdateDictionaryImageMutation,
} from "@/store/dictionaries/api";
import { capitalizeWords } from "@/utils";
import { useAppSelector } from "@/utils/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryStatus } from "@reduxjs/toolkit/query";
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
  Switch,
  Textarea,
} from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";
import { ArrowLeftRight, Copy } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";

export type DictionariesValues = z.infer<typeof DictionariesSettingsSchema>;

export default function Settings() {
  const { t } = useTranslation();
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const [dictionaryUpdate, { isLoading, status, data: updateData }] =
    useUpdateDictionariesMutation();

  const [dictionaryUpdateBanner, { data: bannerData, status: bannerStatus }] =
    useUpdateDictionaryImageMutation();

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

  const handleSave = (values: DictionariesValues) => {
    if (
      values.published === true &&
      (values.sourceLang.length <= 0 || values.targetLang.length <= 0)
    ) {
      toast.warning(t("dictionaries_settings.published_status_error"));
      return false;
    }

    if (defaultValues?.image !== values.image) {
      void dictionaryUpdateBanner({
        dictionaryId: dictionaryDetail.id,
        encodedImage: values.image,
      });
    }

    delete values.image;

    values.level = 1;

    void dictionaryUpdate({
      slug: dictionaryDetail.slug,
      ...values,
    });
  };

  const handleCopyUrl = () => {
    void navigator.clipboard.writeText(`https://wordigo.app/library/` + slug);
    toast.success("Successful", {
      description: "Copied dictionary public url.",
    });
  };

  const handleCancel = () => {
    void router.push(`/dashboard/dictionaries/${slug}`);
  };

  const disabled = form.formState.isSubmitting || isLoading;

  useEffect(() => {
    if (
      (status === QueryStatus.fulfilled && updateData.success) ||
      (bannerStatus === QueryStatus.fulfilled && bannerData.success)
    ) {
      toast.success(t("notifications.success"), {
        description: t("notifications.updated_dictionary"),
      });
    } else if (status === "rejected") {
      toast.error(t("notifications.warning"), {
        description:
          status === QueryStatus.rejected
            ? updateData.message
            : bannerData.message,
      });
    }
  }, [status, bannerStatus]);

  const changeDirection = () => {
    const values = form.getValues();
    if (values.sourceLang.length === 0 && values.targetLang.length === 0) {
      toast.warning(t("dictionaries_settings.languages_switch.never_selected"));
    } else if (values.sourceLang.length === 0) {
      toast.warning(
        t("dictionaries_settings.languages_switch.source_selected")
      );
    } else if (values.targetLang.length === 0) {
      toast.warning(
        t("dictionaries_settings.languages_switch.target_selected")
      );
    } else {
      form.setValue("sourceLang", values.targetLang);
      form.setValue("targetLang", values.sourceLang);
    }
  };

  const [
    deleteDictionary,
    { status: deleteStatus, data: deleteData, isLoading: deleteLoading },
  ] = useDeleteDictionariesMutation();

  const handleDeleteClick = () => {
    void deleteDictionary({ slug });
  };

  useEffect(() => {
    if (deleteStatus === QueryStatus.fulfilled) {
      if (deleteData.success) {
        toast.success(t("notifications.success"), {
          description: t("notifications.deleted_dictionary"),
        });
        void router.push("/dashboard/dictionaries");
      } else {
        toast.error(t("notifications.warning"), {
          description: deleteData.message,
        });
      }
    }
  }, [deleteStatus]);

  return (
    <main>
      <section className="mb-5 flex items-center justify-between">
        <span>
          <h1 className="text-lg font-semibold leading-7">
            {capitalizeWords(dictionaryDetail?.title)}{" "}
            {t("headers.dictionaries_settings.title")}
          </h1>
          <h1 className="text-sm text-[hsl(var(--muted-foreground))] font-normal leading-7">
            {t("headers.dictionaries_settings.description")}
          </h1>
        </span>
        <div>
          <ConfirmModal onConfirm={handleDeleteClick} loading={deleteLoading}>
            <CButton variant="destructive" className="mr-2">
              {t("headers.dictionaries_detail.delete_dictionary")}
            </CButton>
          </ConfirmModal>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-800 rounded-full my-5" />
        <Form {...(form as any)}>
          <form onSubmit={form.handleSubmit(handleSave)}>
            <div className="grid">
              <FormField
                control={form.control as never}
                name="link"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <div className="grid grid-cols-3 w-full">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("link")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">
                            {t("dictionaries_settings.link_notes")}
                          </p>
                        </span>
                        <CInput
                          disabled
                          classNames="placeholder:!text-gray-400 w-[512px]"
                          defaultValue={`wordigo.app/library/${slug}`}
                          rightSection={
                            <Copy
                              onClick={handleCopyUrl}
                              className="text-muted-foreground"
                              size={20}
                            />
                          }
                          placeholder={field.value}
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-3 w-full">
                <section className="max-w-[280px] min-w-[280px] mr-8 word-break">
                  <Label>
                    <h1>{t("published_status")}</h1>
                  </Label>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">
                    {t("dictionaries_settings.published_status_note")}
                  </p>
                </section>
                <section className="flex flex-col gap-y-4 w-[512px]">
                  <FormField
                    control={form.control as never}
                    name="published"
                    render={({ field }) => (
                      <>
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              {t("dictionaries_settings.published.true_title")}
                            </FormLabel>
                            <FormDescription>
                              {t(
                                "dictionaries_settings.published.true_description"
                              )}
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={() =>
                                field.onChange(!field.value)
                              }
                            />
                          </FormControl>
                        </FormItem>
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                          <div className="space-y-0.5">
                            <FormLabel className="text-base">
                              {t("dictionaries_settings.published.false_title")}
                            </FormLabel>
                            <FormDescription>
                              {t(
                                "dictionaries_settings.published.false_description"
                              )}
                            </FormDescription>
                          </div>
                          <FormControl>
                            <Switch
                              checked={!field.value}
                              onCheckedChange={() =>
                                field.onChange(!field.value)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      </>
                    )}
                  />
                </section>
              </div>

              <FormField
                control={form.control as never}
                name="title"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <main className="grid grid-cols-3 w-full">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("title")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">
                            {t("dictionaries_settings.title_notes")}
                          </p>
                        </span>
                        <Input
                          {...field}
                          placeholder={t("title")}
                          className="w-[512px]"
                        />
                      </main>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control as never}
                name="description"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <main className="grid grid-cols-3 w-full">
                        <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                          <Label>
                            <h1>{t("description")}</h1>
                          </Label>
                          <p className="text-[hsl(var(--muted-foreground))] text-sm">
                            {t("dictionaries_settings.title_notes")}
                          </p>
                        </span>
                        <Textarea
                          {...field}
                          placeholder={t("description")}
                          className="w-[512px]"
                        />
                      </main>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <main className="grid grid-cols-3 w-full ">
                  <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                    <Label>
                      <h1>{t("dictionaries_settings.language.title")}</h1>
                    </Label>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">
                      {t("dictionaries_settings.language.description")}
                    </p>
                  </span>
                  <div className="flex items-center space-x-4 w-[512px]">
                    <FormField
                      control={form.control as never}
                      name="sourceLang"
                      render={({ field }) => (
                        <FormItem className="grid gap-1 my-7 w-full">
                          <FormControl>
                            <div className="w-full">
                              <LanguageSelector
                                value={field.value}
                                providerLanguages
                                placeholder={t(
                                  "dictionaries_settings.language.placeholder_source"
                                )}
                                onSelect={(value) => {
                                  field.onChange(value);
                                }}
                                className="w-full !h-9"
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <ArrowLeftRight
                      onClick={() => changeDirection()}
                      className={"cursor-pointer"}
                      width={32}
                    />
                    <FormField
                      control={form.control as never}
                      name="targetLang"
                      render={({ field }) => (
                        <FormItem className="grid gap-1 my-7 w-full">
                          <FormControl>
                            <div className="w-full">
                              <LanguageSelector
                                value={field.value}
                                providerLanguages
                                placeholder={t(
                                  "dictionaries_settings.language.placeholder_target"
                                )}
                                onSelect={(value) => {
                                  field.onChange(value);
                                }}
                                className="w-full !h-9"
                              />
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </main>
              </div>

              <FormField
                control={form.control as never}
                name="image"
                render={({ field }) => (
                  <FormItem className="grid gap-1 my-7">
                    <FormControl>
                      <BannerDropzone
                        image={field.value}
                        setImage={(image) => field.onChange(image)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full text-end my-7">
                <Button
                  onClick={handleCancel}
                  variant="outline"
                  className="font-semibold text-sm mr-1"
                >
                  {t("buttons.cancel")}
                </Button>
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
      </section>
    </main>
  );
}
