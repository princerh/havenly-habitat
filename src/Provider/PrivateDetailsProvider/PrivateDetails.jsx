/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";

const PrivateDetails = ({children}) => {
    const {user, loading}  = useContext(AuthContext)
    const location = useLocation(); 
    
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span> 
    }
    console.log(location)   

    if(user){
        return children; 
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateDetails;