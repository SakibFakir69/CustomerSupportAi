import React from "react";
import UseAuth from "../hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { setLogLevel } from "firebase/app";
function SignUp() {

  const { signUp, signUpWithGoogle ,setloading} = UseAuth();

  const goHome = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    errors
  } = useForm();


  const onSubmit= (data) =>{
    const {name, email , password }  = data;
    setloading(true);

    signUp(email,password)
    .then((res)=>{
      console.log(res.data);
      setloading(false);
      goHome('/');
    }).catch(err=>{
      console.log(err);
    })


  }
  
  

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen w-full flex flex-col justify-center items-center">

        <div className=" flex justify-center border p-8 m-4 border-white/20 flex-col  items-center">
          <form
            className=" p-2 flex space-y-3 flex-col "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-10 py-2 border rounded border-white/30"
              defaultValue="name" {...register("name",{required:true})}
            />

            <input
              type="email"
              placeholder=" Email"
              className="w-full px-10 py-2 border rounded border-white/30"
              {...register("email", { required: true })}
            />
     

            <input
              type="password"
              placeholder="Password"
              className="w-full px-10 py-2 border rounded border-white/30"
              {...register("password", { required: true })}
            
            />
                {errors && <span className="text-red-500">This field is required</span>}

            <div className="flex justify-center">
              <button className="btn btn-primary px-7 hover:bg-teal-300/20 border-teal-200/10 hover:shadow-2xl hover:shadow-teal-300" type="submit">
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
