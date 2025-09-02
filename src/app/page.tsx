import Link from 'next/link';
import { LoginForm } from '@/components/auth/login-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-secondary/50 via-background to-accent/20 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">TrainFlow</h1>
            <p className="text-muted-foreground">Bem-vindo(a) de volta! Faça login na sua conta.</p>
        </div>
        
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="text-base">Credenciais de Demonstração</CardTitle>
                <CardDescription>Use os e-mails abaixo para acessar os painéis.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
                <div>
                    <h3 className="font-semibold">Personal Trainer</h3>
                    <p className="text-muted-foreground">E-mail: <span className="font-mono">trainer@email.com</span></p>
                    <p className="text-muted-foreground">Senha: <span className="font-mono">qualquer_senha</span></p>
                </div>
                <Separator />
                <div>
                    <h3 className="font-semibold">Aluno</h3>
                    <p className="text-muted-foreground">E-mail: <span className="font-mono">aluno@email.com</span></p>
                    <p className="text-muted-foreground">Senha: <span className="font-mono">qualquer_senha</span></p>
                </div>
            </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{' '}
            <Link href="/register" className="font-medium text-primary hover:underline">
                Cadastre-se
            </Link>
        </p>
      </div>
    </main>
  );
}