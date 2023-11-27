import Container from "../SettingsContainer";
import ProfileUploadAvatar from "./Avatar.profile";
import CButton from "@/components/UI/Button";
import CInput from "@/components/UI/Input/Input";
import { ProfileFormSchema } from "@/schemas/profile.schema";
import { useUpdateProfileMutation } from "@/store/profile/api";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  toast,
} from "@wordigo/ui";
import { InfoIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { type z } from "zod";

export type UpdateProfileFormValues = z.infer<typeof ProfileFormSchema>;

export default function ProfileForm() {
  const { t } = useTranslation();
  const { data, update } = useSession();
  const [handleUpdateProfile, { status, data: profileData, isLoading }] =
    useUpdateProfileMutation();

  const defaultValues: Partial<UpdateProfileFormValues> = {
    name: data?.user?.name,
    username: data?.user?.username,
  };

  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues,
    mode: "onSubmit",
  });

  const handleSubmit = (values: UpdateProfileFormValues) => {
    if (values.username === data.user.username) delete values.username;
    handleUpdateProfile(values);
  };

  const updateProfileData = async () => {
    await update({
      ...data,
      user: {
        ...data?.user,
        ...profileData.data,
      },
    });
  };

  useEffect(() => {
    if (status === "fulfilled") {
      if (profileData.success) {
        updateProfileData();
        toast({
          title: t("notifications.success"),
          description: t("notifications.profile_update"),
        });
      } else {
        toast({
          variant: "destructive",
          title: t("notifications.warning"),
          description: profileData.message,
        });
      }
    }
  }, [status]);

  return (
    <Container
      tDescription="profileSettings.description"
      tTitle="profileSettings.title"
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
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
                            <p
                              className="text-center"
                              dangerouslySetInnerHTML={{
                                __html: t("profileSettings.username_tooltip"),
                              }}
                            />
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
          <CButton loading={isLoading} type="submit">
            {t("profileSettings.update_action")}
          </CButton>
        </form>
      </Form>
    </Container>
  );
}
