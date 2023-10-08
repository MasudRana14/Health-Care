import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loader, setLoader] = useState(true)

// Create User 
const createUser = (email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}


const userProfile = (name,photo)=>{

    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}


// Create Login 
const login = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email,password)
}
// Create Logout 
const logOut =() => {
    setLoader(true)
    return signOut (auth);
}


useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
        console.log( 'Use is on auth state ', currentUser)
        setUser(currentUser)
        setLoader(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])



    const authInfo = {
        user,
        createUser,
        logOut,
        login,
        loader,
        userProfile
        
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;