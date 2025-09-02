"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  schedule as allSchedule,
  students,
  workoutPlans,
} from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { ScheduleStatus } from "@/lib/types";

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDateString = date?.toISOString().split("T")[0];
  const dailySchedule = allSchedule.filter(
    (item) => item.date === selectedDateString
  );

  const getStatusVariant = (status: ScheduleStatus) => {
    switch (status) {
      case "Concluído":
        return "default";
      case "Faltou":
        return "destructive";
      case "Próximo":
        return "secondary";
    }
  };

  return (
    <>
      <PageHeader
        title="Agenda do Personal"
        description="Visualize os treinos agendados para seus alunos."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                    classNames={{
                        day_selected: "bg-primary text-primary-foreground hover:bg-primary/90",
                        day_today: "bg-accent text-accent-foreground",
                    }}
                />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>
                Treinos para{" "}
                {date?.toLocaleDateString("pt-BR", { dateStyle: "long" }) ||
                  "a data selecionada"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {dailySchedule.length > 0 ? (
                <div className="space-y-4">
                  {dailySchedule.map((item) => {
                    const student = students.find(
                      (s) => s.id === item.studentId
                    );
                    const plan = workoutPlans.find(
                      (p) => p.id === item.workoutPlanId
                    );
                    if (!student || !plan) return null;

                    const initials = student.name.split(" ").map((n) => n[0]).join("");

                    return (
                      <div key={item.id} className="flex items-center gap-4 rounded-lg border p-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="person portrait" />
                            <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{student.name}</p>
                            <p className="text-sm text-muted-foreground">{plan.name}</p>
                        </div>
                        <Badge variant={getStatusVariant(item.status)} className="ml-auto">{item.status}</Badge>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Nenhum treino agendado para esta data.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
