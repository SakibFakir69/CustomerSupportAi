import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import {ToastContainer,toast} from "react-toastify"

function Navbar() {
  const { user, setloading,signOutHandel,signIniWithEmailAndPassword ,signInWithGoole } = UseAuth();
  const location = useLocation();
  const path = location.pathname;
  console.log(path);


  const logOut = ()=>{



    signOutHandel()
    .then((res)=>{

      toast.success("Successfully Log out")

    }).catch(error=>{
      console.log(error);
      toast.error(" Log out failed")
    })
    
  }



  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/chat"}>Chat</NavLink>
      </li>
      <li>
        <NavLink to={'/services'}>Services</NavLink>
      </li>
      <li>
      <NavLink to={'/blog'}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={'/company'}>Company</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <ToastContainer/>
      <div className="navbar  shadow-sm w-full border border-teal-400/20 z-50 fixed backdrop-blur-3xl bg-transparent">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">csAI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end">

          {
            user  ?  (<div>
              <button className="btn btn-primary" onClick={logOut}>Sign out</button>

            </div>) :
            (<div>
              <Link to={'/authentication/signin'} className="btn btn-active">Sign in </Link>

            </div>)
          }


          


        </div>
      </div>
    </div>
  );
}

export default Navbar;
