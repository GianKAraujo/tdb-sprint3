import { useEffect } from "react"

const Sobre = () => {
  useEffect(() => {
    document.title = "Sobre o Projeto - Turma do Bem"
  }, [])

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-3xl mx-auto">
          <section className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-4">O Desafio Atual</h1>
            <p className="text-lg leading-relaxed">
              Atualmente, os contatos da Turma do Bem chegam por múltiplos canais — principalmente e-mail e WhatsApp —, o que dificulta o controle e compromete a agilidade nas respostas. Os públicos atendidos são: Dentistas, Voluntários, Beneficiados, Doadores e Pessoas que solicitam ajuda.
            </p>
          </section>

          <section className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-4">A Solução Proposta</h1>
            <p className="text-lg mb-4">A solução ideal deverá:</p>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Centralizar todos os atendimentos em uma única plataforma;</li>
              <li>Automatizar o encaminhamento das mensagens para as áreas responsáveis;</li>
              <li>Permitir o acompanhamento do status de cada solicitação (em aberto, em andamento, concluído etc.);</li>
              <li>Gerar relatórios gerenciais para apoiar a tomada de decisão;</li>
              <li>Garantir agilidade, organização e qualidade no relacionamento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-4">Tecnologias</h1>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#70C1B3] text-white px-4 py-2 rounded-lg font-semibold">React</span>
              <span className="bg-[#F28F3B] text-white px-4 py-2 rounded-lg font-semibold">TypeScript</span>
              <span className="bg-[#70C1B3] text-white px-4 py-2 rounded-lg font-semibold">Vite</span>
              <span className="bg-[#F28F3B] text-white px-4 py-2 rounded-lg font-semibold">Tailwind CSS</span>
              <span className="bg-[#70C1B3] text-white px-4 py-2 rounded-lg font-semibold">React Router</span>
              <span className="bg-[#F28F3B] text-white px-4 py-2 rounded-lg font-semibold">React Hook Form</span>
            </div>
          </section>

          <section>
            <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-4">Roadmap</h1>
            <div className="bg-white border-2 border-[#70C1B3] rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#70C1B3] text-white px-3 py-1 rounded text-sm font-bold">Sprint 1</span>
                  <span>Estruturação HTML/CSS</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#70C1B3] text-white px-3 py-1 rounded text-sm font-bold">Sprint 2</span>
                  <span>Front-end com HTML, CSS e JavaScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-[#F28F3B] text-white px-3 py-1 rounded text-sm font-bold">Sprint 3</span>
                  <span>Migração para React + Vite + TypeScript</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="bg-gray-400 text-white px-3 py-1 rounded text-sm font-bold">Sprint 4</span>
                  <span>Integração com API Java (Back-end)</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default Sobre
