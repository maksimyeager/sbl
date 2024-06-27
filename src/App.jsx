import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import Layout from "./layout/Layout";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import Contacts from "./views/Contacts";
import OurProjects from "./views/OurProjects";

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about-us"} element={<AboutUs />} />
                    <Route path={"/our-projects"} element={<OurProjects/>}/>
                    <Route path={"/contacts"} element={<Contacts />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
