import { Avatar, AvatarFallback, AvatarImage } from "@wordigo/ui";
import { cx } from "class-variance-authority";
import { FileEditIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { Fragment, type ChangeEvent } from "react";
import { FaSpinner } from "react-icons/fa";

const ProfileUploadAvatar = () => {
  const { data } = useSession();
  const splittedText = data?.user?.name?.toUpperCase()?.split(" ");
  const computedName = (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  const onSelectPhoto = async (event: ChangeEvent<HTMLInputElement>) => {
    const avatarFile = event.target.files[0];
    if (!avatarFile) return;

    // await updateAvatar({
    //   avatarFile,
    // });
  };

  // useEffect(() => {
  //   if (status === "fulfilled") {
  //     dispatch(setUser(data?.user));
  //     toast.success("Profil fotoğrafınız güncellendi.");
  //   } else if (status === "rejected") {
  //     const errorMessage = getErrorFromPayload(error);
  //     toast.error(getErrorTranslation(errorMessage));
  //   }
  // }, [status]);

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
          <AvatarImage className="h-full w-full rounded-full" src={data?.user.avatar_url} alt={"@" + data?.user.name} />
          <AvatarFallback>{computedName}</AvatarFallback>
        </Avatar>
        <label
          htmlFor="changePhoto"
          className={cx(
            "absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-600/50 rounded-full cursor-pointer",
            { "w-30 pointer-events-none gap-x-0 !flex": false }
          )}
        >
          {false ? (
            <FaSpinner className="mr-1" />
          ) : (
            <Fragment>
              <FileEditIcon className="text-gray-200/70" size={24} />
            </Fragment>
          )}
        </label>
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-medium ">Profil Resmi Ayarla</h4>
        <p className="text-sm text-muted-foreground">
          Bir fotoğraf yükleyin ve profil resminizi değiştirin
        </p>
      </div>
    </div>
  );
};

export default ProfileUploadAvatar;
