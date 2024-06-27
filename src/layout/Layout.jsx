import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Header />
            <MobileNavbar/>
            <main className="main">
                <Banner />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
