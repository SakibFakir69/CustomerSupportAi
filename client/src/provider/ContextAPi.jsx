


import React, { Children, useState } from 'react'
import { createContext } from 'react'
import { Auth } from '../firebase/config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

export const ContextApi = createContext();

function ContextAPi({children}) {

    const [ loading , setloading ]= useState(false);

    const provider = new GoogleAuthProvider();

    const signUp = (email , password) =>{
        return createUserWithEmailAndPassword(Auth, email,password);

    }
    const signUpWithGoogle = ()=>{
        
        return signInWithPopup(Auth,provider);


    }

    



    const auth = {
        loading,signUp ,signUpWithGoogle ,setloading
    }


  return (
    <div>
        <ContextApi.Provider value={auth}>
            {children}
        </ContextApi.Provider>


    </div>
  )
}

export default ContextAPi