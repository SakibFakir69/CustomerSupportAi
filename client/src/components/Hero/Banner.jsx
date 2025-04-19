import React from "react";

function Banner() {
  return (
    <div className=" w-full relative">

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
                <div className="lg:h-60 md:h-40 md:w-42  lg:w-60 bg-white blur-2xl absolute mt-20 "></div>

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
