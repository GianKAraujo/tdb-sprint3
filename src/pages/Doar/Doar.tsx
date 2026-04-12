import { useNavigate } from "react-router-dom"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useState, useEffect } from "react"

type DoacaoForm = {
  nome: string
  email: string
  valor: string
  valorCustom: string
  mensagem: string
}

const Doar = () => {
  const navigate = useNavigate()
  const [enviado, setEnviado] = useState(false)
  const [valorSelecionado, setValorSelecionado] = useState("")

  useEffect(() => {
    document.title = "Fazer Doação - Turma do Bem"
  }, [])

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<DoacaoForm>()

  const valoresPreDefinidos = ["10", "25", "50", "100", "200"]

  const selecionarValor = (valor: string) => {
    setValorSelecionado(valor)
    setValue("valor", valor)
    setValue("valorCustom", "")
  }

  const onSubmit: SubmitHandler<DoacaoForm> = (data) => {
    const valorFinal = data.valorCustom || data.valor
    console.log("Doação:", {
      nome: data.nome || "Anônimo",
      email: data.email || "Não informado",
      valor: valorFinal,
      mensagem: data.mensagem || ""
    })
    setEnviado(true)
  }

  if (enviado) {
    return (
      <>
        <main className="flex-1 container mx-auto p-6">
          <div className="max-w-md mx-auto bg-white border-2 border-[#70C1B3] rounded-lg p-8 text-center shadow-md">
            <h1 className="text-3xl font-bold text-[#70C1B3] mb-4">Obrigado!</h1>
            <p className="text-lg text-[#4A3728] mb-6">
              Sua doação faz toda a diferença na vida de quem mais precisa. A Turma do Bem agradece sua generosidade!
            </p>
            <button type="button"
              onClick={() => navigate("/")}
              className="bg-[#F28F3B] text-white px-6 py-3 rounded font-semibold hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all"
            >
              Voltar para Home
            </button>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-[#70C1B3] mb-2 text-center">
            Faça uma Doação
          </h1>
          <p className="text-center text-[#4A3728] mb-8">
            Sua contribuição ajuda a transformar sorrisos. Você pode doar de forma anônima, basta não preencher os campos de nome e email.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white border-2 border-[#70C1B3] rounded-lg p-8 shadow-md flex flex-col gap-5">

            {/* Info pessoal - OPCIONAL */}
            <div className="bg-[#FFFDD0] border border-[#70C1B3] rounded-lg p-4">
              <p className="text-sm text-[#70C1B3] font-semibold mb-3">
                Identificação (opcional - deixe em branco para doação anônima)
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="font-semibold text-[#4A3728] block mb-1 text-sm">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome (opcional)"
                    className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none text-sm"
                    {...register("nome")}
                  />
                </div>
                <div>
                  <label className="font-semibold text-[#4A3728] block mb-1 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Seu email (opcional)"
                    className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none text-sm"
                    {...register("email", {
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Email inválido"
                      }
                    })}
                  />
                  {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
              </div>
            </div>

            {/* Seleção de valor */}
            <div>
              <label className="font-semibold text-[#4A3728] block mb-3">Selecione o valor da doação *</label>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                {valoresPreDefinidos.map((valor) => (
                  <button
                    key={valor}
                    type="button"
                    onClick={() => selecionarValor(valor)}
                    className={`py-3 rounded font-bold text-sm focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition ${
                      valorSelecionado === valor
                        ? "bg-[#F28F3B] text-white"
                        : "bg-white border-2 border-[#70C1B3] text-[#4A3728] hover:border-[#F28F3B]"
                    }`}
                  >
                    R$ {valor}
                  </button>
                ))}
              </div>
              <input type="hidden" {...register("valor")} />

              <div>
                <label className="text-sm text-[#4A3728] block mb-1">Ou digite outro valor (R$):</label>
                <input
                  type="number"
                  min="1"
                  placeholder="Ex: 75"
                  className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
                  {...register("valorCustom", {
                    validate: (value, formValues) => {
                      if (!value && !formValues.valor) {
                        return "Selecione ou digite um valor"
                      }
                      return true
                    }
                  })}
                  onChange={(e) => {
                    if (e.target.value) {
                      setValorSelecionado("")
                      setValue("valor", "")
                    }
                  }}
                />
                {errors.valorCustom && <span className="text-red-500 text-sm">{errors.valorCustom.message}</span>}
              </div>
            </div>

            {/* Mensagem opcional */}
            <div>
              <label className="font-semibold text-[#4A3728] block mb-1 text-sm">Mensagem (opcional)</label>
              <textarea
                rows={3}
                placeholder="Deixe uma mensagem de apoio..."
                className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] resize-y focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B] text-sm"
                {...register("mensagem")}
              />
            </div>

            <button
              type="submit"
              className="bg-[#F28F3B] text-white font-bold py-3 rounded hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all text-lg"
            >
              Doar Agora
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-[#70C1B3] font-semibold hover:text-[#4A3728] focus:outline-none focus:ring-2 focus:ring-[#F28F3B] rounded transition"
            >
              ← Voltar para Home
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Doar
