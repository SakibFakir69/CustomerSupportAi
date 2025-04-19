import React from "react";

function Banner() {
  return (
    <div className=" w-full relative">
      <div className="absolute flex justify-end border  right-0">
        <img
          src="Elements.png"
          className="md:max-h-[550px] md:mt-10 sm:max-h-[300px] mt-40"
        />
      </div>

      <section className="p-10 flex justify-center items-center">
        <section className="flex md:flex-row flex-col items-center">
          <div className="flex   justify-start  flex-col ">
            <div>
              <p>
                <button className="btn">New</button>Latest integration just
                arrived
              </p>
            </div>
            {/* text */}
            <h2 className="text-white md:text-6xl font-bold text-4xl ">
              Revolutionize Your Workflow with AI
            </h2>
            <p>
              Experience cutting-edge solutions designed to elevate productivity
              and deliver results like never before.
            </p>

            <div>
              <button className="btn btn-accent px-10 py-2.5">
                Get Started
              </button>
            </div>
          </div>

          <section>
            <div className="border">
              {/* img */}

              <div className="border flex justify-center ">
                {/* img */}
                <div className="lg:h-60 md:h-52 md:w-52  lg:w-60 bg-white blur-2xl absolute mt-20 "></div>

                <img src="AI Model.png" className="z-50" />
              </div>

            
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Banner;
