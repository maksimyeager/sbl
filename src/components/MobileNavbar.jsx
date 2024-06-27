import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
    return (
        <>
            <div className="mobile-nav-overlay"></div>
            <div id="mobile-nav" className="mobile-nav">
                <ul className="mobile-nav__list">
                    <li className="mobile-nav__item">
                        <NavLink to="/about-us" className="mobile-nav__link">О нас</NavLink>
                    </li>
                    <li className="mobile-nav__item">
                        <NavLink to="/our-projects" className="mobile-nav__link">Наши проекты</NavLink>
                    </li>
                    <li className="mobile-nav__item">
                        <NavLink to="/contacts" className="mobile-nav__link">Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileNavbar;
