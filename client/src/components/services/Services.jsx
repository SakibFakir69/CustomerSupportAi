import React from "react";
import Lottie from "react-lottie";
import img from "/pexels-tima-miroshnichenko-5453818.jpg";
import animationData from "../../../public/Animation - 1745584470250.json";
import animationData2 from "../../../public/Animation - 1745585202314.json";

function Services() {
  // left right who service we provide

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
  };

  return (
    <div className="py-20 min-h-screen p-6   mx-auto ">
      <section className="py-7 flex justify-center flex-col">
        <div className="flex   p-2 gap-4 md:flex-row flex-col md:ml-16">
          <div className="flex flex-1 md:mb-0 mb-10 justify-center items-center">
            <h2 className="md:text-6xl font-semibold text-4xl">
              Customer Support with AI 🤖
            </h2>

            <p></p>
          </div>

          <div className="flex flex-1  justify-end">
            <Lottie options={defaultOptions} />
          </div>
        </div>
        {/* why */}

        <div className="mt-6 flex md:flex-row flex-col">
          <div className="flex flex-1">
            <Lottie options={defaultOptions2} />
          </div>

          <div className="flex flex-1 flex-col justify-center items-center gap-5">
            <h2 className="md:text-6xl font-semibold text-4xl mb-5">
              💬 Why Use This Support?
            </h2>
            <p>
              You can ask questions in Bangla or English, anytime. Our smart
              support will give you quick and clear answers. No waiting, no
              phone calls—just ask and get help.
            </p>
          </div>
          {/* animation */}
        </div>
      </section>
    </div>
  );
}

export default Services;
