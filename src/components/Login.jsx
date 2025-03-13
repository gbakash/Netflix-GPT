import React, { useRef, useState } from "react";
import Header from "./Header";
import logo from "../assets/logo.png";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    const enteredName = name.current ? name.current.value.trim() : "";
    const enteredEmail = email.current.value.trim();
    const enteredPassword = password.current.value;

    console.log("Entered Name:", enteredName);
    console.log("Entered Email:", enteredEmail);
    console.log("Entered Password:", enteredPassword);

    // Validate inputs
    const message = checkValidation(enteredName, enteredEmail, enteredPassword, isSignIn);
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignIn) {
        // Sign-Up logic
        const userCredential = await createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
        console.log("✅ User Signed Up:", userCredential.user);
      } else {
        // Sign-In logic
        const userCredential = await signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
        console.log("✅ User Signed In:", userCredential.user);
      }
    } catch (error) {
      console.error("❌ Firebase Auth Error:", error);
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(null); // Reset error message when toggling form
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <Header />
      <div className="absolute top-0 left-2 z-10">
        <img src={logo} alt="logo" className="h-[100px] w-[150px]" />
      </div>

      <form
        onSubmit={handleButtonClick}
        className="absolute z-10 flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg text-white shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-72 rounded-md bg-gray-700 text-white outline-none"
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 w-72 rounded-md bg-gray-700 text-white outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-2 w-72 rounded-md bg-gray-700 text-white outline-none"
        />

        {errorMessage && <p className="text-red-700 text-md font-bold">{errorMessage}</p>}

        <button className="p-3 mt-4 w-72 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;