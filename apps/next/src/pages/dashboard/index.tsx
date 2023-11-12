import DashboardLoader from "@/components/Dashboard/Home/Home.loader";
import DashboardLayout from "@/components/Layout/Dashboard";
import DashboardHeaders from "@/components/Layout/Dashboard/Headers";
import { DashboardShell } from "@/components/Layout/Dashboard/Shell";
import { useGetStatisticsMutation } from "@/store/profile/api";
import { Card, CardContent, CardHeader, CardTitle } from "@wordigo/ui";
import { BookCopy, BookMarked, FileType, Library } from "lucide-react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment, useEffect } from "react";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "zod"])),
    },
  };
}

const Dashboard = () => {
  const { t } = useTranslation();
  const [handleGetStatistics, { data: response, isLoading }] =
    useGetStatisticsMutation();

  useEffect(() => {
    void handleGetStatistics("");
  }, []);

  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeaders />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {isLoading ? (
            <Dashboard.Loader />
          ) : (
            <Fragment>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t("dashboard.statistics.dictionaries")}
                  </CardTitle>
                  <BookCopy size={18} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {response?.data.numberOfDictionaries || 0}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t("dashboard.statistics.public_dictionaries")}
                  </CardTitle>
                  <Library size={18} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {response?.data?.numberOfPublicDics || 0}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t("dashboard.statistics.sub_dictionary")}
                  </CardTitle>
                  <BookMarked size={18} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {response?.data?.numberOfSubbedDics || 0}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {t("dashboard.statistics.words")}
                  </CardTitle>
                  <FileType size={18} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {response?.data?.numberOfWords || 0}
                  </div>
                </CardContent>
              </Card>
            </Fragment>
          )}
        </div>
      </DashboardShell>
    </DashboardLayout>
  );
};

Dashboard.Loader = DashboardLoader;

export default Dashboard;
