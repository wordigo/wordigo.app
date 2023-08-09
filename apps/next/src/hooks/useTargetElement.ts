import { useEffect } from "react";
import { useRouter } from "next/router";

export const useTargetElement = () => {
  const router = useRouter();

  useEffect(() => {
    const hasTarget = router.asPath.split("#")?.[1];

    if (hasTarget) {
      const hasTargetElement = document.getElementById(hasTarget);
      hasTargetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);
};
