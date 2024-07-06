import { useTranslation } from "react-i18next";

import Breadcrumb from "../components/Breadcrumb";

const AboutUs = () => {
    const { t } = useTranslation("global");

    return (
        <div className="container">
            <Breadcrumb />
            <h1 className="title-1">{t("about-us.title")}</h1>
            <div className="document">
                <p>
                    <strong>SBL Offshore Services Ltd</strong>{" "}
                    {t("about-us.p-1")}
                </p>
                <p>{t("about-us.p-2")}</p>
                <p>{t("about-us.p-3")}</p>
                <p>{t("about-us.p-4")}</p>
                <p>{t("about-us.p-5")}</p>
                <p>{t("about-us.p-6")}</p>
            </div>
        </div>
    );
};

export default AboutUs;
