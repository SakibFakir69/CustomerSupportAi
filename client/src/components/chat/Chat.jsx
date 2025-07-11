import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import UseMessage from "../../hooks/UseMessage";
import Markdown from "react-markdown";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import UseAuth from "../../hooks/UseAuth";
import { Navigate, useNavigate } from "react-router-dom";
function Chat() {
  const { user, setloading,signOutHandel,signIniWithEmailAndPassword ,signInWithGoole } = UseAuth();
  const [messagelist, setmessagelist] = useState([]);
  const router = useNavigate();




  if(!user?.email)
  {
    console.log("out");
    router('/authentication/signup')

  }
  

  const inutRef = useRef();
  const [typeing, settypeing] = useState(null);
  const { refetch, isLoading, messageData } = UseMessage();
  console.log(messageData);


  useEffect(() => {

    setmessagelist(messageData );
    
  }, [messageData]);

  console.log(messageData);
  const axiosSecure = useAxiosPublic();

  const mutation = useMutation(
    
    async (promt) => {
      const response = await axiosSecure.post(
        "/post",
        { promt , email:user?.email }
        // send email
      );
      return response.data;
    },
    {
      onMutate: () => {
        settypeing(true);
      },
      onSuccess: (data) => {
        settypeing(false);
        const ai = data.reply;
        console.log(data);
        console.log(ai);
        setmessagelist((prev) => [...prev, { sender: "Ai", message: ai }]);

        inutRef.current.value = "";
     
      },
      onError: (error) => {
        settypeing(false); // Hide typing indicator on error
        console.error("Error during POST request:", error);
      },
    }
  );
  const handelSubmit = (e) => {
    e.preventDefault();
    const promt = inutRef.current?.value;

    if (!promt  || !user?.email) {
      return;
    }

    // Add user message instantly
    setmessagelist((prev) => [...prev, { sender: "User", message: promt }]);

    mutation.mutate(promt);
  };

  if (isLoading) {
    return <div className="lg:text-6xl font-semibold text-white text-center py-32 md:text-2xl bg-transparent h-screen">Loading initial messages...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center flex-col p-8" >
     


      <section className=" overflow-scroll   h-[75vh] overflow-x-hidden  mt-10 ">
        
        {messagelist.map((data, key) => (
          <div key={key} className="mb-4">
            {data.sender === "Ai" ? (
              <div className="text-left">
                 <div className=" bg-stone-950 text-white opacity-95  p-2 rounded-md inline-block text-sm">
                  <Markdown>{String(data.message)}</Markdown>
                </div>
              </div>
            ) : (
              <div className="text-right">
                <div className="bg-teal-500/30 opacity-95 text-sm font-semibold text-white p-2 rounded-md inline-block">
                  {data.message}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* send question */}

      <section className="w-full  flex  justify-center ">
        <form onSubmit={handelSubmit} className="flex gap-4 w-4/5 mt-4">
          <input
            type="text"
            className="border w-10/11 py-3 border-teal-400/30 rounded-2xl p-2"
            placeholder="Enter your question"
            ref={inutRef}
          />
          <button type="submit" className=" px-10 y-3 bg-violet-600/50 rounded-2xl font-semibold cursor-pointer">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default Chat;
