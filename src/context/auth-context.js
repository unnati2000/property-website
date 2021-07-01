import React, { useContext, createContext, useState, useEffect } from "react";
import { auth, firestore } from "../firebase/firebase.utils";
import { getUserDetailsByID } from "../services/firebase.services";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      getUserDetailsByID(user?.uid)
        .then((res) => {
          setCurrentUser(res);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
