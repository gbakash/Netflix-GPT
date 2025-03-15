import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { DEFAULT_USER_IMG, USER_IMG } from "../utils/constant";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL: USER_IMG || DEFAULT_USER_IMG,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between bg-transparent z-50 p-1">
      <img src={logo} alt="logo" className="h-[80px] w-[140px]" />

      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user.photoURL || DEFAULT_USER_IMG}
            alt="User Profile"
            className="h-[40px] w-[40px] rounded-full"
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
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