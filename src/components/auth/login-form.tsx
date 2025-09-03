"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  password: z.string().min(1, {
    message: "A senha é obrigatória.",
  }),
});

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const validEmails = ["aluno@email.com", "trainer@email.com"];

    if (!validEmails.includes(values.email)) {
        toast({
            title: "Erro de Login",
            description: "Credenciais inválidas. Por favor, use um dos e-mails de demonstração.",
            variant: "destructive",
        });
        return;
    }

    toast({
      title: "Login realizado com sucesso!",
      description: "Redirecionando para o painel...",
    });

    if (values.email.includes("aluno")) {
      router.push("/aluno");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">E-mail</FormLabel>
              <FormControl>
                <Input className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500" placeholder="seu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-300">Senha</FormLabel>
              <FormControl>
                <Input className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500" type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-slate-200 text-slate-900 hover:bg-slate-300">Entrar</Button>
      </form>
    </Form>
  );
}
