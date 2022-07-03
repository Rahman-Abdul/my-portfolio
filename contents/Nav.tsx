import Link from 'next/link';
import { useRouter } from 'next/router';


type Props = {}

const Navbar = (props: Props) => {
	const router = useRouter();
  return (
     <nav className="nav-bar" > 
	 	<div className="nav-bar-main">
 		<ul className="nav-bar-contents"> 
	  	<li className="nav-content"><Link href="/about"><a className={router.pathname == "/about" ? "active" : ""}>
           About Me
        </a></Link></li>  
   		<li className="nav-content"> <Link href="/contact"><a className={router.pathname == "/contact" ? "active" : ""}>
           Contact
        </a></Link></li>  
    	<li className="nav-content"><Link href="/"><a className={router.pathname == "/" ? "active" : ""}>
           Home
        </a></Link></li>  
    	<li className="nav-content"><Link href="/skills"><a className={router.pathname == "/skills" ? "active" : ""}>
           Skills
        </a></Link></li>
		<li className="nav-content"><Link href="/works"><a className={router.pathname == "/works" ? "active" : ""}>
           Works
        </a></Link></li> 
  </ul>
  </div>  
</nav>
  )
}

export default Navbar;