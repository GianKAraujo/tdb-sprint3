import { useState, useEffect } from "react"

type FaqItem = {
  pergunta: string
  resposta: string
}

const FAQ = () => {
  const [aberto, setAberto] = useState<number | null>(null)

  useEffect(() => {
    document.title = "FAQ - Turma do Bem"
  }, [])

  const faqs: FaqItem[] = [
    { pergunta: "Qual o prazo do projeto?", resposta: "O prazo para entrega do projeto é de 3 meses." },
    { pergunta: "Quem pode usar a ferramenta?", resposta: "A ferramenta é destinada aos públicos da ONG Turma do Bem, incluindo dentistas, voluntários, beneficiados, doadores e pessoas que solicitam ajuda." },
    { pergunta: "Como posso contribuir com o projeto?", resposta: "Você pode contribuir entrando em contato com a equipe pelo formulário de contato." },
    { pergunta: "A ferramenta é gratuita para a ONG?", resposta: "Sim, como um projeto acadêmico para a Turma do Bem, a ferramenta será entregue gratuitamente para a ONG." },
    { pergunta: "Quais são os principais benefícios da ferramenta?", resposta: "Os principais benefícios incluem a centralização de atendimentos, automação de encaminhamentos, acompanhamento de status e geração de relatórios gerenciais para otimizar a gestão." },
    { pergunta: "Em que fase de desenvolvimento o projeto se encontra?", resposta: "Atualmente, o projeto está na Sprint 3, focando na migração para React + Vite + TypeScript com Tailwind CSS." },
    { pergunta: "Existe documentação técnica disponível?", resposta: "Sim, toda a documentação técnica do projeto estará disponível no nosso repositório GitHub." }
  ]

  const toggleFaq = (index: number) => {
    if (aberto === index) {
      setAberto(null)
    } else {
      setAberto(index)
    }
  }

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-8 text-center">
          Perguntas Frequentes
        </h1>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 mb-2">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={aberto === index}
                className="w-full text-left p-4 bg-white font-semibold text-[#4A3728] text-lg hover:bg-[#F28F3B] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition rounded-t flex justify-between items-center"
              >
                <span>{faq.pergunta}</span>
                <span className="text-xl ml-2">{aberto === index ? "−" : "+"}</span>
              </button>
              {aberto === index && (
                <div className="p-4 bg-white text-[#4A3728]">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default FAQ
