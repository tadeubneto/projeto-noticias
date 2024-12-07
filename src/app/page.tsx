
import { prisma } from "@/lib/prisma"
import NewsCard from "@/components/public/NewsCard"
import CategoryNav from "@/components/public/CategoryNav"

export default async function Home() {
  const noticias = await prisma.noticia.findMany({
    take: 10,
    orderBy: {
      dataPublicacao: 'desc'
    },
    include: {
      categoria: true,
      autor: true
    }
  })

  const categorias = await prisma.categoria.findMany()

  return (
    <main className="container px-4 flex-1 w-screen">
      <CategoryNav categorias={categorias} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {noticias.map((noticia) => (
          <NewsCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </main>
  )
}