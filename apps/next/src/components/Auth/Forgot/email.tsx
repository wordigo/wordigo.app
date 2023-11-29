import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import CButton from "@/components/UI/Button";
import {
  AuthForgotEmailSchema,
  type AuthForgotEmailValues,
} from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Label,
} from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AuthForgotFormProps extends UserAuthFormProps {
  setForgotStep: (step: "email" | "password") => void;
}

const AuthEmailForgotForm = ({
  className,
  setForgotStep,
  ...props
}: AuthForgotFormProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const defaultValues: Partial<AuthForgotEmailValues> = {
    email: "",
  };

  const form = useForm<AuthForgotEmailValues>({
    resolver: zodResolver(AuthForgotEmailSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthForgotEmailValues) => {
    setIsEmailLoading(true);
    setIsEmailLoading(false);
    setForgotStep("password");
  };

  return (
    <>
      <AuthLayout.Title>{t("forgot_password.email_title")}</AuthLayout.Title>
      <AuthLayout.Description>
        {t("forgot_password.email_step")}
      </AuthLayout.Description>
      <div className={cn("grid gap-6 py-6", className)} {...props}>
        <Form {...(form as any)}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-left">
                  {t("email")}
                </Label>
                <FormField
                  control={form.control as never}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          {...field}
                          id="email"
                          placeholder={t("email")}
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <CButton loading={isEmailLoading} className="w-full">
              {t("forgot_password.email_button")}
            </CButton>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AuthEmailForgotForm;
