

import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic'

function UseMessage() {


    const axiosPublic = useAxiosPublic();

    const {refetch,isLoading,data:messageData=[]} = useQuery({
        queryKey:['chat'],
        queryFn:  async()=>{
            const res =await axiosPublic.get('/message');
            return res.data; 

        }
    })




  return {refetch,isLoading,messageData};
}

export default UseMessage