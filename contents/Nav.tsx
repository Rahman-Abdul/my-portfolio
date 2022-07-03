type Props = {}

const Navbar = (props: Props) => {
  return (
     <nav className="nav-bar" > 
	 	<div className="nav-bar-main">
 		<ul className="nav-bar-contents"> 
	  	<li className="nav-content">About</li>  
   		<li className="nav-content">Contact</li>  
    	<li className="nav-content">Home</li>  
    	<li className="nav-content">Skills</li>
		<li className="nav-content">Works</li> 
  </ul>
  </div>  
</nav>
  )
}

export default Navbar;