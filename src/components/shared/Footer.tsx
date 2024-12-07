export default function Footer() {
    return (
      <footer className="bg-white border-t w-full border-gray-200">
        <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} HorseNews. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    )
  }