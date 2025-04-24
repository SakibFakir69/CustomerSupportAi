import React from "react";

import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className=" w-full relative lg:py-0  py-10">

      {/* <div className="absolute flex justify-end border  right-0">
        <img
          src="Elements.png"
          className="lg:max-h-[550px] lg:mt-10 md:max-h-[300px] sm:max-h-[250px]  md:mt-6"
        />
      </div> */}
        <div className="absolute flex justify-end right-0 top-0">
        <img
          src="Elements.png"
          className="max-w-full lg:max-h-[550px] lg:mt-10 md:max-h-[300px] sm:max-h-[200px] md:mt-16 mt-48"
        />
      </div>

      <section className="p-10 flex justify-center items-center">
        <section className="flex md:flex-row flex-col items-center">
          <div className="flex   justify-start  flex-col gap-4 ">

            <div className="  ">

              <p className="p-0.5 w-72 flex  justify-center gap-4 items-center bg-black rounded-full border  border-teal-400/40 ">

                <span className="border p-1 rounded-2xl bg-white text-black font-semibold ">New</span>Latest integration just
                arrived
              </p>
            </div>
            {/* text */}
            <h2 className="text-white md:text-6xl font-bold text-4xl ">
              Revolutionize Your Workflow with AI
            </h2>
            <p className="max-h-48 opacity-90">
              Experience cutting-edge solutions designed to elevate productivity
              and deliver results like never before.
            </p>

            <div>
              <Link to={'/chat'} className="  px-10 py-2.5 hover:bg-teal-400/20 rounded font-semibold bg-teal-200/20 cursor-pointer ">
                Get Started
              </Link>
            </div>

          </div>

          <section>
            <div className="">
              {/* img */}

              <div className=" flex justify-center ">
                {/* img */}
                <div className="lg:h-60 md:h-40 md:w-42  lg:w-60 bg-white blur-2xl absolute mt-20 "></div>

                <img src="AI Model.png" className="z-40" />
              </div>

            
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Banner;
