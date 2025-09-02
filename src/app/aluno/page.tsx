import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { students, workoutPlans, exercises, physicalAssessments, studentSchedule } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Check, CheckCircle, Circle, Target, Weight } from "lucide-react";

export default function AlunoDashboardPage() {
    const student = students[0];
    const activePlan = workoutPlans.find(wp => wp.studentId === student.id && wp.isActive);
    const lastAssessment = physicalAssessments.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="space-y-8">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Olá, {student.name.split(' ')[0]}!</h1>
                <p className="text-muted-foreground">Pronto(a) para o treino de hoje?</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <CardTitle>Seu Treino Atual: {activePlan?.name}</CardTitle>
                            <CardDescription>Estes são os primeiros exercícios da sua ficha.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-3">
                            {activePlan?.exercises.slice(0, 3).map(ex => {
                                const details = exercises.find(e => e.id === ex.exerciseId);
                                return (
                                    <div key={ex.exerciseId} className="flex items-center gap-4 p-3 rounded-lg border">
                                        <Dumbbell className="h-6 w-6 text-primary"/>
                                        <div>
                                            <p className="font-semibold">{details?.name}</p>
                                            <p className="text-sm text-muted-foreground">{ex.sets}x{ex.reps} - {ex.rest} de descanso</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href="/aluno/meu-treino">
                                    Ver ficha completa
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <Target className="h-8 w-8 text-accent"/>
                            <div>
                                <CardTitle className="text-base">Seu Objetivo</CardTitle>
                                <p className="text-sm text-muted-foreground">{student.goal}</p>
                            </div>
                        </CardHeader>
                    </Card>
                    <Card>
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <Weight className="h-8 w-8 text-primary"/>
                            <div>
                                <CardTitle className="text-base">Último Peso Registrado</CardTitle>
                                <p className="text-xl font-bold">{lastAssessment.weight} kg</p>
                            </div>
                        </CardHeader>
                    </Card>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Treinos da Semana</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    {studentSchedule.map(item => (
                         <div key={item.id} className="flex items-center gap-2 p-3 border rounded-lg">
                            {item.status === "Concluído" ? (
                                <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : item.status === "Próximo" && item.date >= today ? (
                                <Circle className="h-5 w-5 text-blue-500" />
                            ) : (
                                <Circle className="h-5 w-5 text-red-500" />
                            )}
                           <div>
                                <p className="text-sm font-medium">{new Date(item.date).toLocaleDateString('pt-BR', { weekday: 'long' })}</p>
                                <p className="text-xs text-muted-foreground">{item.status}</p>
                           </div>
                       </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
