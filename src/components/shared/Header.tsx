import Link from "next/link";
import { Facebook, Instagram, User} from "lucide-react";

export default function Header() {
    return (
      <header className="bg-white border-b border-gray-200 w-full">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-bold text-red-500">
             HorseNews
                </Link>
                <p>|</p>           
                <p className="text-1xl font-semibold cursor-pointer text-gray-800 hover:text-red-600">Notícias</p>
                <p className="text-1xl font-semibold cursor-pointer text-gray-800 hover:text-red-600">Campeonatos</p>
                <p className="text-1xl font-semibold cursor-pointer text-gray-800 hover:text-red-600">Classificados</p>
                <p className="text-1xl font-semibold cursor-pointer text-gray-800 hover:text-red-600">Atletas</p>
           
            </div>           
            <div className="flex items-center">
            <div className="flex gap-5 mr-5 " >
            <Facebook size={20} className="cursor-pointer hover:opacity-70"/>
            <Instagram size={20} className="cursor-pointer hover:opacity-70"/>
              
            </div>
                <button className=" flex items-center bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600" ><User size={20} className="mr-2"/>Login</button>
            </div>
          </div>
        </div>
      </header>
    ) 
  }