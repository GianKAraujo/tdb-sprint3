import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Integrantes from './pages/Integrantes/Integrantes'
import FAQ from './pages/FAQ/FAQ'
import Contato from './pages/Contato/Contato'
import Solucao from './pages/Solucao/Solucao'
import ProgramaDetalhe from './pages/ProgramaDetalhe/ProgramaDetalhe'
import NotFound from './pages/NotFound/NotFound'
import SolucaoTecnica from './pages/SolucaoTecnica/SolucaoTecnica'
import Login from './pages/Login/Login'
import Doar from './pages/Doar/Doar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path="/solucao-tecnica" element={<SolucaoTecnica />} />
            <Route path="/programa/:id" element={<ProgramaDetalhe />} />
            <Route path="/login/:tipo" element={<Login />} />
            <Route path="/doar" element={<Doar />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
