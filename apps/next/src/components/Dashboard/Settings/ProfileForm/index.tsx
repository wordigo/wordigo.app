import CInput from "@/components/UI/Input/Input";
import { ProfileFormSchema } from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";

import ProfileUploadAvatar from "./Avatar.profile";

type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

export default function ProfileForm() {
  const { data } = useSession();

  const defaultValues: Partial<ProfileFormValues> = {
    name: data?.user?.name,
    username: data?.user?.username,
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

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
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-8 !max-w-2xl">
          <ProfileUploadAvatar />
          <FormField
            control={form.control}
            name="name"
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
                  <CInput
                    leftSection={<span className="text-center text-sm text-muted-foreground select-none">wordigo.app/profile/</span>}
                    rightSection={
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <InfoIcon className="text-muted-foreground" size={16} />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Lorem ipsum dolor sit amet.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
                    placeholder="@osmandlsmn"
                    {...field}
                  />
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
