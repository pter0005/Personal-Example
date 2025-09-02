import { AppShell } from "@/components/layouts/app-shell";
import { TrainerSidebar } from "@/components/layouts/trainer-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell userType="trainer" sidebarContent={<TrainerSidebar />}>
      {children}
    </AppShell>
  );
}
