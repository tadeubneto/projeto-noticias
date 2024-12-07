// components/CategoryNav.tsx
import Link from 'next/link'
import type { Categoria } from '@prisma/client'

export default function CategoryNav({ categorias }: { categorias: Categoria[] }) {
  return (
    <nav className="flex gap-4 overflow-x-auto py-4">
      {categorias.map((categoria) => (
        <Link
          key={categoria.id}
          href={`/categoria/${categoria.id}`}
          className="text-white px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 whitespace-nowrap"
        >
          {categoria.nome}
        </Link>
      ))}
    </nav>
  )
}