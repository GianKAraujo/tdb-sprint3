import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const SolucaoTecnica = () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Detalhes Técnicos - Turma do Bem"
  }, [])

  const etapas = [
    {
      fase: "Front-End",
      tecnologias: "React + Vite + TypeScript + Tailwind CSS",
      descricao: "Interface moderna e responsiva, construída com componentização e SPA para navegação fluida."
    },
    {
      fase: "Back-End",
      tecnologias: "Java + Quarkus (API RESTful)",
      descricao: "API robusta para processar e gerenciar todas as solicitações de atendimento da ONG."
    },
    {
      fase: "Banco de Dados",
      tecnologias: "Oracle SQL",
      descricao: "Estrutura relacional para armazenar dados de beneficiários, dentistas, voluntários e doadores."
    },
    {
      fase: "Inteligência Artificial",
      tecnologias: "Python + Machine Learning",
      descricao: "Modelo preditivo para auxiliar na triagem e priorização de atendimentos."
    }
  ]

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-4 text-center">
          Detalhes Técnicos
        </h1>
        <p className="text-lg text-center text-[#4A3728] mb-10 max-w-2xl mx-auto">
          A arquitetura da plataforma foi pensada para ser escalável, modular e de fácil manutenção.
        </p>

        <div className="max-w-3xl mx-auto space-y-6 mb-10">
          {etapas.map((etapa) => (
            <div key={etapa.fase} className="bg-white border-2 border-[#70C1B3] rounded-lg p-6 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                <span className="bg-[#F28F3B] text-white px-4 py-1 rounded font-bold text-sm">
                  {etapa.fase}
                </span>
                <span className="text-sm text-[#70C1B3] font-semibold">{etapa.tecnologias}</span>
              </div>
              <p className="text-[#4A3728]">{etapa.descricao}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button type="button"
            onClick={() => navigate("/solucao")}
            className="bg-[#F28F3B] text-white px-6 py-3 rounded font-semibold hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all"
          >
            ← Voltar para Solução
          </button>
        </div>
      </main>
    </>
  )
}

export default SolucaoTecnica
