"use client";

import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { physicalAssessments } from "@/lib/data";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function MyProgressPage() {
  const sortedAssessments = [...physicalAssessments].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const chartData = sortedAssessments.map((pa) => ({
    date: new Date(pa.date).toLocaleDateString("pt-BR", {
      month: "short",
      year: "2-digit",
    }),
    Peso: pa.weight,
    "% Gordura": pa.bodyFatPercentage,
  }));

  const getTrendIcon = (current: number, previous?: number) => {
    if (previous === undefined || current === previous)
      return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (current > previous)
      return <TrendingUp className="h-4 w-4 text-red-500" />;
    return <TrendingDown className="h-4 w-4 text-green-500" />;
  };

  return (
    <>
      <PageHeader
        title="Meu Progresso"
        description="Acompanhe sua evolução física ao longo do tempo."
      />

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Evolução de Peso e % de Gordura</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[350px] w-full">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    yAxisId="left"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    domain={["dataMin - 5", "dataMax + 5"]}
                  />
                   <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    domain={["dataMin - 5", "dataMax + 5"]}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line
                    dataKey="Peso"
                    type="monotone"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    yAxisId="left"
                  />
                  <Line
                    dataKey="% Gordura"
                    type="monotone"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    yAxisId="right"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Medidas</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Peso (kg)</TableHead>
                  <TableHead>% Gordura</TableHead>
                  <TableHead>Cintura (cm)</TableHead>
                  <TableHead>Quadril (cm)</TableHead>
                  <TableHead>Tendência Peso</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedAssessments.map((item, index) => {
                    const previousItem = sortedAssessments[index - 1];
                    return (
                        <TableRow key={item.id}>
                            <TableCell>{new Date(item.date).toLocaleDateString('pt-BR')}</TableCell>
                            <TableCell>{item.weight.toFixed(1)}</TableCell>
                            <TableCell>{item.bodyFatPercentage.toFixed(1)}</TableCell>
                            <TableCell>{item.waist.toFixed(1)}</TableCell>
                            <TableCell>{item.hip.toFixed(1)}</TableCell>
                            <TableCell>{getTrendIcon(item.weight, previousItem?.weight)}</TableCell>
                        </TableRow>
                    )
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
