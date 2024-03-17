import { Link } from "react-router-dom"
import '../styles/NavBar.css'

function NavBar() {
  return (
    <nav>
        <ul>
            <li><div>LOGO</div></li>
            <div id="navLinks">
              <li>Home</li>
              <li>About</li>
              <li>Create</li>
              <li>Contact</li>
            </div>
            <li><div>Light/Dark</div></li>
        </ul>

    </nav>
  )
}

export default NavBar