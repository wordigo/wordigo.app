import CButton from "@/components/UI/Button";
import {
  AuthResetPasswordSchema,
  type AuthResetPasswordValues,
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

interface AuthResetFormProps extends UserAuthFormProps {
  setResetStep: (step: "email" | "password") => void;
}

const AuthResetForm = ({
  className,
  setResetStep,
  ...props
}: AuthResetFormProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const defaultValues: Partial<AuthResetPasswordValues> = {
    new_password: "",
    confrim_password: "",
  };

  const form = useForm<AuthResetPasswordValues>({
    resolver: zodResolver(AuthResetPasswordSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthResetPasswordValues) => {
    setIsLoading(true);
    // const { error } = await signIn("credentials", {
    //   email: values.email,
    //   password: values.confrimed_password,
    //   new: values.confrimed_password,
    // });
    setIsLoading(false);

    // if (error) {
    //   toast.error(t("notifications.warning"), {
    //     description: error,
    //   });
    // } else {
    //   toast.success(t("notifications.success"), {
    //     description: t("notifications.signin_success"),
    //   });

    //   const callbackUrl = router.query.callbackUrl;

    //   if (typeof callbackUrl === "string") {
    //     void router.push(callbackUrl);
    //   } else {
    //     void router.push("/");
    //   }
    // }
  };

  const handleEmailSubmit = async (values: AuthResetPasswordValues) => {
    setIsEmailLoading(true);
    setResetStep("password");
    setIsEmailLoading(false);
  };

  return (
    <div className={cn("grid gap-6 py-6", className)} {...props}>
      <Form {...(form as any)}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-left">
                {t("reset.new_password")}
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
                {t("reset.confirm_password")}
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
          <CButton loading={isLoading} className="w-full">
            {t("reset.refresh_button")}
          </CButton>
        </form>
      </Form>
    </div>
  );
};

export default AuthResetForm;
