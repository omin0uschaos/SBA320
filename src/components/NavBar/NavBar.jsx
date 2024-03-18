import { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";

function NavBar() {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <nav>
            <ul>
                <li id="logoLi"><NavLogo /></li>
                
                <div id="navLinks" className={showNav ? "show" : ""} onClick={() => setShowNav(false)}>
                  
                  <Link to='/'><li>Home</li></Link>
                  <Link to='/about'><li>About</li></Link>
                  <Link to='/create'><li>Create</li></Link>
                  <Link to='/Contact'><li>Contact</li></Link>
                </div>
                <div className="menuIcon" onClick={toggleNav}>
                  <Hamburger isActive={showNav} setIsActive={setShowNav} />
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;
