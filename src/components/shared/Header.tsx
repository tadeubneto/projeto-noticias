export default function Header() {
    return (
      <header className="bg-white border-b border-gray-200 w-screen">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-red-500">HorseNews</h1>
            </div>
            <div>
                <p>|</p>
            </div>
            <div className="flex" >
              <p className="text-1xl  text-gray-900">links</p>
              <p className="text-1xl  text-gray-900">links</p>
              <p className="text-1xl  text-gray-900">links</p>
              <p className="text-1xl  text-gray-900">links</p>
            </div>
            <div className="flex" >
              <p className="text-1xl  text-gray-900">facebook</p>
              <p className="text-1xl  text-gray-900">intagram</p>
              
            </div>
            <div>
                <button className="bg-blue-700 px-4 py-2 rounded-lg text-white hover:bg-blue-600" >Login</button>
            </div>
          </div>
        </div>
      </header>
    )
  }