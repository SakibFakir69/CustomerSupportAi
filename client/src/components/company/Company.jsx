import React from "react";

import img from "./../../../public/OIP.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
function Company() {
  return (
    <div className="py-20 min-h-screen">
      <section>
        <div className="flex md:flex-row flex-col p-8  md:justify-between  justify-center gap-10 ">
          <div className="flex justify-center items-center">
            <h2 className="text-5xl font-semibold">
              This Ai chatbot make for Bkash
            </h2>
          </div>
          <div className="flex justify-center items-center ">
            <img src={img} className="rounded" />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-col items-center mt-10 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Why Use This Type of Service?
            </h2>
            <p className="mb-2">
              🔹 Minimize Human Effort - AI reduces the need for human workers,
              improving efficiency.
            </p>
            <p className="mb-2">
              🔹 24/7 Support - Get help anytime, without waiting for office
              hours.
            </p>
            <p className="mb-2">
              🔹 Handle Multiple Customers at Once - AI can assist many users
              simultaneously, no wait time.
            </p>
          </div>
        </div>
      </section>


      <section className="mdpy-28 flex flex-col mt-36">
  <div className="flex flex-col mt-52">

    <p className="text-2xl font-semibold text-center  justify-center inline">
      This project developed by 

      <span className="text-green-400 ml-5">Sakib Fakir</span>
    </p>
    <div className="flex justify-center mt-4 gap-2 items-center">
      <p>Connect with me:</p>
      <a href="https://www.linkedin.com/in/sakib-fakir-183923295/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl" />
      </a>
      <a href="https://github.com/SakibFakir69" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-xl" />
      </a>
    </div>
  </div>
</section>

    </div>
  );
}

export default Company;
