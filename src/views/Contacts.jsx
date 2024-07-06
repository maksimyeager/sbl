import { useTranslation } from "react-i18next";
import { FaFax, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import Breadcrumb from "../components/Breadcrumb";
import Map from "../components/Map";

const Contacts = () => {
    const { t } = useTranslation("global");
    return (
        <div className="container">
            <Breadcrumb />
            <h1 className="title-1">{t("contacts.title")}</h1>
            <div className="contacts">
                <h2 className="title-2">SBL Offshore Services Ltd</h2>
                <div className="contact">
                    <p>{t("contacts.address")}</p>
                    <p>{t("contacts.operating-mode")}</p>
                    <p>{t("contacts.mon-fri")} 8:00 - 17:00</p>{" "}
                    <p>{t("contacts.sat")}8:00 - 12:00</p>
                </div>
                <div className="numbers">
                    <div className="number" title="Позвонить">
                        <a href="tel:+77292544326">
                            <FaPhoneAlt size={"20px"} />
                        </a>
                        <a href="tel:+77292544326">+7 (7292) 544 326</a>
                    </div>
                    <div className="number" title="Позвонить">
                        <a href="tel:+77292544327">
                            <FaFax size={"20px"} />
                        </a>
                        <a href="tel:+77292544326">+7 (7292) 544 327</a>
                    </div>
                    <div className="number">
                        <a href="tel:+77017656304" title="Позвонить">
                            <FaPhoneAlt size={"20px"} />
                        </a>
                        <a href="https://wa.me/+77056554748" title="WhatsApp" target="_blank">
                            <FaWhatsapp size={"20px"} />
                        </a>
                        <a href="tel:+77056554748">+7 (705) 655 47 48</a>
                    </div>
                    <div className="number">
                        <a href="tel:+77773952834" title="Позвонить">
                            <FaPhoneAlt size={"20px"} />
                        </a>
                        <a href="https://wa.me/+77773952834" title="WhatsApp" target="_blank">
                            <FaWhatsapp size={"20px"} />
                        </a>
                        <a href="tel:+77773952834">+7 (777) 395 28 34</a>
                    </div>
                </div>
                <div className="email">
                    <p>
                        E-mail:{" "}
                        <a href="mailto:dima@sbl.com.sg">dima@sbl.com.sg</a>
                    </p>
                </div>
                <div className="address">
                    <p>{t("contacts.location")}</p>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Contacts;
