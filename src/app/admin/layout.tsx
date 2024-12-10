// app/admin/layout.tsx
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import AdminSidebar from "@/components/admin/Sidebar"
import { authConfig } from "@/auth.config"



export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authConfig)

  if (!session) {
    redirect("/auth/login")
  }

  return (
    <div className="flex h-screen w-full">
      <AdminSidebar />     
      <main className="p-8 w-full">{children}</main>
    </div>
  )
}
