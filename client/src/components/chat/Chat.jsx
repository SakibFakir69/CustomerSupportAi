import React, { useRef, useState } from "react";
import axios from "axios";


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
    <div>
      <h2 className="text-center font-semibold mt-10">
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
          
            <div className="flex justify-between p-4" key={key}>
                <p key={key} className="text-black bg-teal-200 p-2 md:max-w-2xl md:w-72 w-60 rounded">{text}</p>
                <p className="bg-green-400 p-2 rounded mt-10">{inutRef.current?.value}</p>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Chat;
