import DashboardLoader from "@/components/Dashboard/Home/Home.loader";
import { useGetStatisticsMutation } from "@/store/profile/api";
import { Card, CardContent, CardHeader, CardTitle } from "@wordigo/ui";
import { BookCopy, BookMarked, FileType, Library } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Fragment, useEffect } from "react";

const DashboardStatistics = () => {
  const { t } = useTranslation();
  const [handleGetStatistics, { data: response, isLoading }] =
    useGetStatisticsMutation();

  useEffect(() => {
    void handleGetStatistics("");
  }, []);

  return isLoading ? (
    <DashboardLoader />
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
  );
};

export default DashboardStatistics;
