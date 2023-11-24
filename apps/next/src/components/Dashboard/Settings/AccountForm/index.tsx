import Container from "../SettingsContainer";
import CButton from "@/components/UI/Button";
import {
  EmailFormSchema,
  PasswordFormSchema,
} from "@/schemas/dashboard.settings";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
  Separator,
} from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { type z } from "zod";

export type EmailValues = z.infer<typeof EmailFormSchema>;
export type PasswordValues = z.infer<typeof PasswordFormSchema>;

export default function AccountForm() {
  const { t } = useTranslation();

  // const [getDictionaryDetail] = useGetDictionaryDetailMutation();
  // const dictionaryDetail = useAppSelector(
  //   (state) => state.dictionary.dictionaryDetail
  // );
  // useEffect(() => {
  //   void getDictionaryDetail({ slug });
  // }, [getDictionaryDetail]);

  const emailDetail = { title: "" };
  const passwordDetail = { password: "", confirmPassword: "" };
  const isLoading = false;

  const emailDefaultValues: Partial<EmailValues> = emailDetail;
  const passwordDefaultValues: Partial<PasswordValues> = passwordDetail;

  const emailForm = useForm<EmailValues>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: emailDefaultValues,
    mode: "onChange",
  });

  const passwordForm = useForm<PasswordValues>({
    resolver: zodResolver(PasswordFormSchema),
    defaultValues: passwordDefaultValues,
    mode: "onChange",
  });

  const handleEmailSave = (data: EmailValues) => {
    // void dictionaryUpdate({
    //   slug: dictionaryDetail.slug,
    //   ...data,
    // });
  };

  const handlePasswordSave = (data: PasswordValues) => {};

  return (
    <Container
      tTitle="accountSettings.title"
      tDescription="accountSettings.description"
    >
      <Form {...(emailForm as any)}>
        <form onSubmit={emailForm.handleSubmit(handleEmailSave)}>
          <div className="grid max-w-[500px]">
            <FormField
              control={emailForm.control as never}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-1 my-3">
                  <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                    <Label>
                      <h1>{t("email")}</h1>
                    </Label>
                  </span>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={t("email")}
                      className="w-[512px]"
                    />
                  </FormControl>
                  <p className="text-[hsl(var(--muted-foreground))] text-sm">
                    {t("accountSettings.email_label")}
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CButton
              disabled
              className="w-fit"
              loading={isLoading}
              type="submit"
            >
              {t("accountSettings.email_update")}
            </CButton>
          </div>
        </form>
      </Form>

      <Separator className="my-6" />

      <Form {...(passwordForm as any)}>
        <form onSubmit={passwordForm.handleSubmit(handlePasswordSave)}>
          <div className="grid">
            <FormField
              control={passwordForm.control as never}
              name="password"
              render={({ field }) => (
                <>
                  <FormItem className="grid gap-1 my-3">
                    <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                      <Label>
                        <h1>{t("password")}</h1>
                      </Label>
                    </span>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("********")}
                        className="w-[512px]"
                      />
                    </FormControl>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">
                      {t("accountSettings.password_label")}
                    </p>
                    <FormMessage />
                  </FormItem>

                  <FormItem className="grid gap-1 my-3">
                    <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
                      <Label>
                        <h1>{t("password")}</h1>
                      </Label>
                    </span>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t("********")}
                        className="w-[512px]"
                      />
                    </FormControl>
                    <p className="text-[hsl(var(--muted-foreground))] text-sm">
                      {t("accountSettings.password_label")}
                    </p>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <CButton
              disabled
              className="w-fit"
              loading={isLoading}
              type="submit"
            >
              {t("accountSettings.password_update")}
            </CButton>
          </div>
        </form>
      </Form>
    </Container>
  );
}
