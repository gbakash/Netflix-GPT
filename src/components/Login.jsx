import React from "react";
import Header from "./Header";
import logo from "../assets/logo.png";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div className="relative flex items-center justify-center h-screen">
      <Header />
      <div className="absolute top-0 left-2 z-10">
        <img src={logo} alt="logo" className="h-[100px] w-[150px]" />
      </div>

      <form className="absolute z-10 flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <div>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 m-2 w-72 rounded-md bg-gray-700 text-white outline-none"
            />
          )}
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 w-72 rounded-md bg-gray-700 text-white outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-72 rounded-md bg-gray-700 text-white outline-none"
        />
        <button className="p-3 mt-4 w-72 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;


