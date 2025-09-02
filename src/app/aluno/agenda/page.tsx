"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { PageHeader } from "@/components/shared/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  studentSchedule as allSchedule,
  workoutPlans,
} from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Check, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function MySchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { toast } = useToast();

  const selectedDateString = date?.toISOString().split("T")[0];
  const scheduledItem = allSchedule.find(
    (item) => item.date === selectedDateString
  );
  const plan = scheduledItem
    ? workoutPlans.find((p) => p.id === scheduledItem.workoutPlanId)
    : null;

  const handleMarkAsDone = () => {
    toast({
        title: "Treino Concluído!",
        description: "Parabéns por manter o foco!",
    });
  }

  return (
    <>
      <PageHeader
        title="Minha Agenda"
        description="Seus treinos agendados."
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
                    modifiers={{
                        workoutDay: allSchedule.map(s => new Date(s.date + 'T00:00:00'))
                    }}
                    modifiersClassNames={{
                        workoutDay: "relative !flex items-center justify-center after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-primary"
                    }}
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
                Treino para{" "}
                {date?.toLocaleDateString("pt-BR", { dateStyle: "long" }) ||
                  "a data selecionada"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {scheduledItem && plan ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Dumbbell className="h-8 w-8 text-primary"/>
                    <div>
                        <h3 className="text-lg font-semibold">{plan.name}</h3>
                        <p className="text-muted-foreground">Status: {scheduledItem.status}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Esta ficha contém {plan.exercises.length} exercícios.
                  </p>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Nenhum treino agendado para esta data.
                </p>
              )}
            </CardContent>
            {scheduledItem && scheduledItem.status === 'Próximo' && (
                <CardFooter>
                    <Button onClick={handleMarkAsDone}>
                        <Check className="mr-2 h-4 w-4" />
                        Marcar como Concluído
                    </Button>
                </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
