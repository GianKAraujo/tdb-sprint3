import { Link } from "react-router-dom"
import { useEffect } from "react"
import Card from "../../components/Card/Card"

const Solucao = () => {
  useEffect(() => {
    document.title = "Nossa Solução - Turma do Bem"
  }, [])

  const funcionalidades = [
    {
      titulo: "Centralização de Atendimentos",
      descricao: "Todos os contatos recebidos por e-mail, WhatsApp e telefone são reunidos em uma única plataforma, facilitando o gerenciamento."
    },
    {
      titulo: "Encaminhamento Automático",
      descricao: "As mensagens são automaticamente direcionadas para a área responsável: dentistas, voluntários, doações ou beneficiados."
    },
    {
      titulo: "Acompanhamento de Status",
      descricao: "Cada solicitação possui um status atualizado em tempo real: em aberto, em andamento ou concluído."
    },
    {
      titulo: "Relatórios Gerenciais",
      descricao: "Dashboards e relatórios para apoiar a tomada de decisão da equipe gestora da Turma do Bem."
    }
  ]

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-4 text-center">
          Nossa Solução
        </h1>
        <p className="text-lg text-center text-[#4A3728] mb-10 max-w-2xl mx-auto">
          Uma plataforma de gestão de atendimentos desenvolvida especificamente para a ONG Turma do Bem, centralizando toda a comunicação e otimizando o fluxo de trabalho.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {funcionalidades.map((func) => (
            <Card key={func.titulo} className="cursor-pointer hover:scale-105 transition-transform">
              <h2 className="text-xl font-bold text-[#F28F3B] mb-2">{func.titulo}</h2>
              <p className="text-[#4A3728]">{func.descricao}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/solucao-tecnica"
            className="bg-[#70C1B3] text-white px-6 py-3 rounded font-semibold hover:bg-[#5aab9d] hover:scale-105 transition-all inline-block"
          >
            Ver Detalhes Técnicos →
          </Link>
        </div>
      </main>
    </>
  )
}

export default Solucao
