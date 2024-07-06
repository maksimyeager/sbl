import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Layout from "./layout/Layout";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import Contacts from "./views/Contacts";
import OurProjects from "./views/OurProjects";
import OurSevices from "./views/OurServices";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about-us"} element={<AboutUs />} />
                    <Route path={"/our-services"} element={<OurSevices/>}/>
                    <Route path={"/our-projects"} element={<OurProjects/>}/>
                    <Route path={"/contacts"} element={<Contacts />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
