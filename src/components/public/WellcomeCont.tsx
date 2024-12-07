export default function Wellcome() {
  return (
    <div className="bg-gray-200 shadow-xl rounded-lg py-8 px-6 my-6  max-w-screen-xl mx-auto flex flex-col items-center gap-2">
      <p >Bem vindo a Horse News </p>
      <p className="font-bold" style={{fontSize: '18px'}}>
      Onde a <span className="text-red-600" >paixão </span> pelo mundo <span className="text-red-600" >equino</span>
       🐴 ganha destaque! 
      </p>
      <p style={{fontWeight: 'bold'}}>Fique por dentro das últimas novidades e curiosidades 🏇</p>
    </div>
  );
}
