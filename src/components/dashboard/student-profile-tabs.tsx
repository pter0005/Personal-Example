"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FilePlus,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Student, WorkoutPlan, PhysicalAssessment } from "@/lib/types";
import {
  workoutPlans,
  exercises as allExercises,
  physicalAssessments,
} from "@/lib/data";
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
} from "recharts";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface StudentProfileTabsProps {
  student: Student;
}

export function StudentProfileTabs({ student }: StudentProfileTabsProps) {
  const studentWorkoutPlans = workoutPlans.filter(
    (wp) => wp.studentId === student.id
  );
  const studentAssessments = physicalAssessments
    .filter((pa) => pa.studentId === student.id)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const chartData = studentAssessments.map((pa) => ({
    date: new Date(pa.date).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
    }),
    Peso: pa.weight,
    Gordura: pa.bodyFatPercentage,
  }));

  const lastAssessment = studentAssessments[studentAssessments.length - 1];
  const previousAssessment = studentAssessments[studentAssessments.length - 2];

  const getTrendIcon = (current: number, previous?: number) => {
    if (previous === undefined || current === previous) return <Minus className="h-4 w-4 text-muted-foreground" />;
    if (current > previous) return <TrendingUp className="h-4 w-4 text-red-500" />;
    return <TrendingDown className="h-4 w-4 text-green-500" />;
  };

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="workouts">Fichas de Treino</TabsTrigger>
        <TabsTrigger value="assessment">Avaliação Física</TabsTrigger>
      </TabsList>
      
      <TabsContent value="profile" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Detalhes do Perfil</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">Objetivo</h4>
              <p className="text-muted-foreground">{student.goal}</p>
            </div>
            <div>
              <h4 className="font-semibold">Restrições Físicas</h4>
              <p className="text-muted-foreground">
                {student.physicalRestrictions.join(", ") || "Nenhuma"}
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="workouts" className="mt-4 space-y-6">
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Fichas de Treino</CardTitle>
              <CardDescription>
                Visualize e gerencie as fichas do aluno.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {studentWorkoutPlans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-lg border p-4"
              >
                <h4 className="font-semibold">{plan.name}</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
                  {plan.exercises.map((ex) => {
                    const exerciseDetails = allExercises.find(
                      (e) => e.id === ex.exerciseId
                    );
                    return (
                      <li key={ex.exerciseId}>
                        {exerciseDetails?.name}: {ex.sets}x{ex.reps}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="assessment" className="mt-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolução do Aluno</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-[300px] w-full">
              <ResponsiveContainer>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" label={{ value: 'Peso (kg)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: '% Gordura', angle: 90, position: 'insideRight' }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line yAxisId="left" type="monotone" dataKey="Peso" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="Gordura" stroke="hsl(var(--accent))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Resumo da Última Avaliação</CardTitle>
                <CardDescription>Comparativo com a avaliação anterior.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Medida</TableHead>
                    <TableHead>Última</TableHead>
                    <TableHead>Anterior</TableHead>
                    <TableHead>Tendência</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Peso (kg)</TableCell>
                        <TableCell>{lastAssessment?.weight}</TableCell>
                        <TableCell>{previousAssessment?.weight || '-'}</TableCell>
                        <TableCell>{getTrendIcon(lastAssessment?.weight, previousAssessment?.weight)}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>Gordura Corporal (%)</TableCell>
                        <TableCell>{lastAssessment?.bodyFatPercentage}</TableCell>
                        <TableCell>{previousAssessment?.bodyFatPercentage || '-'}</TableCell>
                        <TableCell>{getTrendIcon(lastAssessment?.bodyFatPercentage, previousAssessment?.bodyFatPercentage)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cintura (cm)</TableCell>
                        <TableCell>{lastAssessment?.waist}</TableCell>
                        <TableCell>{previousAssessment?.waist || '-'}</TableCell>
                        <TableCell>{getTrendIcon(lastAssessment?.waist, previousAssessment?.waist)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
