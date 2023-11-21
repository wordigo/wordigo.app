import SettingsContainer from "@/components/Dashboard/Settings";
import ProfileForm from "@/components/Dashboard/Settings/ProfileForm";
import DashboardLayout from "@/components/Layout/Dashboard";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

const SettingsProfile = () => {
  return <ProfileForm />;
};

SettingsProfile.Layout = () => {
  return (
    <DashboardLayout>
      <DashboardShell>
        <SettingsContainer />
      </DashboardShell>
    </DashboardLayout>
  );
};

export default SettingsProfile.Layout;
