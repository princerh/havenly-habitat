/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
console.log(user) 
// create user  
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
} 

const logout = () => {
    setUser(null)
    return signOut(auth)
}

useEffect( () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });
    
} ,[])


    const authInfo = {
        user,
        setUser, 
        createUser,
        login, 
        logout 
    }

    return (
        
            <AuthContext.Provider value={authInfo}> 
                {children}
                <ToastContainer />
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;