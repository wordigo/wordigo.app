import Spinner from "@/components/UI/Spinner";
import { useUpdateAvatarMutation } from "@/store/profile/api";
import { toBase64 } from "@/utils/toBase64";
import { Avatar, AvatarFallback, AvatarImage } from "@wordigo/ui";
import { cx } from "class-variance-authority";
import { FileEditIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { type ChangeEvent, Fragment, useEffect } from "react";

const ProfileUploadAvatar = () => {
  const { data } = useSession();
  const { t } = useTranslation();
  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName =
    (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const [handleUpdateAvatar, { isLoading, data: profileData, status }] =
    useUpdateAvatarMutation();

  const onSelectPhoto = async (event: ChangeEvent<HTMLInputElement>) => {
    const avatarFile = event.target.files[0];
    if (!avatarFile) return;

    const encodedAvatar = (await toBase64(avatarFile)) as string;
    handleUpdateAvatar({ encodedAvatar });

    // await updateAvatar({
    //   avatarFile,
    // });
  };

  useEffect(() => {
    if (status === "fulfilled") {
      console.log(profileData);

      // dispatch(setUser(data?.user));
      // toast.success("Profil fotoğrafınız güncellendi.");
    } else if (status === "rejected") {
      // const errorMessage = getErrorFromPayload(error);
      // toast.error(getErrorTranslation(errorMessage));
    }
  }, [status]);

  return (
    <div className="flex gap-x-4">
      <div className="relative group w-24">
        <input
          type="file"
          id="changePhoto"
          onChange={onSelectPhoto}
          className={cx(
            "absolute inset-0 h-full w-full cursor-pointer border-gray-300 opacity-0",
            { "pointer-events-none": false }
          )}
        />
        <Avatar className="h-24 w-24 rounded-full">
          <AvatarImage
            className="h-full w-full rounded-full"
            src={data?.user.avatar_url}
            alt={"@" + data?.user.name}
          />
          <AvatarFallback>{computedName}</AvatarFallback>
        </Avatar>
        <label
          htmlFor="changePhoto"
          className={cx(
            "absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-600/50 rounded-full cursor-pointer",
            {
              "w-30 pointer-events-none gap-x-0 !flex": isLoading,
            }
          )}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <Fragment>
              <FileEditIcon className="text-gray-200/70" size={24} />
            </Fragment>
          )}
        </label>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-medium ">{t("profileAvatar.title")}</h4>
        <p className="text-sm text-muted-foreground">
          {t("profileAvatar.description")}
        </p>
      </div>
    </div>
  );
};

export default ProfileUploadAvatar;
