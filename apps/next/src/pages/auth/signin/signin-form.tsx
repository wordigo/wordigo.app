import React from "react";
import { useRouter } from "next/router";
import CButton from "@/components/UI/Button";
import { useAuthStore } from "@/hooks/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage, Input, useToast } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

const AuthLoginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, { message: "Password must be atleast 6 characters" }),
});
// extracting the type
type AuthLoginValues = z.infer<typeof AuthLoginSchema>;

const AuthLoginForm = ({ className, ...props }: UserAuthFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const authStore = useAuthStore();

  const defaultValues: Partial<AuthLoginValues> = {
    email: "",
    password: "",
  };

  const form = useForm<AuthLoginValues>({
    resolver: zodResolver(AuthLoginSchema),
    defaultValues,
  });

  const handleSubmit = async (values: AuthLoginValues) => {
    const { user, error } = await authStore.signIn(values.email, values.password);
    if (error) {
      toast({
        title: "Warning",
        description: error.message,
      });
    } else {
      toast({
        title: "Success",
        description: "sign up successful you are redirected to homepage.",
      });
      await router.push("/");
    }
  };

  return (
    <div className={cn("grid gap-6 py-5", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap-1">
                  <FormControl>
                    <Input {...field} id="email" placeholder="name@example.com" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="grid gap-1">
                  <FormControl>
                    <Input {...field} id="email" placeholder="******" type="password" autoCapitalize="none" autoCorrect="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <CButton loading={authStore.isLoading} className="w-full">
            Sign In with Email
          </CButton>
        </form>
      </Form>
    </div>
  );
};

export default AuthLoginForm;
