// app/categoria/[id]/page.tsx
import { prisma } from "@/lib/prisma"
import NewsCard from "@/components/public/NewsCard"
import { notFound } from "next/navigation"
import CategoryNav from "@/components/public/CategoryNav"

interface Props {
  params: {
    id: string
  }
}

export default async function CategoriaPage({ params }: Props) {
  const categoria = await prisma.categoria.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!categoria) {
    notFound()
  }

  const noticias = await prisma.noticia.findMany({
    where: {
      categoriaId: parseInt(params.id)
    },
    include: {
      categoria: true,
      autor: true
    },
    orderBy: {
      dataPublicacao: 'desc'
    }
  })


  const categorias = await prisma.categoria.findMany()

  return (
    <main className="container mx-auto px-4 flex-1">
        <CategoryNav categorias={categorias} />
      <h1 className="text-3xl font-bold mb-6">{categoria.nome}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.map((noticia) => (
          <NewsCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </main>
  )
}