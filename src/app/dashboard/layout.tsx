import { DashboardNav } from "@/components/dashboard-nav"
import { SidebarProvider, Sidebar, SidebarContent } from "@/components/ui/sidebar"
import type React from "react" // Import React

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar>
          <SidebarContent>
            <DashboardNav />
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-y-auto bg-background p-8">{children}</main>
      </div>
    </SidebarProvider>
  )
}

