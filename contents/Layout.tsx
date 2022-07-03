import Footer from "./Footer"
import Navbar from "./Nav"



const Layout = ({children}: any) => {
  return (
    <section  className="layout">
    <Navbar/>
    {children} 
    <Footer/>
    </section>
  )
}

export default Layout