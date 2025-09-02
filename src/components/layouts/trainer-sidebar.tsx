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
  Users,
  Dumbbell,
  Calendar,
} from "lucide-react";

const links = [
  { href: "/dashboard", label: "Painel", icon: LayoutDashboard },
  { href: "/dashboard/students", label: "Alunos", icon: Users },
  { href: "/dashboard/exercises", label: "Exercícios", icon: Dumbbell },
  { href: "/dashboard/schedule", label: "Agenda", icon: Calendar },
];

export function TrainerSidebar() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {links.map((link) => (
        <SidebarMenuItem key={link.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname === link.href || (link.href !== '/dashboard' && pathname.startsWith(link.href))}
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
