import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Página não encontrada - Turma do Bem"
  }, [])

  return (
    <>
      <main className="flex-1 container mx-auto p-6 text-center">
        <h1 className="text-5xl font-bold text-[#F28F3B] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#4A3728] mb-6">Página não encontrada!</h2>
        <p className="text-lg text-[#4A3728] mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button type="button"
          onClick={() => navigate("/")}
          className="bg-[#70C1B3] text-white px-6 py-3 rounded font-semibold hover:bg-[#5aab9d] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F28F3B] transition-all"
        >
          Voltar para Home
        </button>
      </main>
    </>
  )
}

export default NotFound
