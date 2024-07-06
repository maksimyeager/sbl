import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { t } = useTranslation("global");

    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li className="nav-menu__item">
                    <NavLink to="/about-us" className="nav-menu__link link-1">
                        {t("navbar.about-us")}
                    </NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink
                        to="/our-services"
                        className="nav-menu__link link-1"
                    >
                        {t("navbar.our-services")}
                    </NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink
                        to="/our-projects"
                        className="nav-menu__link link-1"
                    >
                        {t("navbar.our-projects")}
                    </NavLink>
                </li>
                <li className="nav-menu__item">
                    <NavLink to="/contacts" className="nav-menu__link link-1">
                        {t("navbar.contacts")}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
