import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import CButton from "@/components/UI/Button";
import {
  AuthForgotPasswordSchema,
  type AuthForgotPasswordValues,
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
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ReactCodeInput = dynamic(import("react-code-input"));

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface AuthForgotFormProps extends UserAuthFormProps {
  setForgotStep: (step: "email" | "password") => void;
}

const AuthPasswordForgotForm = ({
  className,
  setForgotStep,
  ...props
}: AuthForgotFormProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);
  const [pinCode, setPinCode] = useState("");

  const defaultValues: Partial<AuthForgotPasswordValues> = {
    new_password: "",
    confrim_password: "",
  };

  const form = useForm<AuthForgotPasswordValues>({
    resolver: zodResolver(AuthForgotPasswordSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthForgotPasswordValues) => {
    setIsPasswordLoading(true);
    setIsPasswordLoading(false);
  };

  const handlePinChange = (pinCode) => {
    setPinCode(pinCode);
  };

  return (
    <>
      <AuthLayout.Title>{t("forgot_password.password_title")}</AuthLayout.Title>
      <AuthLayout.Description>
        {t("forgot_password.password_step")}
      </AuthLayout.Description>
      <div className={cn("grid gap-6 py-6", className)} {...props}>
        <Form {...(form as any)}>
          <div className="grid gap-2 my-8">
            <Label htmlFor="email" className="text-left">
              {t("forgot_password.email_key")}
            </Label>
            <ReactCodeInput
              inputMode="numeric"
              name="pinCode"
              type="text"
              fields={6}
              onChange={handlePinChange}
              value={pinCode}
              autoFocus={false}
            />
          </div>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="new_password" className="text-left">
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
                          autoFocus={false}
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
            <CButton
              disabled={pinCode.length < 6}
              loading={isPasswordLoading}
              className="w-full"
            >
              {t("forgot_password.refresh_button")}
            </CButton>
          </form>
        </Form>
      </div>
    </>
  );
};

export default AuthPasswordForgotForm;
