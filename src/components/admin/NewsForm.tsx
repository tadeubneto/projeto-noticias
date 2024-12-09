

// export default function NewsForm() { 

  

//   return (
//     <div className="flex justify-center items-center flex-col border rounded bg-slate-100 h-full ">
//       <h1 className="font-bold mb-5">Poste sua notícia</h1>
//       <div>
//         <form>
//           <div className="flex flex-col ">
//             <input
//               type="text"
//               name="titulo"
//               placeholder="Título"
//               className="border mb-5"
//             />
//           </div>
//           <div className="flex flex-col mb-5">
//             <textarea name="conteudo"></textarea>
//           </div>
//           <div className="flex flex-col mb-5">
//             {/* <select name="categoria">
//               {categorias.map((categoria) => (
//                 <option key={categoria.id} href={`/categoria/${categoria.id}`}>
//                   {categoria.nome}
//                 </option>
//               ))}
//             </select> */}
//           </div>
//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full"
//           >Salvar
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// src/app/admin/noticias/NewsForm.tsx
'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import type { Categoria, Noticia } from "@prisma/client"

type NoticiaEdit = Noticia & {
  categoria: Categoria
}

interface NewsFormProps {
  noticia?: NoticiaEdit
  categorias: Categoria[]
  onSuccess?: () => void
}

export function NewsForm({ noticia, categorias, onSuccess }: NewsFormProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      titulo: formData.get('titulo'),
      conteudo: formData.get('conteudo'),
      categoriaId: parseInt(formData.get('categoriaId') as string)
    }

    try {
      if (noticia) {
        await fetch(`/api/admin/noticias/${noticia.id}`, {
          method: 'PUT',
          body: JSON.stringify(data)
        })
      } else {
        await fetch('/api/admin/noticias', {
          method: 'POST',
          body: JSON.stringify(data)
        })
      }
      router.refresh()
      onSuccess?.()
    } catch (error) {
      console.error('Erro ao salvar notícia:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        name="titulo"
        defaultValue={noticia?.titulo}
        placeholder="Título da notícia"
        required
      />
      
      <Select name="categoriaId" defaultValue={noticia?.categoriaId.toString()}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma categoria" />
        </SelectTrigger>
        <SelectContent>
          {categorias.map(categoria => (
            <SelectItem 
              key={categoria.id} 
              value={categoria.id.toString()}
            >
              {categoria.nome}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Textarea
        name="conteudo"
        defaultValue={noticia?.conteudo}
        placeholder="Conteúdo da notícia"
        required
        className="min-h-[200px]"
      />

      <Button disabled={loading}>
        {loading ? 'Salvando...' : 'Salvar'}
      </Button>
    </form>
  )
}