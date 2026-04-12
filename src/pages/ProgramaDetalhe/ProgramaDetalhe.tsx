import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ProgramaDetalhe = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const programas = [
    {
      id: 1,
      nome: "Programa Dentista do Bem",
      descricao: "O Dentista do Bem é o principal programa da TdB, destinado a crianças e adolescentes em situação de vulnerabilidade social na faixa dos 11 a 17 anos. Os nossos beneficiários possuem graves problemas bucais e não têm condições financeiras de pagar pelo tratamento. Após serem selecionados e entrarem no programa, os jovens recebem atendimento odontológico e gratuito – independente da complexidade dos casos – até completarem 18 anos.",
      publico: "Crianças e adolescentes de 11 a 17 anos",
      impacto: "Mais de 80 mil jovens atendidos desde a criação do programa"
    },
    {
      id: 2,
      nome: "Programa Apolônias do Bem",
      descricao: "O Apolônias do Bem é um programa que oferece tratamento odontológico integral e gratuito a mulheres que viveram em situação de violência e tiveram seus dentes afetados durante as agressões. O objetivo é devolver o sorriso, a autoestima e a dignidade a essas mulheres, ajudando-as a quebrar o ciclo da violência e a recomeçar suas vidas.",
      publico: "Mulheres vítimas de violência doméstica",
      impacto: "Programa presente em diversas cidades do Brasil"
    }
  ]

  const programa = programas.find((p) => p.id === Number(id))

  useEffect(() => {
    document.title = programa ? `${programa.nome} - Turma do Bem` : "Programa não encontrado - Turma do Bem"
  }, [programa])

  if (!programa) {
    return (
      <>
        <main className="flex-1 container mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Programa não encontrado!</h1>
          <p className="text-lg text-[#4A3728] mb-6">O programa com ID "{id}" não existe.</p>
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

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-6">
            {programa.nome}
          </h1>
          <p className="text-lg leading-relaxed text-[#4A3728] mb-6">
            {programa.descricao}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border-2 border-[#70C1B3] rounded-lg p-4">
              <h3 className="font-bold text-[#F28F3B] mb-2">Público-alvo</h3>
              <p>{programa.publico}</p>
            </div>
            <div className="bg-white border-2 border-[#70C1B3] rounded-lg p-4">
              <h3 className="font-bold text-[#F28F3B] mb-2">Impacto</h3>
              <p>{programa.impacto}</p>
            </div>
          </div>

          <button type="button"
            onClick={() => navigate("/")}
            className="bg-[#F28F3B] text-white px-6 py-3 rounded font-semibold hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all"
          >
            ← Voltar para Home
          </button>
        </div>
      </main>
    </>
  )
}

export default ProgramaDetalhe
