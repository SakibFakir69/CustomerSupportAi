


import React from 'react'
import { Navigate } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import { Children } from 'react';

function PrivateRoute({children}) {

    const { user, loading,signOutHandel,signIniWithEmailAndPassword ,signInWithGoole } = UseAuth();
    console.log(loading , " loding");

    if(loading)
    {
        return <div className='py-32 flex justify-center'>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
   


   if(user)
   {
    return children
   }

   return <Navigate to={'/authentication/signup'}/>
    

}

export default PrivateRoute



