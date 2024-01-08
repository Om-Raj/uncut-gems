import logo from "./assets/logo.svg"
import closeMenu from "./assets/icon-close-menu.svg"
import openMenu from "./assets/icon-menu.svg"
import bagIcon from "./assets/bag.svg"
import accountIcon from "./assets/account.png"
import "./Navbar.css"

const Navbar = () => {
    const toggleMenu = () => {
        const btn = document.querySelector("#toggle-menu-btn");
        const collapsible = document.querySelector("#collapsible");
        const overlay = document.querySelector("#overlay");
        console.log(btn);
        console.log(collapsible.style.display);
        if (collapsible.style.display === "flex") {
            collapsible.style.display = "none";
            btn.src = openMenu;
            overlay.style.display = "none";
        }
        else {
            collapsible.style.display = "flex";
            btn.src = closeMenu;
            overlay.style.display = "block";
        }
    }
    return (  
        <>
            <nav className="navbar">
                <a href="#" id="navbar-brand">
                    <img src={logo} alt="Snap logo" />
                </a>
                <div id="collapsible">
                    <div className="navigation">
                        <a href="#">New & Featured</a>
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                    </div>
                    <div className="navbar-btns">
                        <a href="#"><img src={accountIcon} alt="Profile icon" /></a>
                        <a href="#"><img src={bagIcon} alt="Bag icon" /></a>
                    </div>
                </div>
                <img id="toggle-menu-btn" src={openMenu} onClick={toggleMenu} alt="Menu toggle button" />
            </nav> 
            <div id="overlay" onClick={toggleMenu}></div>
       </>
    );
}
 
export default Navbar;