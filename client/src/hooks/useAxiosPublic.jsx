

import axios from 'axios'
import React from 'react'

const axiosPublic = axios.create({
    baseURL:'https://chat-mocha-alpha.vercel.app'
})

function useAxiosPublic() {
  return axiosPublic
}

export default useAxiosPublic