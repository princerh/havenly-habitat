/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { ToastContainer } from "react-toastify";

export const AuthContext = createContext(null) 

const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
console.log(user) 


const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
// create user  
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
} 

const loginGoogle = () => {
 return signInWithPopup(auth, googleProvider)
}

const loginGithub = () => { 
 return signInWithPopup(auth, githubProvider)
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
        logout, 
        loginGoogle,
        loginGithub
    }

    return (
        
            <AuthContext.Provider value={authInfo}> 
                {children}
                <ToastContainer />
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;