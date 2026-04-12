import { Link } from "react-router-dom"
import { useEffect } from "react"
import Card from "../../components/Card/Card"

const Home = () => {
  useEffect(() => {
    document.title = "Home - Turma do Bem"
  }, [])

  const programas = [
    {
      id: 1,
      nome: "Programa Dentista do Bem",
      descricao: "O Dentista do Bem é o principal programa da TdB, destinado a crianças e adolescentes em situação de vulnerabilidade social na faixa dos 11 a 17 anos. Os nossos beneficiários possuem graves problemas bucais e não têm condições financeiras de pagar pelo tratamento."
    },
    {
      id: 2,
      nome: "Programa Apolônias do Bem",
      descricao: "O Apolônias do Bem é um programa que oferece tratamento odontológico integral e gratuito a mulheres que viveram em situação de violência e tiveram seus dentes afetados durante as agressões."
    }
  ]

  const participar = [
    { titulo: "Quero Ser Beneficiário", descricao: "Para jovens de 11 a 17 anos com problemas bucais graves.", link: "/login/beneficiario" },
    { titulo: "Quero Ser Dentista", descricao: "Doe seu talento e transforme um sorriso no seu consultório.", link: "/login/dentista" },
    { titulo: "Quero Ser Voluntário", descricao: "Ajude na organização, triagens e eventos da TDB.", link: "/login/voluntario" },
    { titulo: "Quero Ser Doador", descricao: "Sua contribuição financeira mantém o projeto funcionando.", link: "/doar" }
  ]

  return (
    <>
      <main className="flex-1 container mx-auto p-6">
        {/* Seção Programas */}
        <section className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#70C1B3] mb-10">
            Nossos Programas
          </h1>

          <div className="flex flex-col gap-14">
            {programas.map((programa) => (
              <div key={programa.id} className="bg-[#70C1B3] p-5 rounded-2xl text-left text-white shadow-md">
                <h2 className="bg-[#F28F3B] text-white font-bold text-xl md:text-2xl inline-block px-5 py-3 rounded-2xl -mt-10 ml-4">
                  {programa.nome}
                </h2>
                <p className="text-base md:text-lg leading-relaxed p-3 mt-2">
                  {programa.descricao}
                </p>
                <Link
                  to={`/programa/${programa.id}`}
                  className="bg-[#F28F3B] text-white text-center px-4 py-2 rounded mt-2 ml-3 inline-block hover:bg-[#d47a2f] transition font-semibold"
                >
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Participar */}
        <section className="text-center mt-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#4A3728] mb-8">
            Quero Participar!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {participar.map((item) => (
              <Link key={item.titulo} to={item.link}>
                <Card className="text-center min-h-[180px] border-[#F28F3B] cursor-pointer hover:scale-105 transition-transform">
                  <h2 className="text-lg font-bold text-[#F28F3B] mb-2">
                    {item.titulo}
                  </h2>
                  <p className="text-sm text-[#4A3728]">
                    {item.descricao}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
