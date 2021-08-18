import React, { useContext, createContext, useState, useEffect } from "react";
import { Box, CircularProgress } from "@material-ui/core";
import { auth } from "../firebase/firebase.utils";
import { getUserDetailsByID } from "../services/firebase.services";
import { useHistory } from "react-router";
import firebase from "firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const Logout = () => {
    firebase.auth().signOut();
  };

  const Login = (phoneNumber, recaptcha) => {
    firebase
      .auth()
      .signInWithPhoneNumber("+91" + phoneNumber, recaptcha)
      .then((e) => {
        let code = prompt("Enter OTP ", "");

        if (code === null) return;
        e.confirm(code).then(function (result) {
          alert("Login successful");
          history.push("/");
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      getUserDetailsByID(user?.uid)
        .then((res) => {
          console.log(res);
          setCurrentUser(res);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    Logout,
    Login,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={5} alignItems="center">
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
