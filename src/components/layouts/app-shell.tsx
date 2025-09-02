"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/shared/user-nav";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { MOCK_TRAINER_ID, students } from "@/lib/data";

interface AppShellProps {
  children: React.ReactNode;
  sidebarContent: React.ReactNode;
  userType: 'trainer' | 'student';
}

export function AppShell({ children, sidebarContent, userType }: AppShellProps) {
  const user = userType === 'trainer' ? {
    name: "Carlos Pereira",
    email: "trainer@email.com",
    avatarUrl: "https://picsum.photos/200/200",
  } : students.find(s => s.email.includes('aluno'))!;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="size-10 shrink-0 rounded-lg"
                asChild
              >
                <Link href={userType === 'trainer' ? '/dashboard' : '/aluno'}>
                  <Icons.logo className="size-5 fill-current" />
                </Link>
              </Button>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <h2 className="font-medium">TrainFlow</h2>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>{sidebarContent}</SidebarContent>
          <SidebarFooter className="group-data-[collapsible=icon]:hidden">
            {/* Can add footer content here */}
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
            <SidebarTrigger className="md:hidden" />
            <div className="flex-1" />
            <UserNav name={user.name} email={user.email} avatarUrl={user.avatarUrl} />
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
