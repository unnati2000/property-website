import React, {useContext, createContext, useState, useEffect} from "react";
import {auth, firestore} from "../firebase/firebase.utils";

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
       const unSubscribe = auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            setLoading(false)
        })

        return unSubscribe;
    },[])

    const value = {
        currentUser,    
    }

    return (<AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>)
}
