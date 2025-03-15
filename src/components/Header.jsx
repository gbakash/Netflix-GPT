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
            photoURL: USER_IMG || DEFAULT_USER_IMG, // ✅ Set default if null
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
    <div className="fixed top-[-10px] left-0 w-full flex items-center justify-between z-50  bg-gradient-to-b from-black/80 to-transparent">
      <img src={logo} alt="logo" className="h-[100px] w-[150px]" />

      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user.photoURL || DEFAULT_USER_IMG} // ✅ Use default if null
            alt="User Profile"
            className="h-[48px] w-[50px] rounded-full"
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
