'use client'

import { useSession } from "next-auth/react"

export default function AdminPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Carregando...</div> 
  }

  

  return (
    <div>
      <h1>Seja bem-vindo novamente, <span className="font-bold">{session.user.name}!</span></h1>
      <br />
      <p>Utilize o menu ao lado para criar, editar ou excluir uma nova notícia ou categoria</p>
      <p>Para sair, clique no botão <span className="font-bold text-red-500">SAIR</span> que fica no meunu lateral. </p>
      </div>
  )
}
