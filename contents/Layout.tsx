import Footer from "./Footer"
import Navbar from "./Nav"



const Layout = ({children}: any) => {
  return (
    <main  className="layout">
    <Navbar/>
    {children} 
    <Footer/>
    </main>
  )
}

export default Layout