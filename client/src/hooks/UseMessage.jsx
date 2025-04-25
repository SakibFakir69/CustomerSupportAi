

import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'
import useAxiosSecure from './useAxiosSecure';
import UseAuth from './UseAuth';
function UseMessage() {

    const { user } = UseAuth();




    const axiosSecure = useAxiosSecure();

    const {refetch,isLoading,data:messageData=[]} = useQuery({
        queryKey:['chat',user?.email],
        enabled: !!user?.email, // Only run when email exists

        queryFn:  async()=>{
            const res =await axios.get(`https://chat-mocha-alpha.vercel.app/message/${user?.email}`);
            return res.data; 

        }

    })




  return {refetch,isLoading,messageData};
}

export default UseMessage