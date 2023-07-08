import React from "react";
import useAuthStore from "@/stores/Auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input } from "@wordigo/ui";
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
    console.log(values);

    const result = await authStore.login(values.email, values.password);
    console.log(result);

    // const { data, error } = await supabase.auth.signInWithPassword({
    //   email,
    //   password,
    // });
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
          <Button className="w-full">Sign In with Email</Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthLoginForm;
