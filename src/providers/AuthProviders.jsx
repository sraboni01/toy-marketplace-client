import React, { children, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signInn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  //AUTH STATE CHANGE
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      //console.log("auth state changed", currenUser);
      setUser(currenUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInn,
    googleLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
