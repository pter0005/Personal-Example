import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { students } from "@/lib/data";
import { StudentCard } from "@/components/dashboard/student-card";

export default function StudentsPage() {
  return (
    <>
      <PageHeader
        title="Gerenciamento de Alunos"
        description="Visualize e gerencie seus alunos."
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Adicionar Aluno
        </Button>
      </PageHeader>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </>
  );
}
