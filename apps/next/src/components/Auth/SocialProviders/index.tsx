import getUrl from "@/utils/getUrl";
import { Button } from "@wordigo/ui";
import { RotateCw } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SocialProviders = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    await signIn("google", { callbackUrl: getUrl() });
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            {t("auth_layout.with_section_title")}
          </span>
        </div>
      </div>
      <Button
        className="w-full"
        onClick={signInWithGoogle}
        variant="outline"
        disabled={isLoading}
        type="button"
      >
        {isLoading ? (
          <RotateCw className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FcGoogle className="mr-1 h-5 w-5" />
        )}
        {t("auth_layout.contiune_google")}
      </Button>
    </div>
  );
};

export default SocialProviders;
