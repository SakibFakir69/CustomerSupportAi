import React, {
  Children,
  useEffect,
  useInsertionEffect,
  useState,
} from "react";
import { createContext } from "react";
import { Auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";


export const ContextApi = createContext();

function ContextAPi({ children }) {
  const [loading, setloading] = useState(true);
  const [user, setuser] = useState(null);


  const axiosSecure = useAxiosSecure();


  const provider = new GoogleAuthProvider();

  let signUp = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signUpWithGoogle = () => {
    setloading(true)
    return signInWithPopup(Auth, provider);
  };

  // sign out and sign in
  // 4/23/25

  // sign out
  const signOutHandel = () => {
    setloading(true)
    return signOut(Auth);
  };
  // sign in with email

  const signIniWithEmailAndPassword = (email, password) => {
    setloading(true)
    return signInWithEmailAndPassword(Auth, email, password);
  };
  // sign with google
  const Provider = new GoogleAuthProvider();
  const signInWithGoole = () => {
    setloading(true)
    return signInWithPopup(Auth, Provider);
  };

  const auth = {
    loading,
    signUp,
    signUpWithGoogle,
    setloading,
    user,
    signOutHandel,
    signIniWithEmailAndPassword,
    signInWithGoole,
  };

  // add degsine add private route
  // context -> private route today 
  // next day degsine 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, async (currentUser) => {
      setuser(currentUser);
     

      setloading(false); // Once the user state is set, loading is done
        
 
 

    });
   

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ContextApi.Provider value={auth}>{children}</ContextApi.Provider>
    </div>
  );
}

export default ContextAPi;
