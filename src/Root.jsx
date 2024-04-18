import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";


const Root = () => {
    return (
        <div>
        <div className="max-w-4xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
         
        </div> 
    );
};

export default Root;