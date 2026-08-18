import { useState, useEffect } from "react";
import navLinks from "../data/navLinks";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("show-mobile-menu", isMenuOpen);
    }, [isMenuOpen]);
    
    return (
        <header>
            <nav className="navbar section-content">
                <a href="#" className="nav-logo">
                    <img src="/images/galleon_navbar_image_updated.png" alt="navbar business logo" className="logo_image" />
                </a>
                <ul className="nav-menu">
                    <button id="menu-close-button" className="fas fa-times" onClick={()=>setIsMenuOpen(false)}></button>
                    {navLinks.map((navLink) => (
                        <li className="nav-item" key={navLink.id}>
                            <a href={navLink.href} className="nav-link" onClick={()=>setIsMenuOpen(false)}>{navLink.text}</a>
                        </li>
                    ))}
                </ul>

                <button id="menu-open-button" className="fas fa-bars" onClick={()=>setIsMenuOpen(true)}></button>
            </nav>
        </header>
    )
};

export default Navbar;