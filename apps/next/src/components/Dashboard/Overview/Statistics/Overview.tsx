import { Card, CardContent } from "@wordigo/ui";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = Array.from({ length: 30 }, (_, i) => {
  return {
    name: i + 1,
    total: Math.random() > 0.2 ? Math.floor(Math.random() * 500) + 50 : 0,
  };
});

export function DashboardOverview() {
  return (
    <Card className="">
      <CardContent className="!p-0">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
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
      </CardContent>
    </Card>
  );
}
