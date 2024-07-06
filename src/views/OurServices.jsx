import { useTranslation } from "react-i18next";

import servicesImage from "./../assets/services.jpg";

import Breadcrumb from "../components/Breadcrumb";

const OurSevices = () => {
    const { t } = useTranslation("global");

    return (
        <div className="container">
            <Breadcrumb />
            <h1 className="title-1">{t("our-services.title")}</h1>
            <div className="services">
                <div className="services__image">
                    <img src={servicesImage} alt="" />
                </div>
                <div className="services__list">
                    <h2 className="title-2">{t("our-services.services-title")}</h2>
                    <ul>
                        <li>{t("our-services.service-1")}</li>
                        <li>{t("our-services.service-2")}</li>
                        <li>{t("our-services.service-3")}</li>
                        <li>{t("our-services.service-4")}</li>
                        <li>{t("our-services.service-5")}</li>
                        <li>{t("our-services.service-6")}</li>
                        <li>{t("our-services.service-7")}</li>
                        <li>{t("our-services.service-8")}</li>
                        <li>{t("our-services.service-9")}</li>
                        <li>{t("our-services.service-10")}</li>
                        <li>{t("our-services.service-11")}</li>
                        <li>{t("our-services.service-12")}</li>
                        <li>{t("our-services.service-13")}</li>
                        <li>{t("our-services.service-14")}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OurSevices;
