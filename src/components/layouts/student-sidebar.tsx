"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Dumbbell,
  LineChart,
  Calendar,
  User,
} from "lucide-react";

const links = [
  { href: "/aluno", label: "Painel", icon: LayoutDashboard },
  { href: "/aluno/meu-treino", label: "Meu Treino", icon: Dumbbell },
  { href: "/aluno/progresso", label: "Meu Progresso", icon: LineChart },
  { href: "/aluno/agenda", label: "Minha Agenda", icon: Calendar },
  { href: "/aluno/perfil", label: "Meu Perfil", icon: User },
];

export function StudentSidebar() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href || (link.href !== '/aluno' && pathname.startsWith(link.href))}
            tooltip={{ children: link.label }}
          >
            <Link href={link.href}>
              <link.icon />
              <span>{link.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
