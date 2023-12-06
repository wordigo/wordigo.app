import { useGetOverviewStatisticsQuery } from "@/store/profile/api";
import { Card, CardContent, Skeleton } from "@wordigo/ui";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function DashboardOverview() {
  const { data: response, isLoading } = useGetOverviewStatisticsQuery("");

  const computedData = response?.data?.map((item) => ({
    name: item.day,
    total: item.words,
  }));

  return (
    <Card className="">
      <CardContent className="!p-0">
        {isLoading ? (
          <Skeleton className="h-80" />
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={computedData}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}`}
              />
              <Bar dataKey="total" fill="#4a90e2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
