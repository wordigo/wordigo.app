import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CButton from "@/components/UI/Button";
import { type AuthRegisterValues, AuthSıgnUpSchema } from "@/schemas/auth.schema";
import { useRegisterMutation } from "@/store/auth/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormMessage, Input, Label, useToast } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const AuthSıgnUpForm = ({ className, ...props }: UserAuthFormProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { toast } = useToast();
  const [handleRegister, { data, isLoading: registerIsLoading, status }] = useRegisterMutation();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues: Partial<AuthRegisterValues> = {
    name: "",
    email: "",
    password: "",
  };

  const form = useForm<AuthRegisterValues>({
    resolver: zodResolver(AuthSıgnUpSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthRegisterValues) => {
    await handleRegister(values);
  };

  const handleSign = async () => {
    setIsLoading(true);
    const { email, password } = form.getValues();

    const { error } = await signIn("credentials", { email, password, redirect: false });
    if (error) {
      toast({
        variant: "destructive",
        title: "Warning",
        description: error,
      });
    } else {
      toast({
        title: "Success",
        description: "Sign in successful you are redirected to homepage.",
      });

      const callbackUrl = router.query.callbackUrl;

      if (typeof callbackUrl === "string") {
        void router.push(callbackUrl);
      } else {
        void router.push("/");
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (status === "fulfilled") {
      if (data.success) {
        void handleSign();
      } else {
        toast({
          variant: "destructive",
          title: "Warning",
          description: data.message,
        });
      }
    }
  }, [status]);

  return (
    <div className={cn("grid gap-6 py-6", className)} {...props}>
      <Form {...(form as any)}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-left">
                {t("name")}
              </Label>
              <FormField
                control={form.control as never}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <Input {...field} id="name" placeholder={t("name")} autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                      <Input {...field} id="email" placeholder={t("email")} autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-left">
                {t("password")}
              </Label>
              <FormField
                control={form.control as never}
                name="password"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <Input {...field} id="password" placeholder="••••••••" type="password" autoCapitalize="none" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <CButton loading={registerIsLoading || isLoading} className="w-full">
            {t("signup.sign_button")}
          </CButton>
        </form>
      </Form>
    </div>
  );
};

export default AuthSıgnUpForm;
