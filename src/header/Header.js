import React, {useEffect, useState} from 'react';
import "./Header.css"

function Header() {

    const [dark, setDark] = useState(false)
    const [activeLink, setActiveLink] = useState("home")
    const [bottomNav, setBottomNav] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
                setDark(true);
            } else {
                setDark(false)
            }
        })
    }, []);



    console.log("dark ", dark)

    const updateLink = (link) => {
        setActiveLink(link)

    }

    return (
        <div className={`header ${dark && "header__dark"}`}>
            <nav className={`header__nav`}>
                <ul className="header__nav-list">
                    <li className={activeLink === "home" ? "header__nav-item active " : "header__nav-item"}
                        onClick={() => updateLink("home")}>
                        <a href="#home">Home</a>
                    </li>
                    <li className={activeLink === "about" ? "header__nav-item active " : "header__nav-item"}
                        onClick={() => updateLink("about")}>
                        <a href="#about">About</a>
                    </li>
                    <li className={activeLink === "portfolio" ? "header__nav-item active " : "header__nav-item"}
                        onClick={() => updateLink("portfolio")}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className={activeLink === "contact" ? "header__nav-item active " : "header__nav-item"}
                        onClick={() => updateLink("contact")}>
                               <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;


