"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  suggestWorkoutPlan,
  SuggestWorkoutPlanInput,
  SuggestWorkoutPlanOutput,
} from "@/ai/flows/suggest-workout-plan";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Loader2 } from "lucide-react";

const formSchema = z.object({
  studentGoals: z.string().min(1, "Este campo é obrigatório."),
  fitnessLevel: z.enum(["beginner", "intermediate", "advanced"]),
  physicalRestrictions: z.string().default("Nenhuma"),
  preferredWorkoutStyle: z.string().min(1, "Este campo é obrigatório."),
  availableEquipment: z.string().min(1, "Este campo é obrigatório."),
});

type FormValues = z.infer<typeof formSchema>;

const initialState: {
  plan?: SuggestWorkoutPlanOutput;
  error?: string;
} = {};

async function suggestPlanAction(
  prevState: any,
  data: SuggestWorkoutPlanInput
) {
  try {
    const plan = await suggestWorkoutPlan(data);
    return { plan };
  } catch (e: any) {
    return { error: e.message || "Falha ao sugerir plano." };
  }
}

export function WorkoutPlanGenerator() {
  const [state, formAction] = useFormState(suggestPlanAction, initialState);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentGoals: "",
      fitnessLevel: "beginner",
      physicalRestrictions: "Nenhuma",
      preferredWorkoutStyle: "Treinamento de força",
      availableEquipment: "Acesso a academia completa",
    },
  });

  const { isSubmitting } = form.formState;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerador de Ficha de Treino com IA</CardTitle>
          <CardDescription>
            Preencha os detalhes do aluno para que a IA sugira um plano de
            treino inicial.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-4">
              <FormField
                control={form.control}
                name="studentGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Metas do Aluno</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Hipertrofia, perda de peso..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="fitnessLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de Condicionamento</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o nível" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Iniciante</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediário
                          </SelectItem>
                          <SelectItem value="advanced">Avançado</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="preferredWorkoutStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estilo de Treino Preferido</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Musculação, HIIT..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
              <FormField
                control={form.control}
                name="physicalRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restrições Físicas</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Dores no joelho, problemas na lombar..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="availableEquipment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Equipamentos Disponíveis</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Halteres, barras, acesso a academia..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Sugerir Plano
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      {state?.plan && (
        <Card className="bg-primary/5">
            <CardHeader>
                <CardTitle>Plano de Treino Sugerido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
                    <p className="font-semibold">Plano:</p>
                    <p>{state.plan.workoutPlan}</p>
                    {state.plan.notes && (
                        <>
                            <p className="font-semibold">Notas:</p>
                            <p>{state.plan.notes}</p>
                        </>
                    )}
                </div>
                <Button>Adicionar esta Ficha</Button>
            </CardContent>
        </Card>
      )}
       {state?.error && (
        <Card className="border-destructive">
            <CardHeader>
                <CardTitle className="text-destructive">Erro ao gerar plano</CardTitle>
            </CardHeader>
            <CardContent>
                <p>{state.error}</p>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
