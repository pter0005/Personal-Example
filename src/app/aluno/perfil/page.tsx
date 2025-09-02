"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { students } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

const profileFormSchema = z.object({
  name: z.string().min(2, "O nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  goal: z.string().min(5, "Descreva melhor seu objetivo."),
  physicalRestrictions: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function MyProfilePage() {
  const student = students[0];
  const { toast } = useToast();
  const initials = student.name.split(" ").map((n) => n[0]).join("");
  
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: student.name,
      email: student.email,
      goal: student.goal,
      physicalRestrictions: student.physicalRestrictions.join("\n"),
    },
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "Perfil Atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
  }

  return (
    <>
      <PageHeader
        title="Meu Perfil"
        description="Visualize e edite suas informações."
      />
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint="person portrait" />
              <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{student.name}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="goal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meu Principal Objetivo</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ex: Hipertrofia, perda de peso..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="physicalRestrictions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Restrições Físicas</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Liste qualquer restrição, uma por linha."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Salvar Alterações</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
