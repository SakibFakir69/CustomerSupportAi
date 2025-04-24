


import React, { Children, useEffect, useState } from 'react'
import { createContext } from 'react'
import { Auth } from '../firebase/config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const ContextApi = createContext();

function ContextAPi({children}) {



    const [ loading , setloading ]= useState(true);
    const [ user , setuser ] = useState(null);

    const provider = new GoogleAuthProvider();

    const signUp = (email , password) =>{
        return createUserWithEmailAndPassword(Auth, email,password);

    }
    const signUpWithGoogle = ()=>{
        
        return signInWithPopup(Auth,provider);


    }

    // sign out and sign in 
    // 4/23/25

    // sign out 
    const signOutHandel = () =>{

        return signOut(Auth);
    }
    // sign in with email

    const signIniWithEmailAndPassword = (email,password)=>{

        return signInWithEmailAndPassword(Auth,email,password);
    }
    // sign with google 
    const Provider = new GoogleAuthProvider();
    const signInWithGoole = ()=>{

        return signInWithPopup(Auth,Provider);
    }

    



    const auth = {
        loading,signUp ,signUpWithGoogle ,setloading,user,signOutHandel,signIniWithEmailAndPassword ,signInWithGoole,
   
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(Auth,(currentUser)=>{
            setuser(currentUser);
            setloading(true);

        })
        setloading(false);

        return ()=> unsubscribe();
    })


  return (
    <div>
        <ContextApi.Provider value={auth}>
            {children}
        </ContextApi.Provider>


    </div>
  )
}

export default ContextAPi