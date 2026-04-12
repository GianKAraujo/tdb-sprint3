import { useForm, type SubmitHandler } from "react-hook-form"
import { useState, useEffect } from "react"

type FormContato = {
  nome: string
  email: string
  assunto: string
  mensagem: string
}

const Contato = () => {
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    document.title = "Contato - Turma do Bem"
  }, [])

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormContato>()

  const onSubmit: SubmitHandler<FormContato> = (data) => {
    console.log("Dados enviados:", data)
    setEnviado(true)
    reset()
  }

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-8 text-center">
          Contato
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto flex flex-col gap-4">
          <div>
            <label htmlFor="txtNome" className="font-semibold text-[#4A3728] block mb-1">
              Nome *
            </label>
            <input
              id="txtNome"
              className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
              {...register("nome", {
                required: "Nome é obrigatório",
                minLength: { value: 3, message: "Mínimo de 3 caracteres" }
              })}
            />
            {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
          </div>

          <div>
            <label htmlFor="txtEmail" className="font-semibold text-[#4A3728] block mb-1">
              Email *
            </label>
            <input
              id="txtEmail"
              type="email"
              className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Email inválido"
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label htmlFor="txtAssunto" className="font-semibold text-[#4A3728] block mb-1">
              Assunto *
            </label>
            <input
              id="txtAssunto"
              className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
              {...register("assunto", {
                required: "Assunto é obrigatório"
              })}
            />
            {errors.assunto && <span className="text-red-500 text-sm">{errors.assunto.message}</span>}
          </div>

          <div>
            <label htmlFor="txtMensagem" className="font-semibold text-[#4A3728] block mb-1">
              Mensagem *
            </label>
            <textarea
              id="txtMensagem"
              rows={5}
              className="w-full p-2 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] resize-y focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
              {...register("mensagem", {
                required: "Mensagem é obrigatória",
                minLength: { value: 10, message: "Mínimo de 10 caracteres" }
              })}
            />
            {errors.mensagem && <span className="text-red-500 text-sm">{errors.mensagem.message}</span>}
          </div>

          <button
            type="submit"
            className="bg-[#F28F3B] text-white font-bold py-3 rounded hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all"
          >
            Enviar
          </button>

          {enviado && (
            <p className="text-[#70C1B3] font-semibold text-center mt-2">
              Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </main>
    </>
  )
}

export default Contato
