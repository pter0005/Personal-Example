import { AppShell } from "@/components/layouts/app-shell";
import { StudentSidebar } from "@/components/layouts/student-sidebar";

export default function AlunoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell userType="student" sidebarContent={<StudentSidebar />}>
      {children}
    </AppShell>
  );
}
