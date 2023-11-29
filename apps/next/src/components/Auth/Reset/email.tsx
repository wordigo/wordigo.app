import CButton from "@/components/UI/Button";
import {
  AuthResetEmailSchema,
  type AuthResetEmailValues,
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

  const defaultValues: Partial<AuthResetEmailValues> = {
    email: "",
  };

  const form = useForm<AuthResetEmailValues>({
    resolver: zodResolver(AuthResetEmailSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthResetEmailValues) => {
    setIsLoading(true);
    // const { error } = await signIn("credentials", {
    //   email: values.email,
    //   password: values.confrimed_password,
    //   new: values.confrimed_password,
    // });
    setIsLoading(false);
    setResetStep("password");

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

  return (
    <div className={cn("grid gap-6 py-6", className)} {...props}>
      <Form {...(form as any)}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
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
          <CButton loading={isLoading} className="w-full">
            {t("reset.email_button")}
          </CButton>
        </form>
      </Form>
    </div>
  );
};

export default AuthResetForm;
