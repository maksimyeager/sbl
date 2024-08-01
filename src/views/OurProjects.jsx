import { useTranslation } from "react-i18next";

import Breadcrumb from "../components/Breadcrumb";
import project1 from "./../assets/projects/project-1.jpg";
import project2 from "./../assets/projects/project-2.jpg";

const projects = [
    {
        key: 1,
        imgSrc: project1,
    },
    {
        key: 2,
        imgSrc: project2,
    },
];

const OurProjects = () => {
    const { t } = useTranslation("global");

    return (
        <div className="container">
            <Breadcrumb />
            <h1 className="title-1">{t("our-projects.title")}</h1>
            <div className="projects">
                <ul className="project-list">
                    {projects.map((project) => (
                        <li key={project.key}>
                            <img src={project.imgSrc} alt={`Project ${project.key}`} />
                            <h2 className="project-title">{t(`projects.title${project.key}`)}</h2>
                            <p>{t("our-projects.customer")}{t(`projects.customer${project.key}`)}</p>
                            <p>{t("our-projects.year")}{t(`projects.year${project.key}`)}</p>
                            <p>{t("our-projects.work-undertaken")}{t(`projects.workUndertaken${project.key}`)}</p>
                            <p>{t("our-projects.location")}{t(`projects.location${project.key}`)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurProjects;
