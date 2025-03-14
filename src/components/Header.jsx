import React from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between bg-opacity-80  z-50">
      <img src={logo} alt="logo" className="h-[100px] w-[150px]" />

      {user && (
        <div className="flex items-center gap-4">
          <img
            src="https://img.freepik.com/premium-photo/cat-attitude-modren-way-ai-generative_927089-1790.jpg"
            alt="User Profile"
            className="h-[48px] w-[50px] rounded-full "
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-700"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
