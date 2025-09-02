import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Student } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  const initials = student.name.split(" ").map((n) => n[0]).join("");

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="person portrait" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-semibold">{student.name}</h3>
          <p className="text-sm text-muted-foreground">{student.email}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm font-medium">Objetivo:</p>
        <p className="text-sm text-muted-foreground">{student.goal}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/dashboard/students/${student.id}`}>
            Ver Perfil
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
