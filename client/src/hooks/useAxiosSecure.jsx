


// src/hooks/useAxiosSecure.jsx
import { useEffect } from "react";
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://chat-mocha-alpha.vercel.app',
});

const useAxiosSecure = () => {
    
  useEffect(() => {
    const interceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("authToken");
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Cleanup interceptor on unmount
    return () => {
      axiosSecure.interceptors.request.eject(interceptor);
    };
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
