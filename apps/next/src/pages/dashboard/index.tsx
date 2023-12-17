import DashboardLayout from "@/components/Layout/Product";
import DashboardHeaders from "@/components/Layout/Product/Headers";
import { DashboardShell } from "@/components/Layout/Product/Shell";
import DashboardStatistics from "@/components/Product/Overview/Statistics/Cards";
import { DashboardOverview } from "@/components/Product/Overview/Statistics/Overview";
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
