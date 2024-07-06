import { Link } from "react-router-dom";

import { FaPhoneAlt, FaFax, FaTasks } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import FeedbackForm from "../components/FeedbackForm";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("global");

    return (
        <>
            <div className="home-welcome">
                <div className="container container--small">
                    <h1 className="home-title">SBL Offshore Services Ltd</h1>
                    <p className="home-subtitle">{t("home.subtitle")}</p>
                    <p className="home-description">{t("home.welcome")}</p>
                </div>
            </div>
            <div className="home-project">
                <div className="container">
                    <h2>{t("home.projects-title")}</h2>
                    <p>
                        <strong>SBL Offshore Services Ltd</strong>{" "}
                        {t("home.projects")}
                    </p>
                    <Link to={"/our-projects"} className="btn-1">
                        {t("home.view-more")}
                    </Link>
                </div>
            </div>
            <div className="home-cards">
                <div className="card card-1">
                    <h2>
                        <FaGear /> {t("card.our-services")}
                    </h2>
                    <ul>
                        <li>{t("card.service-1")}</li>
                        <li>{t("card.service-2")}</li>
                        <li>{t("card.service-3")}</li>
                        <li>{t("card.service-4")}</li>
                        <li>{t("card.service-5")}</li>
                    </ul>
                    <a href="/our-services" className="btn-2">
                        {t("home.view-more")}
                    </a>
                </div>
                <div className="card card-2">
                    <h2>
                        <FaTasks /> {t("card.why-us")}
                    </h2>
                    <p>
                        {t("card.why-text")}
                    </p>
                    <a href="/about-us" className="btn-2">
                        {t("home.view-more")}
                    </a>
                </div>
                <div className="card card-3">
                    <h2>
                        <FaPhoneAlt /> {t("card.contacts")}
                    </h2>
                    <p>
                        {t("card.address")}
                    </p>
                    <ul>
                        <li>
                            <FaPhoneAlt /> +7 (7292) 544 326
                        </li>
                        <li>
                            <FaFax /> +7 (7292) 544 327
                        </li>
                        <li>
                            <MdEmail />{" "}
                            <Link to="mailto:dima@sbl.com.sg">
                                dima@sbl.com.sg
                            </Link>
                        </li>
                    </ul>
                    <a href="/contacts" className="btn-2">
                        {t("home.view-more")}
                    </a>
                </div>
            </div>
            <div className="home-form">
                <FeedbackForm />
            </div>
        </>
    );
};

export default Home;
