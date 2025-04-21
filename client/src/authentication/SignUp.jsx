import React from "react";
import UseAuth from "../hooks/UseAuth";
import { Link } from "react-router-dom";

function SignUp() {
  const { signUp, signUpWithGoogle } = UseAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen w-full flex flex-col justify-center items-center">

        <div className="w-1/2 flex justify-center border p-8 m-4 border-white/20 flex-col  items-center">
          <form
            className=" w-4/5 p-2 flex space-y-3 flex-col "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-10 py-2 border rounded border-white/30"
            />

            <input
              type="email"
              placeholder=" Email"
              className="w-full px-10 py-2 border rounded border-white/30"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-10 py-2 border rounded border-white/30"
              border
              rounded
            />

            <div className="flex justify-center">
              <button className="btn btn-primary px-7 hover:bg-teal-300/20 border-teal-200/10 hover:shadow-2xl hover:shadow-teal-300">
                Sign up
              </button>
            </div>
          </form>

          {/* or */}
         <section className="flex justify-center flex-col w-full gap-y-2">


         <p className="text-center">or</p>

          <div className="flex justify-center">
            <button className="btn  flex justify-center items-center">Sign in with google</button>
          </div>

          <div className="flex justify-center">
            <p>You have already account <Link className="text-green-400">Sign in</Link> </p>
          </div>

         </section>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
