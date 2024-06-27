import { Link } from "react-router-dom";
import { FaFax, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__logo">
                        
                    </div>
                    <div className="footer__nav">
                        <nav>
                            <ul className="footer__nav-list">
                                <li>
                                    <Link to={"/"}></Link>
                                </li>
                                <li>
                                    <Link to={"/"}>О нас</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Наши проекты</Link>
                                </li>
                                <li>
                                    <Link to={"/"}>Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer__contacts">
                        <ul className="footer__nav-list">
                            <li>
                                Адресс: Мангистауская Область, Город Актау,
                                Промзона, База Рекон, склаж №24/4
                            </li>
                            <li>
                                Телефон:{" "}
                                <a href="tel:+77292544326">+7(7292) 544 326</a>
                            </li>
                            <li>Время работы: 8:00 - 17:00</li>
                            <li>
                                E-mail:{" "}
                                <a href="mailto:dima@sbl.com.sg">
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
                                <a href="https://wa.me/+77056554748">
                                    <FaWhatsapp size={"24px"} />
                                </a>
                            </li>
                            <li>
                                <a href="hhtps://instagram.com">
                                    <FaInstagram size={"24px"} />
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
