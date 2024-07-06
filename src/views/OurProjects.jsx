import { useTranslation } from "react-i18next";

import Breadcrumb from "../components/Breadcrumb";

const projects = [
    {
        key: 1,
        title: "Dunga Field Development Maersk Oil",
        customer: "Maersk Oil",
        year: 2012,
        "work-undertaken":
            "Fabrication & Installation of pipe rack and pipe support",
        location: "Kazakhstan, Aktau",
        imgSrc: "/src/assets/4-1.jpg",
    },
    {
        key: 2,
        title: "Dunga Field Development Maersk Oil",
        customer: "Maersk Oil",
        year: 2012,
        "work-undertaken":
            "Fabrication & Installation of pipe rack and pipe support",
        location: "Kazakhstan, Aktau",
        imgSrc: "/src/assets/5-1.jpg",
    },
    {
        key: 3,
        title: "Dunga Field Development Maersk Oil",
        customer: "Maersk Oil",
        year: 2012,
        "work-undertaken":
            "Fabrication & Installation of pipe rack and pipe support",
        location: "Kazakhstan, Aktau",
        imgSrc: "/src/assets/4-1.jpg",
    },
    {
        key: 4,
        title: "Dunga Field Development Maersk Oil",
        customer: "Maersk Oil",
        year: 2012,
        "work-undertaken":
            "Fabrication & Installation of pipe rack and pipe support",
        location: "Kazakhstan, Aktau",
        imgSrc: "/src/assets/5-1.jpg",
    },
    {
        key: 5,
        title: "Dunga Field Development Maersk Oil",
        customer: "Maersk Oil",
        year: 2012,
        "work-undertaken":
            "Fabrication & Installation of pipe rack and pipe support",
        location: "Kazakhstan, Aktau",
        imgSrc: "/src/assets/4-1.jpg",
    },
    {
        key: 6,
        title: "Dunga Field Development Maersk Oil",
        customer: "Maersk Oil",
        year: 2012,
        "work-undertaken":
            "Fabrication & Installation of pipe rack and pipe support",
        location: "Kazakhstan, Aktau",
        imgSrc: "/src/assets/5-1.jpg",
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
                            <img
                                src={project.imgSrc}
                                alt={`Project ${project.key}`}
                            />
                            <h2 className="project-title">{project.title}</h2>
                            <p>{t("our-projects.customer")}{project.customer}</p>
                            <p>{t("our-projects.year")}{project.year}</p>
                            <p>
                            {t("our-projects.work-undertaken")}{project["work-undertaken"]}
                            </p>
                            <p>{t("our-projects.location")}{project.location}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OurProjects;
