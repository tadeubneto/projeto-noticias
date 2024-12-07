import Link from 'next/link'
import { formatDate } from '@/utils/format'
import type { Noticia, Categoria, Usuario } from '@prisma/client'

type NoticiaPrincipal = Noticia & {
  categoria: Categoria
  autor: Usuario
  id: Noticia
}

export default function CardPrincipal({noticia}: {noticia: NoticiaPrincipal}) {
  return (
    <div className="max-w-screen-xl mx-auto mb-6 overflow-hidden flex flex-col">
    <div className='flex justify-around'>    
    <div className='rounded-lg overflow-hidden'>
    <img
      src={`https://picsum.photos/seed/${noticia.id}/200/200`}
      alt={noticia.titulo}
      className="w-64 h-64 object-cover"
    />
    </div>
    <div className="p-4 flex flex-col justify-between w-1/4">

      <div className="text-sm text-gray-600">
        <div className="flex items-center mb-2">
          <span className="mr-2">{formatDate(noticia.dataPublicacao)}</span>
          <span className="mx-2">•</span>
          <Link href={`/categoria/${noticia.categoriaId}`} className="text-blue-500">
            {noticia.categoria.nome}
          </Link>
        </div>
      </div>
      <div>
        <span>{noticia.conteudo.slice(0, 20)}...</span>
      </div>  

      <Link href={`/noticia/${noticia.id}`} className="text-xl font-semibold hover:text-blue-600">
        {noticia.titulo}
      </Link>
          <span className="text-blue-500">{noticia.autor.nome}</span> 
          
    </div>
    </div>
  </div>
  

   
  )
}