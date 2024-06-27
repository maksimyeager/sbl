import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <ul className="nav-menu">
                    {/* <li className="nav-menu__item">
                        <NavLink to="/" className="nav-menu__link link-1">
                            Домой
                        </NavLink>
                    </li> */}
                    <li className="nav-menu__item">
                        <NavLink to="/about-us" className="nav-menu__link link-1">
                            О нас
                        </NavLink>
                    </li>
                    {/* <li className="nav-menu__item">
                        <NavLink 
                            to="/our-services" 
                            className="nav-menu__link link-1"
                        >
                            Our Services
                        </NavLink>
                    </li> */}
                    <li className="nav-menu__item">
                        <NavLink to="/our-projects" className="nav-menu__link link-1">
                            Наши проекты
                        </NavLink>
                    </li>
                    {/* <li className="nav-menu__item">
                        <NavLink 
                            to="/our-clients" 
                            className="nav-menu__link link-1"
                        >
                            Our Clients
                        </NavLink>
                    </li> */}
                    {/* <li className="nav-menu__item">
                        <NavLink 
                            to="/why-us" 
                            className="nav-menu__link link-1"
                        >
                            Why Us
                        </NavLink>
                    </li> */}
                    <li className="nav-menu__item">
                        <NavLink to="/contacts" className="nav-menu__link link-1">
                            Контакты
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
