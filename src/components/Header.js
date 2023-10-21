import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../slices/userSlice";
import { Outlet, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/appConstants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = auth.currentUser;
        dispatch(addUser({ displayName, email, uid, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  return (
    <div>
      <div className="absolute w-screen px-8 py-6 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex justify-end text-white align-middle text-center">
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
      <Outlet />
    </div>
  );
};

export default Header;
