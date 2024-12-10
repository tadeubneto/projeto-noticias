// app/admin/page.tsx

import { prisma } from "@/lib/prisma"
import { Card } from "@/components/ui/card"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"





export default async function AdminHome() {
const session = await getServerSession(authOptions) 

console.log(session)

 const stats = await prisma.$transaction([
   prisma.noticia.count(),
   prisma.categoria.count(),
   prisma.noticia.findMany({
     take: 2,
     orderBy: { dataPublicacao: 'desc' },
     include: { categoria: true }
   })
 ])

 const [totalNoticias, totalCategorias, ultimasNoticias] = stats

 const nomeUsuario = session?.user?.name || 'Usuário'

 return (
   <div className="space-y-6">
     <h1 className="text-3xl font-bold">Dashboard</h1>
     <p>Bem vindo, <span className="font-bold">{nomeUsuario}</span>!</p>
 
     
     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
       <Card className="p-6">
         <h3 className="text-lg font-medium">Total de Notícias</h3>
         <p className="text-3xl font-bold mt-2">{totalNoticias}</p>
       </Card>
       
       <Card className="p-6">
         <h3 className="text-lg font-medium">Categorias</h3>
         <p className="text-3xl font-bold mt-2">{totalCategorias}</p>
       </Card>
     </div>

     <div className="mt-8">
       <h2 className="text-xl font-bold mb-4">Últimas Notícias Postadas</h2>
       <div className="space-y-4">
         {ultimasNoticias.map((noticia) => (
           <Card key={noticia.id} className="p-4">
             <h3 className="font-medium">{noticia.titulo}</h3>
             <p className="text-sm text-gray-500 mt-1">
               {noticia.categoria.nome} • {new Date(noticia.dataPublicacao).toLocaleDateString()}
             </p>
           </Card>
         ))}
       </div>
     </div>
   </div>
 )
}