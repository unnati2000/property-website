import React, { useContext, createContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase.utils";
import { getUserDetailsByID } from "../services/firebase.services";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      getUserDetailsByID(user?.uid)
        .then((res) => {
          console.log(res);
          setCurrentUser(res);
        })
        .catch((err) => console.log(err));
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
