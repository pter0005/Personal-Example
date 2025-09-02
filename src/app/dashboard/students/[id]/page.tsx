import { students } from "@/lib/data";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StudentProfileTabs } from "@/components/dashboard/student-profile-tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StudentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const student = students.find((s) => s.id === params.id);

  if (!student) {
    notFound();
  }
  
  const initials = student.name.split(" ").map((n) => n[0]).join("");

  return (
    <>
      <PageHeader title="Perfil do Aluno">
        <Button variant="outline" asChild>
          <Link href="/dashboard/students">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Alunos
          </Link>
        </Button>
      </PageHeader>
      
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="person portrait" />
          <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
        </Avatar>
        <div className="pt-2">
            <h2 className="text-2xl font-bold">{student.name}</h2>
            <p className="text-muted-foreground">{student.email}</p>
        </div>
      </div>

      <StudentProfileTabs student={student} />
    </>
  );
}
