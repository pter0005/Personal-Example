import Link from 'next/link';
import { RegisterForm } from '@/components/auth/register-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/icons';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-secondary/50 via-background to-accent/20 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Crie sua Conta</h1>
          <p className="text-muted-foreground">Comece sua jornada fitness hoje mesmo.</p>
        </div>
        
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Cadastro</CardTitle>
                <CardDescription>Preencha os campos abaixo para se registrar.</CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm />
            </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{' '}
            <Link href="/" className="font-medium text-primary hover:underline">
                Faça login
            </Link>
        </p>
      </div>
    </main>
  );
}