import Footer from "@/components/Footer"
import Header from "@/components/Header"

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header/>
      <main className="mb-auto">{children}</main>
      <Footer/>
    </div>
  )
}

export default MainLayout