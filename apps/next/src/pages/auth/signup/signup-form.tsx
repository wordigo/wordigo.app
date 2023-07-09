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

const AuthSıgnUpSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z.string().min(6, { message: "Password must be atleast 6 characters" }),
});
// extracting the type
type AuthRegisterValues = z.infer<typeof AuthSıgnUpSchema>;

const AuthSıgnUpForm = ({ className, ...props }: UserAuthFormProps) => {
  const router = useRouter();
  const authStore = useAuthStore();
  const { toast } = useToast();

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
    const { error } = await authStore.signUp(values.email, values.password, { name: values.name });

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
              name="name"
              render={({ field }) => (
                <FormItem className="grid gap-1">
                  <FormControl>
                    <Input {...field} id="name" placeholder="name" autoCapitalize="none" autoComplete="email" autoCorrect="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            Sign Up
          </CButton>
        </form>
      </Form>
    </div>
  );
};

export default AuthSıgnUpForm;
