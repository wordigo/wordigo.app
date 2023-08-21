import ProfileUploadAvatar from "./Avatar.profile";
import CInput from "@/components/UI/Input/Input";
import { ProfileFormSchema } from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { InfoIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { type z } from "zod";

type ProfileFormValues = z.infer<typeof ProfileFormSchema>;

export default function ProfileForm() {
  const { t } = useTranslation();
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
        <h3 className="text-lg font-medium">{t("profileSettings.title")}</h3>
        <p className="text-sm text-muted-foreground">
          {t("profileSettings.description")}
        </p>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => {})}
          className="space-y-8 !max-w-2xl"
        >
          <ProfileUploadAvatar />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("name")} {...field} />
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
                <FormLabel>{t("username")}</FormLabel>
                <FormControl>
                  <CInput
                    leftSection={
                      <span className="text-center text-sm text-muted-foreground select-none">
                        wordigo.app/profile/
                      </span>
                    }
                    rightSection={
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <InfoIcon
                              className="text-muted-foreground"
                              size={16}
                            />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{t("profileSettings.username_tooltip")}</p>
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
          <Button type="submit">{t("profileSettings.update_action")}</Button>
        </form>
      </Form>
    </div>
  );
}
