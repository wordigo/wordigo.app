import AccountForm from "./AccountForm";
import AppearanceForm from "./AppearanceForm";
import ProfileForm from "./ProfileForm";
import { SettingsTabs } from "./Settings.tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function index() {
  const { t } = useTranslation();
  const router = useRouter();
  const { tabs } = router.query;

  return (
    <Tabs
      defaultValue={tabs.length > 0 ? tabs : ("profile" as any)}
      className="w-full"
    >
      <TabsList className="grid w-fit grid-cols-3 gap-1">
        {SettingsTabs.map((tab, index) => (
          <TabsTrigger
            onClick={() => router.push("/dashboard/settings?tabs=" + tab.value)}
            className="px-2 pb-1 pt-0.5 rounded-md"
            value={tab.value}
            key={index}
          >
            {t(tab.name)}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="profile">
        <ProfileForm />
      </TabsContent>
      <TabsContent value="account">
        <AccountForm />
      </TabsContent>
      <TabsContent value="appearance">
        <AppearanceForm />
      </TabsContent>
    </Tabs>
  );
}
