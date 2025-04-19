import React, { useRef, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
function Chat() {

  const [ msg , setmsg ] = useState([]);
  const inutRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    const promt = inutRef.current?.value;
    console.log(promt);

    axios
      .post("https://chat-mocha-alpha.vercel.app/post", { promt })
      .then((res) => {

        console.log(res.data?.reply);
        const ai = res.data?.reply

        setmsg((prev)=>[...prev,ai]);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(msg);

  return (
    <div className="min-h-screen">
      <div className="py-20">

      </div>
      <h2 className="text-center font-semibold">
        Welcome to customer support{" "}
      </h2>

      <section>
        <form onSubmit={handelSubmit}>
          <input type="text" className="border " ref={inutRef} />
          <button type="submit" className="bg-red-300 px-10 y-3">
            Submit
          </button>
        </form>
      </section>

      <section className="h-72 overflow-scroll border">
        {
          msg.map((text,key)=>(
          
            <div className="flex justify-between p-4 " key={key}>

             
             <div  className="flex flex-col">
             <ReactMarkdown>{text}</ReactMarkdown>
             </div>
            

                <p className="bg-green-400 p-2 rounded mt-10">{inutRef.current?.value}</p>

            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Chat;
