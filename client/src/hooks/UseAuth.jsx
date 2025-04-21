


import React, { useContext } from 'react'
import { ContextApi } from '../provider/ContextAPi'

function UseAuth() {
    
    const auth = useContext(ContextApi);
    

  return auth;
}

export default UseAuth