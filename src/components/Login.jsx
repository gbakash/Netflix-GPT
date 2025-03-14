import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    const enteredName = name.current ? name.current.value.trim() : "";
    const enteredEmail = email.current.value.trim();
    const enteredPassword = password.current.value;

    // Validate inputs
    const message = checkValidation(
      enteredName,
      enteredEmail,
      enteredPassword,
      isSignIn
    );
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignIn) {
        // Sign-Up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        console.log("✅ User Signed Up:", userCredential.user);

        // Wait for user authentication to update
        await updateProfile(userCredential.user, {
          displayName: enteredName, // Set user’s name
          photoURL:
            "https://www.belloflostsouls.net/wp-content/uploads/2023/09/luffy-anime.png", // Default profile image
        });

        // Fetch updated user details
        const user = auth.currentUser; // Get latest authenticated user
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL, // ✅ Correctly assigned
          })
        );

        console.log("✅ Profile Updated:", user.displayName);
        navigate("/browse");
      } else {
        // Sign-In logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          enteredEmail,
          enteredPassword
        );
        console.log("✅ User Signed In:", userCredential.user);
        navigate("/browse");
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
      {/* Fixed Header */}
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_auto_scroll/IN-en-20250303-TRIFECTA-5a51a3d1-4e37-441d-bc08-3597ab68c7b1_large.jpg"
        alt="background"
      />

      {/* Login Form */}
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

        {errorMessage && (
          <p className="text-red-700 text-md font-bold mt-2">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="p-3 mt-4 w-72 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold"
        >
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
