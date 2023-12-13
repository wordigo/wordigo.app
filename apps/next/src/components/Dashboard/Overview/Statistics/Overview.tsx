import { useGetOverviewStatisticsQuery } from "@/store/profile/api";
import { Card, CardContent, Skeleton } from "@wordigo/ui";
import { useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function DashboardOverview() {
  const [focusDataIndex, setFocusDataIndex] = useState<number | null>(null);
  const { data: response, isLoading } = useGetOverviewStatisticsQuery("");

  const computedData = response?.data
    ?.map((item) => ({
      name: item.day,
      total: item.words,
    }))
    .reverse();

  return (
    <Card className="">
      <CardContent className="!p-0">
        {isLoading ? (
          <Skeleton className="h-80" />
        ) : (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={computedData}
              onMouseMove={(e: any) => {
                if (e.activeTooltipIndex !== focusDataIndex) {
                  setFocusDataIndex(e.activeTooltipIndex);
                }
              }}
              onMouseLeave={() => setFocusDataIndex(null)}
            >
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
              <Tooltip
                cursor={false}
                content={() => {
                  if (focusDataIndex === null) {
                    return null;
                  }
                  const data = computedData?.[focusDataIndex];
                  return (
                    <div className="bg-white p-4 py-2 shadow-md rounded-md">
                      <div className="text-sm text-gray-500">{data?.name}</div>
                      <div className="text-2xl font-bold text-gray-800">
                        {data?.total}
                      </div>
                    </div>
                  );
                }}
              />
              <Bar dataKey="total" fill="#4a90e2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
