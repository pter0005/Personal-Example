import {
  Activity,
  AlertTriangle,
  Users,
  Dumbbell,
  BarChart,
  CheckCircle,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageHeader } from "@/components/shared/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const stats = [
  {
    title: "Alunos Ativos",
    value: "4",
    icon: <Users className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Total de Exercícios",
    value: "8",
    icon: <Dumbbell className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Adesão ao Treino",
    value: "85%",
    icon: <BarChart className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Treinos Concluídos (Semana)",
    value: "12",
    icon: <CheckCircle className="h-6 w-6 text-muted-foreground" />,
  },
];

export default function TrainerDashboardPage() {
  return (
    <>
      <PageHeader
        title="Painel do Personal Trainer"
        description="Um resumo da sua atividade na plataforma."
      />

      <div className="space-y-8">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Modo de Demonstração</AlertTitle>
          <AlertDescription>
            Os dados exibidos nesta página são fictícios e servem apenas para
            demonstração.
          </AlertDescription>
        </Alert>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Atividades Recentes dos Alunos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <Activity className="h-6 w-6 text-green-500"/>
                    <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Ana Silva</span> completou o <span className="font-semibold text-foreground">Treino A</span>.
                    </p>
                    <span className="ml-auto text-xs text-muted-foreground">1h atrás</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <Activity className="h-6 w-6 text-blue-500"/>
                    <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Bruno Costa</span> atualizou seu progresso de peso.
                    </p>
                    <span className="ml-auto text-xs text-muted-foreground">3h atrás</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <Activity className="h-6 w-6 text-red-500"/>
                    <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Carla Dias</span> marcou o treino de ontem como <span className="font-semibold text-foreground">Faltou</span>.
                    </p>
                    <span className="ml-auto text-xs text-muted-foreground">1d atrás</span>
                 </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Próximas Sessões Agendadas</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-4">
                 <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://picsum.photos/300/300" data-ai-hint="person portrait" />
                        <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">Ana Silva</p>
                        <p className="text-sm text-muted-foreground">Treino B - Inferiores</p>
                    </div>
                    <span className="ml-auto text-sm font-medium">Amanhã, 10:00</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="https://picsum.photos/302/302" data-ai-hint="person portrait" />
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">Carla Dias</p>
                        <p className="text-sm text-muted-foreground">Avaliação Física</p>
                    </div>
                    <span className="ml-auto text-sm font-medium">Amanhã, 11:00</span>
                 </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
