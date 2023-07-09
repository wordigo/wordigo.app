import getUrl from "@/utils/getUrl";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Button } from "@wordigo/ui";

const SocialProviders = () => {
  const supabase = useSupabaseClient();

  const signInWithGoogle = async () => {
    const result = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: getUrl(),
      },
    });
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button className="w-full" onClick={signInWithGoogle} variant="outline" type="button">
        Google
      </Button>
    </div>
  );
};

export default SocialProviders;
