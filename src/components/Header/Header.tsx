import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <header className="bg-[#70C1B3] text-white p-4 px-6 md:px-10">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="/logo-turma-do-bem.png"
              alt="Logo Turma do Bem"
              className="w-20 md:w-24"
            />
          </Link>

          <button
            type="button"
            className="md:hidden text-white text-3xl focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          >
            {menuAberto ? "✕" : "☰"}
          </button>

          <nav className="hidden md:block">
            <Link to="/" className="text-white hover:text-[#4A3728] hover:bg-[#F28F3B] focus:outline-none focus:ring-2 focus:ring-white px-3 py-2 rounded mx-1 font-semibold transition">
              Home
            </Link>
            <Link to="/sobre" className="text-white hover:text-[#4A3728] hover:bg-[#F28F3B] focus:outline-none focus:ring-2 focus:ring-white px-3 py-2 rounded mx-1 font-semibold transition">
              Sobre
            </Link>
            <Link to="/solucao" className="text-white hover:text-[#4A3728] hover:bg-[#F28F3B] focus:outline-none focus:ring-2 focus:ring-white px-3 py-2 rounded mx-1 font-semibold transition">
              Solução
            </Link>
            <Link to="/integrantes" className="text-white hover:text-[#4A3728] hover:bg-[#F28F3B] focus:outline-none focus:ring-2 focus:ring-white px-3 py-2 rounded mx-1 font-semibold transition">
              Integrantes
            </Link>
            <Link to="/faq" className="text-white hover:text-[#4A3728] hover:bg-[#F28F3B] focus:outline-none focus:ring-2 focus:ring-white px-3 py-2 rounded mx-1 font-semibold transition">
              FAQ
            </Link>
            <Link to="/contato" className="text-white hover:text-[#4A3728] hover:bg-[#F28F3B] focus:outline-none focus:ring-2 focus:ring-white px-3 py-2 rounded mx-1 font-semibold transition">
              Contato
            </Link>
          </nav>
        </div>

        {menuAberto && (
          <nav className="md:hidden mt-4 flex flex-col gap-2">
            <Link to="/" className="text-white hover:bg-[#F28F3B] px-3 py-2 rounded font-semibold transition" onClick={() => setMenuAberto(false)}>
              Home
            </Link>
            <Link to="/sobre" className="text-white hover:bg-[#F28F3B] px-3 py-2 rounded font-semibold transition" onClick={() => setMenuAberto(false)}>
              Sobre
            </Link>
            <Link to="/solucao" className="text-white hover:bg-[#F28F3B] px-3 py-2 rounded font-semibold transition" onClick={() => setMenuAberto(false)}>
              Solução
            </Link>
            <Link to="/integrantes" className="text-white hover:bg-[#F28F3B] px-3 py-2 rounded font-semibold transition" onClick={() => setMenuAberto(false)}>
              Integrantes
            </Link>
            <Link to="/faq" className="text-white hover:bg-[#F28F3B] px-3 py-2 rounded font-semibold transition" onClick={() => setMenuAberto(false)}>
              FAQ
            </Link>
            <Link to="/contato" className="text-white hover:bg-[#F28F3B] px-3 py-2 rounded font-semibold transition" onClick={() => setMenuAberto(false)}>
              Contato
            </Link>
          </nav>
        )}
      </header>
    </>
  )
}

export default Header
