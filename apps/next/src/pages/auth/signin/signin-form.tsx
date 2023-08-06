import React, { useState } from "react";
import { useRouter } from "next/router";
import CButton from "@/components/UI/Button";
import { AuthLoginSchema, type AuthLoginValues } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormMessage, Input, Label, useToast } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const AuthLoginForm = ({ className, ...props }: UserAuthFormProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const defaultValues: Partial<AuthLoginValues> = {
    email: "",
    password: "",
  };

  const form = useForm<AuthLoginValues>({
    resolver: zodResolver(AuthLoginSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthLoginValues) => {
    setIsLoading(true);
    const { error } = await signIn("credentials", { email: values.email, password: values.password, redirect: false });
    setIsLoading(false);

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
  };

  return (
    <div className={cn("grid gap-6 py-6", className)} {...props}>
      <Form {...(form as any)}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-left">
                {t("signin.email")}
              </Label>
              <FormField
                control={form.control as never}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid gap-2">
                    <FormControl>
                      <Input {...field} id="email" placeholder="Enter your email" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-left">
                {t("signin.password")}
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
          <CButton loading={isLoading} className="w-full">
            {t("signin.sign_button")}
          </CButton>
        </form>
      </Form>
    </div>
  );
};

export default AuthLoginForm;
