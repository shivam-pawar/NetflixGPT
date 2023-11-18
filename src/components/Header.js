import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../slices/userSlice";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/appConstants";
import { switchToAskGPT } from "../slices/userSettingsSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const askGPT = useSelector((state) => state.userSettings?.askGPT);
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
      <div className="absolute w-full px-8 py-6 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between">
        <div className="flex justify-center w-full md:justify-start">
          <img className="w-44" src={LOGO} alt="logo" />
        </div>
        {user && (
          <div className="flex w-full mt-4 md:mt-0 justify-end flex-col md:flex-row text-white">
            <div className="px-0 md:px-4 flex">
              <div className="my-auto mx-auto">
                <button
                  onClick={() => {
                    dispatch(switchToAskGPT(!askGPT));
                  }}
                  className="mr-8 mt-1"
                >
                  {askGPT ? (
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/glyph-neue/50/EBEBEB/home--v1.png"
                      alt="home--v1"
                    />
                  ) : (
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/windows/50/EBEBEB/search--v1.png"
                      alt="search--v1"
                      className="ml-3"
                    />
                  )}
                  <span className="-ml-1 text-red-700 font-bold">
                    {!askGPT ? "SUGGEST" : "HOME"}
                  </span>
                </button>
              </div>
              <div className="my-auto">
                <img
                  className="rounded-full"
                  width={70}
                  height={50}
                  src={user?.photoURL}
                />
              </div>

              <p className="text-xl my-auto mx-4 text-center">
                {user?.displayName}
              </p>

              <button
                onClick={handleLogOut}
                className="cursor-pointer px-4 h-10 my-auto font-bold text-red-700 border-2 border-red-700 rounded-full  hover:bg-red-700 hover:text-red-100"
              >
                LOGOUT
              </button>
            </div>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
