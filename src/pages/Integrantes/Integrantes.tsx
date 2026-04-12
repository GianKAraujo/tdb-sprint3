import { useEffect } from "react"

type Integrante = {
  nome: string
  rm: string
  turma: string
  foto: string
  github: string
  linkedin: string
}

const Integrantes = () => {
  useEffect(() => {
    document.title = "Integrantes - Turma do Bem"
  }, [])
  const integrantes: Integrante[] = [
    {
      nome: "Gianluca Kenis de Araujo",
      rm: "566765",
      turma: "1TDSPA",
      foto: "/fotos/gianluca.png",
      github: "https://github.com/GianLKA",
      linkedin: "#"
    },
    {
      nome: "Ruan Ribeiro",
      rm: "567693",
      turma: "1TDSPA",
      foto: "/fotos/ruan.png",
      github: "https://github.com/Ruan-Ribeiro00",
      linkedin: "https://www.linkedin.com/in/ruan-r-guimaraes"
    }
  ]

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#70C1B3] mb-8 text-center">
          Equipe do Projeto
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {integrantes.map((membro) => (
            <div
              key={membro.rm}
              className="bg-white border-2 border-[#70C1B3] rounded-lg p-6 text-center shadow-md hover:shadow-lg transition"
            >
              <img
                src={membro.foto}
                alt={`Foto de ${membro.nome}`}
                className="w-36 h-36 object-cover rounded-full mx-auto mb-4 border-4 border-[#70C1B3]"
              />
              <h2 className="text-xl font-bold text-[#F28F3B] mb-1">{membro.nome}</h2>
              <p className="font-semibold">RM: {membro.rm}</p>
              <p className="font-semibold mb-4">Turma: {membro.turma}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#70C1B3] text-white px-4 py-2 rounded font-semibold hover:bg-[#5aab9d] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F28F3B] transition-all"
                >
                  GitHub
                </a>
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F28F3B] text-white px-4 py-2 rounded font-semibold hover:bg-[#d47a2f] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#70C1B3] transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Integrantes
