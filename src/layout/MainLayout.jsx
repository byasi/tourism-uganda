import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout () {
  return (
    <>
     <div className="preloader-activate preloader-active open_tm_preloader">
        <div className="preloader-area-wrap">
            <div className="spinner d-flex justify-content-center align-items-center h-100">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    </div>

    <Header />
    <div id="main-wrapper">
    <Outlet />
    <Footer />
    </div>
   {/* scroll up button
   <a href="#/" Name="scroll-top" id="scroll-top">
        <i className="arrow-top fal fa-long-arrow-up"></i>
        <i className="arrow-bottom fal fa-long-arrow-up"></i>
    </a> */}
    </>
  );
};

export default MainLayout;


