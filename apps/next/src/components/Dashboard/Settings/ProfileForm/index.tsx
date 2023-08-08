import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";

import { ProfileFormSchema } from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Separator } from "@wordigo/ui";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import ProfileUploadAvatar from "./Avatar.profile";

type ProfileFormValues = z.infer<typeof ProfileFormSchema>

export default function ProfileForm() {
  const { data } = useSession();

  const defaultValues: Partial<ProfileFormValues> = {
    name: data?.user?.name,
    username: data?.user?.username
  }

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  return (
    <div className="space-y-4 max-w-3xl">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Customize the overall website. Automatically switch between day and night themes and change interface language.
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => { })} className="space-y-8">
          <ProfileUploadAvatar />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ali Osman Delişmen" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="@osmandlsmn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update profile</Button>
        </form>
      </Form>
    </div>
  );
}
