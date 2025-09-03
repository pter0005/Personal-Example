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
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-12 w-12 text-slate-200" />
            <h1 className="text-3xl font-bold tracking-tight text-slate-200">TrainFlow</h1>
            <p className="text-slate-400">Bem-vindo(a) de volta! Faça login na sua conta.</p>
        </div>
        
        <Card className="w-full bg-slate-900/30 backdrop-blur-lg border-white/10 aurora-background">
            <CardHeader className="relative z-10">
                <CardTitle className="text-slate-200">Login</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
                <LoginForm />
            </CardContent>
        </Card>

        <Card className="bg-slate-900/30 backdrop-blur-lg border-white/10 aurora-background">
            <CardHeader className="relative z-10">
                <CardTitle className="text-base text-slate-200">Credenciais de Demonstração</CardTitle>
                <CardDescription className="text-slate-400">Use os e-mails abaixo para acessar os painéis.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4 text-sm">
                <div>
                    <h3 className="font-semibold text-slate-200">Personal Trainer</h3>
                    <p className="text-slate-400">E-mail: <span className="font-mono text-slate-300">trainer@email.com</span></p>
                    <p className="text-slate-400">Senha: <span className="font-mono text-slate-300">qualquer_senha</span></p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                    <h3 className="font-semibold text-slate-200">Aluno</h3>
                    <p className="text-slate-400">E-mail: <span className="font-mono text-slate-300">aluno@email.com</span></p>
                    <p className="text-slate-400">Senha: <span className="font-mono text-slate-300">qualquer_senha</span></p>
                </div>
            </CardContent>
        </Card>

        <p className="text-center text-sm text-slate-400">
            Não tem uma conta?{' '}
            <Link href="/register" className="font-medium text-slate-300 hover:underline">
                Cadastre-se
            </Link>
        </p>
      </div>
    </main>
  );
}
