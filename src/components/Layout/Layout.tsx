import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#FFFDD0] text-[#4A3728]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout
