export default function Footer() {
    return (
      <footer className="bg-white border-t w-screen border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Notícias. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    )
  }