
import { prisma } from "@/lib/prisma"
import NewsCard from "@/components/public/NewsCard"
import CategoryNav from "@/components/public/CategoryNav"
import Wellcome from "@/components/public/WellcomeCont"
import CardIndex from "@/components/public/CardIndex"
import { notFound } from "next/navigation"


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

  
const ultimaNoticia = noticias[0]

  return (
    <main className="container sm:px-6 lg:px-8 max-w-screen-xl flex-1">
      <Wellcome />  
      <div className="mt-6">        
        <CardIndex noticia={ultimaNoticia} />
      </div>
      <CategoryNav categorias={categorias} />      
      <h2 style={{fontSize: '20px', fontWeight: 'bold'}}>Últimas Notícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {noticias.map((noticia) => (
          <NewsCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </main>
  )
}