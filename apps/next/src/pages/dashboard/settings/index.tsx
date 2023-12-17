import DashboardLayout from "@/components/Layout/Product";
import { DashboardShell } from "@/components/Layout/Product/Shell";
import SettingsContainer from "@/components/Product/Settings";
import ProfileForm from "@/components/Product/Settings/ProfileForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "~/next-i18next.config";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
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
