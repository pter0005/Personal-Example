// Forçando a sincronização do ambiente
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300/30 via-sky-900/50 to-slate-900 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight text-white">TrainFlow</h1>
            <p className="text-slate-300">Bem-vindo(a) de volta! Faça login na sua conta.</p>
        </div>
        
        <div className="group relative">
          <Card className="w-full bg-slate-800/50 backdrop-blur-lg border-white/10 transition-transform duration-300 group-hover:scale-105">
              <CardHeader>
                  <CardTitle className="text-white">Login</CardTitle>
              </CardHeader>
              <CardContent>
                  <LoginForm />
              </CardContent>
          </Card>
        </div>

        <div className="group relative">
          <Card className="bg-slate-800/50 backdrop-blur-lg border-white/10 transition-transform duration-300 group-hover:scale-105">
              <CardHeader>
                  <CardTitle className="text-base text-white">Credenciais de Demonstração</CardTitle>
                  <CardDescription className="text-slate-400">Use os e-mails abaixo para acessar os painéis.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                  <div>
                      <h3 className="font-semibold text-white">Personal Trainer</h3>
                      <p className="text-slate-400">E-mail: <span className="font-mono text-slate-300">trainer@email.com</span></p>
                      <p className="text-slate-400">Senha: <span className="font-mono text-slate-300">qualquer_senha</span></p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                      <h3 className="font-semibold text-white">Aluno</h3>
                      <p className="text-slate-400">E-mail: <span className="font-mono text-slate-300">aluno@email.com</span></p>
                      <p className="text-slate-400">Senha: <span className="font-mono text-slate-300">qualquer_senha</span></p>
                  </div>
              </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-slate-400">
            Não tem uma conta?{' '}
            <Link href="/register" className="font-medium text-primary hover:underline">
                Cadastre-se
            </Link>
        </p>
      </div>
    </main>
  );
}
