"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PageHeader } from "@/components/shared/page-header";
import { exercises } from "@/lib/data";
import { AddExerciseModal } from "@/components/dashboard/add-exercise-modal";
import { ExerciseCard } from "@/components/dashboard/exercise-card";

const muscleGroups = ["Todos", ...Array.from(new Set(exercises.map((ex) => ex.muscleGroup)))];

export default function ExercisesPage() {
  const [filter, setFilter] = useState("Todos");

  const filteredExercises =
    filter === "Todos"
      ? exercises
      : exercises.filter((ex) => ex.muscleGroup === filter);

  return (
    <>
      <PageHeader
        title="Biblioteca de Exercícios"
        description="Filtre e gerencie os exercícios disponíveis."
      >
        <div className="flex items-center gap-4">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filtrar por grupo" />
            </SelectTrigger>
            <SelectContent>
              {muscleGroups.map((group) => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <AddExerciseModal />
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredExercises.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </>
  );
}
