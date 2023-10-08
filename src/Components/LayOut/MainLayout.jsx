import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";


const MainLayout = () => {
    return (
        <div >
            <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
           
            </div>

          <div className="">
          <Footer></Footer>
          </div>

        </div>
    );
};

export default MainLayout;