import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="bg-[#70C1B3] text-white text-center p-6">
        <p>&copy; 2025 Turma do Bem - Projeto de Gestão de Atendimentos</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-2">
          <Link to="/" className="text-white hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-white mx-2 font-semibold transition rounded">
            Home
          </Link>
          <Link to="/sobre" className="text-white hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-white mx-2 font-semibold transition rounded">
            Sobre
          </Link>
          <Link to="/solucao" className="text-white hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-white mx-2 font-semibold transition rounded">
            Solução
          </Link>
          <Link to="/integrantes" className="text-white hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-white mx-2 font-semibold transition rounded">
            Integrantes
          </Link>
          <Link to="/faq" className="text-white hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-white mx-2 font-semibold transition rounded">
            FAQ
          </Link>
          <Link to="/contato" className="text-white hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-white mx-2 font-semibold transition rounded">
            Contato
          </Link>
        </nav>
      </footer>
    </>
  )
}

export default Footer
