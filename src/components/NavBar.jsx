import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/NavBar.css'
import Hamburger from "./Hamburger"

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  return (
    <nav>
        <ul>
            <li><div>LOGO</div></li>
            
            <div id="navLinks" className={showNav ? "show" : ""} onClick={() => setShowNav(false)}>
              
              <li>Home</li>
              <li>About</li>
              <li>Create</li>
              <li>Contact</li>
            </div>
            <div className="menuIcon" onClick={toggleNav}>
              <Hamburger />
            </div>
        </ul>

    </nav>
  )
}

export default NavBar