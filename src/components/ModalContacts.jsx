import { useTranslation } from "react-i18next";
import { FaTimes, FaPhoneAlt, FaFax, FaWhatsapp } from "react-icons/fa";

const ModalContacts = () => {
    const { t } = useTranslation("global");

    const closeModal = () => {
        const modal = document.querySelector(".modal")
        const modalOverlay = document.querySelector(".modal-overlay");
        modal.classList.remove("modal--open")
        modalOverlay.classList.remove("modal-overlay--open")
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={closeModal}>
                    <FaTimes size={"18px"} color={"#fff"} />
                </button>
                <div className="modal__title">
                    <h2>Позвонить</h2>
                </div>
                <h2 className="title-2">SBL Offshore Services Ltd</h2>
                <div className="contact">
                    <p>{t("contacts.address")}</p>
                    <p>{t("contacts.operating-mode")}</p>
                    <p>{t("contacts.mon-fri")} 8:00 - 17:00</p>{" "}
                    <p>{t("contacts.sat")}8:00 - 12:00</p>
                </div>
                <div className="numbers">
                    <div
                        className="number"
                        title={t("contacts.call-link-title")}
                    >
                        <a href="tel:+77292544326">
                            <FaPhoneAlt size={"20px"} />
                        </a>
                        <a href="tel:+77292544326">+7 (7292) 544 326</a>
                    </div>
                    <div
                        className="number"
                        title={t("contacts.call-link-title")}
                    >
                        <a href="tel:+77292544327">
                            <FaFax size={"20px"} />
                        </a>
                        <a href="tel:+77292544326">+7 (7292) 544 327</a>
                    </div>
                    <div className="number">
                        <a
                            href="tel:+77017656304"
                            title={t("contacts.call-link-title")}
                        >
                            <FaPhoneAlt size={"20px"} />
                        </a>
                        <a
                            href="https://wa.me/+77056554748"
                            title="WhatsApp"
                            target="_blank"
                        >
                            <FaWhatsapp size={"20px"} />
                        </a>
                        <a href="tel:+77056554748">+7 (705) 655 47 48</a>
                    </div>
                    <div className="number">
                        <a
                            href="tel:+77773952834"
                            title={t("contacts.call-link-title")}
                        >
                            <FaPhoneAlt size={"20px"} />
                        </a>
                        <a
                            href="https://wa.me/+77773952834"
                            title="WhatsApp"
                            target="_blank"
                        >
                            <FaWhatsapp size={"20px"} />
                        </a>
                        <a href="tel:+77773952834">+7 (777) 395 28 34</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalContacts;
