
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"

export default function AdminSidebar() {
  const pathname = usePathname()

  const links = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/noticias", label: "Notícias" },
    { href: "/admin/categorias", label: "Categorias" },
  ]

  return (
    <aside className="w-64 bg-red-500 text-gary-800 font-bold p-6">
      <nav className="space-y-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block p-2 rounded hover:text-white ${
              pathname === link.href ? "bg-red-200" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}

        <button        
          onClick={() => signOut()}
          className="w-full text-left p-2 text-white hover:bg-gray-300 rounded"
        >
          Sair
        </button>
      </nav>
    </aside>
  )
}