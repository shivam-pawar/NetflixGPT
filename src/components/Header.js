import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen px-8 py-6 bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        className="w-44"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="logo"
      />
      {user && (
        <div className="flex justify-between w-[10%] text-white align-middle text-center">
          <img
            className="rounded-3xl"
            width={50}
            height={50}
            src={user?.photoURL}
          />
          <div className="m-auto px-4">
            <p>{user?.displayName}</p>
          </div>
          <div className="m-auto px-4">
            <p onClick={handleLogOut} className="underline cursor-pointer">
              LOGOUT
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
