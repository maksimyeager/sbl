import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import FeedbackForm from "../components/FeedbackForm";

library.add(faPhone);

const Home = () => {
    return (
        <>
            <div className="home-project">
                <div className="container">
                    <h3 className="title-1">О нас</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Exercitationem id, sit illo, dolores explicabo
                        esse molestias quas culpa non harum velit aspernatur
                        laborum quo itaque assumenda suscipit? Molestiae, minima
                        impedit. Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Exercitationem id, sit illo, dolores
                        explicabo esse molestias quas culpa non harum velit
                        aspernatur laborum quo itaque assumenda suscipit?
                        Molestiae, minima impedit...
                    </p>
                    <Link to={"/about-us"} className="link-1">
                        Читать больше <span></span>
                    </Link>
                </div>
            </div>
            <div className="home-cards">
                <div className="card card-1">
                    <h2>Card Title</h2>
                </div>
                <div className="card card-2">
                    <h2>Card Title</h2>
                </div>
                <div className="card card-3">
                    <h2><FontAwesomeIcon icon={faPhone} size="sm" color="#222e84"/> Контакты</h2>
                    <p>Адресс:  Мангистауская Область, Город Актау, Промзона, База Рекон, склаж №24/4</p>
                </div>
            </div>
            <div className="home-form">
                <FeedbackForm/>
            </div>
            
        </>
    );
};

export default Home;
