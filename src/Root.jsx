import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

const Root = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div> 
    );
};

export default Root;