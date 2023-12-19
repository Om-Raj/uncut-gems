import iconArrowDown from "./assets/images/icon-arrow-down.svg"
// import iconArrowUp from "./assets/images/icon-arrow-up.svg"
import snapLogo from "./assets/images/logo.svg"
import planningIcon from "./assets/images/icon-planning.svg"
import remindersIcon from "./assets/images/icon-reminders.svg"
import calendarIcon from "./assets/images/icon-calendar.svg"
import todoIcon from "./assets/images/icon-todo.svg"
import closeMenu from "./assets/images/icon-close-menu.svg"
import openMenu from "./assets/images/icon-menu.svg"

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
                    <img src={snapLogo} alt="Snap logo" />
                </a>
                <div id="collapsible">
                    <div className="navigation">
                        <div className="dropdown">
                            <a className="dropdown-label" href="#">
                                Features
                                <img src={iconArrowDown} alt="Arrow down icon" />
                            </a>
                            <div className="dropdown-content">
                                <a href="#">
                                    <img src={todoIcon} alt="To do icon" />
                                    Todo List
                                </a>
                                <a href="#">
                                    <img src={calendarIcon} alt="Calendar icon" />
                                    Calendar
                                </a>
                                <a href="#">
                                    <img src={remindersIcon} alt="Reminders icon" />
                                    Reminders
                                </a>
                                <a href="#">
                                    <img src={planningIcon} alt="Planning icon" />
                                    Planning
                                </a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <a className="dropdown-label" href="#">
                                Company
                                <img src={iconArrowDown} alt="Arrow down icon" />
                            </a>
                            <div className="dropdown-content">
                                <a href="#">History</a>
                                <a href="#">Our Team</a>
                                <a href="#">Blog</a>
                            </div>
                        </div>
                        <a href="#">Careers</a>
                        <a href="#">About</a>
                    </div>
                    <div className="navbar-btns">
                        <button className="text-btn">Login</button>
                        <button className="outline-btn">Register</button>
                    </div>
                </div>
                <img id="toggle-menu-btn" src={openMenu} onClick={toggleMenu} alt="Menu toggle button" />
            </nav> 
            <div id="overlay" onClick={toggleMenu}></div>
       </>
    );
}
 
export default Navbar;