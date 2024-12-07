
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site de Notícias',
  description: 'Portal de notícias criado com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" >
      <body className={`inter.className flex flex-col items-center justify-between h-screen w-screen`}>
        
        <Header />
        <AuthProvider>
            {children}    
        </AuthProvider>            
        <Footer />      
        
            
      </body>
    </html>
  )
}