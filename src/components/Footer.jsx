import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaPhoneAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";

import logo from "./../assets/logo/logo-white.png";

const Footer = () => {
    const { t } = useTranslation("global");

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__logo">
                        <Link to={"/"}>
                            <img src={logo} alt="SBL Logo" />
                        </Link>
                    </div>
                    <div className="footer__nav">
                        <nav>
                            <ul className="footer__nav-list">
                                <li>
                                    <Link to={"/about-us"}>{t("footer.about-us")}</Link>
                                </li>
                                <li>
                                    <Link to={"/our-services"}>
                                        {t("footer.our-services")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/our-projects"}>
                                        {t("footer.our-projects")}
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contacts"}>
                                        {t("footer.contacts")}
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__contacts">
                        <ul className="footer__nav-list">
                            <li>{t("footer.address")}</li>
                            <li>{t("footer.operating-mode")}8:00 - 17:00</li>
                            <li>
                                E-mail:{" "}
                                <a href="mailto:dima@sbl.com.sg" target="_blank">
                                    dima@sbl.com.sg
                                </a>
                            </li>
                        </ul>
                        <ul className="footer__socials">
                            <li>
                                <a href="tel:+12345678">
                                    <FaPhoneAlt size={"24px"} />
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/+77056554748" target="_blank">
                                    <FaWhatsapp size={"26px"} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sbl_aktau/" target="_blank" >
                                    <FaInstagram size={"26px"} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>Copyright © 2024 SBL Offshore Services Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
