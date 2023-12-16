import DashboardStatistics from "@/components/Dashboard/Overview/Statistics/Cards";
import { DashboardOverview } from "@/components/Dashboard/Overview/Statistics/Overview";
import DashboardLayout from "@/components/Layout/Dashboard";
import DashboardHeaders from "@/components/Layout/Dashboard/Headers";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nextConfig from "~/next-i18next.config";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, nextI18nextConfig.ns)),
    },
  };
}

const Dashboard = () => {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeaders />
        <div className="flex flex-col gap-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DashboardStatistics />
          </div>
          <DashboardOverview />
        </div>
      </DashboardShell>
    </DashboardLayout>
  );
};

export default Dashboard;
