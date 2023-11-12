import AccountForm from "./AccountForm";
import AppearanceForm from "./AppearanceForm";
import ProfileForm from "./ProfileForm";
import { SettingsTabs } from "./Settings.tab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@wordigo/ui";
import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {SettingsTabs.map((tab, index) => (
          <TabsTrigger
            className="px-2 pb-1 pt-0.5 rounded-md border "
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
