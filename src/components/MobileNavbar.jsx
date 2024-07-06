import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavbar = () => {

    const {t} = useTranslation("global");

    const handleClick = () => {
        const mobileNav = document.querySelector("#mobile-nav");
        const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
        const mobileNavOpenBtn = document.querySelector("#mobile-nav-open");
        const mobileNavCloseBtn = document.querySelector("#mobile-nav-close");
        mobileNavOverlay.classList.remove("mobile-nav-overlay--open");
        mobileNav.classList.remove("mobile-nav--open");
        mobileNavCloseBtn.classList.add("none");
        mobileNavOpenBtn.classList.remove("none");
        document.body.classList.remove("no-scroll");
    };

    return (
        <>
            <div className="mobile-nav-overlay"></div>
            <div id="mobile-nav" className="mobile-nav">
                <ul className="mobile-nav__list">
                    <li className="mobile-nav__item">
                        <NavLink
                            to="/about-us"
                            className="mobile-nav__link"
                            onClick={handleClick} // Добавляем обработчик клика
                        >
                            {t("mobile-navbar.about-us")}
                        </NavLink>
                    </li>
                    <li className="mobile-nav__item">
                        <NavLink
                            to="/our-services"
                            className="mobile-nav__link"
                            onClick={handleClick} // Добавляем обработчик клика
                        >
                           {t("mobile-navbar.our-services")}
                        </NavLink>
                    </li>
                    <li className="mobile-nav__item">
                        <NavLink
                            to="/our-projects"
                            className="mobile-nav__link"
                            onClick={handleClick} // Добавляем обработчик клика
                        >
                             {t("mobile-navbar.our-projects")}
                        </NavLink>
                    </li>
                    <li className="mobile-nav__item">
                        <NavLink
                            to="/contacts"
                            className="mobile-nav__link"
                            onClick={handleClick} // Добавляем обработчик клика
                        >
                           {t("mobile-navbar.contacts")}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileNavbar;
