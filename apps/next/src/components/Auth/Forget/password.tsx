import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import CButton from "@/components/UI/Button";
import {
  AuthForgetPasswordSchema,
  type AuthForgetPasswordValues,
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

interface AuthForgetFormProps extends UserAuthFormProps {
  setForgetStep: (step: "email" | "password") => void;
}

const AuthPasswordForgetForm = ({
  className,
  setForgetStep,
  ...props
}: AuthForgetFormProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  const defaultValues: Partial<AuthForgetPasswordValues> = {
    new_password: "",
    confrim_password: "",
  };

  const form = useForm<AuthForgetPasswordValues>({
    resolver: zodResolver(AuthForgetPasswordSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthForgetPasswordValues) => {
    setIsPasswordLoading(true);
    setIsPasswordLoading(false);
  };

  return (
    <>
      <AuthLayout.Title>{t("forgot_password.password_title")}</AuthLayout.Title>
      <AuthLayout.Description>
        {t("forgot_password.password_step")}
      </AuthLayout.Description>
      <div className={cn("grid gap-6 py-6", className)} {...props}>
        <Form {...(form as any)}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-left">
                  {t("forgot_password.new_password")}
                </Label>
                <FormField
                  control={form.control as never}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          {...field}
                          id="new_password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoCorrect="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password" className="text-left">
                  {t("forgot_password.confirm_password")}
                </Label>
                <FormField
                  control={form.control as never}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormControl>
                        <Input
                          {...field}
                          id="confirm_password"
                          placeholder="••••••••"
                          type="password"
                          autoCapitalize="none"
                          autoCorrect="off"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <CButton loading={isPasswordLoading} className="w-full">
              {t("forgot_password.refresh_button")}
            </CButton>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AuthPasswordForgetForm;
