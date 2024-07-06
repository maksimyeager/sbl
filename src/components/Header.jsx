import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SBL_Full_Logo from "./../assets/sbl-full.jpg";
import Navbar from "./Navbar";

import openNavSvg from "./../assets/icons/mobile-nav.svg";
import closeNavSvg from "./../assets/icons/close.svg";
import LanguageSelector from "./LanguageSeceltor";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
        const mobileNavOpenBtn = document.querySelector("#mobile-nav-open");
        const mobileNavCloseBtn = document.querySelector("#mobile-nav-close");
        const mobileNav = document.querySelector(".mobile-nav");

        const links = document.querySelectorAll("a");
        links.forEach((link) => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("mobile-nav--open");
                mobileNavOverlay.classList.remove("mobile-nav-overlay--open");
                mobileNavCloseBtn.classList.add("none");
                mobileNavOpenBtn.classList.remove("none");
                document.body.classList.remove("no-scroll");
            });
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", () => {
                    mobileNav.classList.remove("mobile-nav--open");
                    mobileNavOverlay.classList.remove(
                        "mobile-nav-overlay--open"
                    );
                    mobileNavCloseBtn.classList.add("none");
                    mobileNavOpenBtn.classList.remove("none");
                    document.body.classList.remove("no-scroll");
                });
            });
        };
    }, []);

    const handleOpenMobileNavBtn = () => {
        const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
        const mobileNavOpenBtn = document.querySelector("#mobile-nav-open");
        const mobileNavCloseBtn = document.querySelector("#mobile-nav-close");
        const mobileNav = document.querySelector(".mobile-nav");
        mobileNav.classList.add("mobile-nav--open");
        mobileNavOverlay.classList.add("mobile-nav-overlay--open");
        mobileNavOpenBtn.classList.add("none");
        mobileNavCloseBtn.classList.remove("none");
        document.body.classList.add("no-scroll");
    };

    const handleCloseMobileNavBtn = () => {
        const mobileNav = document.querySelector(".mobile-nav");
        const mobileNavOverlay = document.querySelector(".mobile-nav-overlay");
        const mobileNavOpenBtn = document.querySelector("#mobile-nav-open");
        const mobileNavCloseBtn = document.querySelector("#mobile-nav-close");
        mobileNav.classList.remove("mobile-nav--open");
        mobileNavOverlay.classList.remove("mobile-nav-overlay--open");
        mobileNavCloseBtn.classList.add("none");
        mobileNavOpenBtn.classList.remove("none");
        document.body.classList.remove("no-scroll");
    };

    return (
        <>
            <header
                className={`header ${isScrolled ? "header--scrolled" : ""}`}
            >
                <div className="container">
                    <div className="header-container">
                        <div className="logo">
                            <Link to={"/"}></Link>
                            <div className="logo__img">
                                <img src={SBL_Full_Logo} alt="SBL_LOGO" />
                            </div>
                        </div>
                        <div className="header__nav">
                            <Navbar />
                        </div>
                        <div className="header__actions">
                            <LanguageSelector />
                            <button
                                className="header__btn"
                                id="mobile-nav-open"
                                onClick={handleOpenMobileNavBtn}
                            >
                                <img src={openNavSvg} alt="" />
                            </button>
                            <button
                                className="header__btn none"
                                id="mobile-nav-close"
                                onClick={handleCloseMobileNavBtn}
                            >
                                <img src={closeNavSvg} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
