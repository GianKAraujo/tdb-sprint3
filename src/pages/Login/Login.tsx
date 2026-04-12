import { useParams, useNavigate } from "react-router-dom"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useState, useEffect } from "react"

type LoginForm = {
  email: string
  senha: string
}

const Login = () => {
  const { tipo } = useParams()
  const navigate = useNavigate()
  const [enviado, setEnviado] = useState(false)

  useEffect(() => {
    const titulos: Record<string, string> = {
      beneficiario: "Login Beneficiário",
      dentista: "Login Dentista",
      voluntario: "Login Voluntário"
    }
    document.title = `${tipo && titulos[tipo] ? titulos[tipo] : "Login"} - Turma do Bem`
  }, [tipo])

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>()

  const tiposValidos = ["beneficiario", "dentista", "voluntario"]

  const titulos: Record<string, string> = {
    beneficiario: "Área do Beneficiário",
    dentista: "Área do Dentista",
    voluntario: "Área do Voluntário"
  }

  const descricoes: Record<string, string> = {
    beneficiario: "Acesse sua conta para acompanhar seu tratamento odontológico e agendar consultas.",
    dentista: "Acesse sua conta para gerenciar seus atendimentos voluntários e visualizar pacientes.",
    voluntario: "Acesse sua conta para ver eventos, triagens e atividades disponíveis."
  }

  if (!tipo || !tiposValidos.includes(tipo)) {
    return (
      <>
        <main className="flex-1 container mx-auto p-6 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Tipo inválido!</h1>
          <p className="text-lg text-[#4A3728] mb-6">O tipo de login "{tipo}" não existe.</p>
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

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(`Login ${tipo}:`, data)
    setEnviado(true)
  }

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-[#70C1B3] mb-2 text-center">
            {titulos[tipo]}
          </h1>
          <p className="text-center text-[#4A3728] mb-8">
            {descricoes[tipo]}
          </p>

          {enviado ? (
            <div className="bg-white border-2 border-[#70C1B3] rounded-lg p-8 text-center shadow-md">
              <h2 className="text-2xl font-bold text-[#70C1B3] mb-4">Login realizado!</h2>
              <p className="text-[#4A3728] mb-6">Bem-vindo(a) à plataforma da Turma do Bem.</p>
              <button type="button"
                onClick={() => navigate("/")}
                className="bg-[#F28F3B] text-white px-6 py-3 rounded font-semibold hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all"
              >
                Voltar para Home
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border-2 border-[#70C1B3] rounded-lg p-8 shadow-md flex flex-col gap-4">
              <div>
                <label className="font-semibold text-[#4A3728] block mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full p-3 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
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
                <label className="font-semibold text-[#4A3728] block mb-1">Senha *</label>
                <input
                  type="password"
                  className="w-full p-3 border-2 border-[#70C1B3] rounded bg-white text-[#4A3728] focus:border-[#F28F3B] focus:outline-none focus:ring-1 focus:ring-[#F28F3B]"
                  {...register("senha", {
                    required: "Senha é obrigatória",
                    minLength: { value: 6, message: "Mínimo de 6 caracteres" }
                  })}
                />
                {errors.senha && <span className="text-red-500 text-sm">{errors.senha.message}</span>}
              </div>

              <button
                type="submit"
                className="bg-[#F28F3B] text-white font-bold py-3 rounded hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all mt-2"
              >
                Entrar
              </button>

              <p className="text-center text-sm text-[#4A3728] mt-2">
                Não tem conta? Entre em contato pelo nosso{" "}
                <span className="text-[#70C1B3] font-semibold cursor-pointer" onClick={() => navigate("/contato")}>
                  formulário de contato
                </span>.
              </p>
            </form>
          )}

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

export default Login
