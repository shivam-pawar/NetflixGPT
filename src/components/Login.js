import React, { useRef, useState } from "react";
import { validateData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";
import { BG_IMG, DEFAULT_AVATAR } from "../utils/appConstants";

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const [newUser, setNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = () => {
    const validationMessage = validateData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setErrorMessage(validationMessage);
    if (validationMessage) return;
    if (newUser) {
      // Sign-Up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: fullNameRef.current.value,
            photoURL: DEFAULT_AVATAR,
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(addUser({ displayName, email, uid, photoURL }));
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign-In
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  const handleNewUser = () => {
    newUser ? setNewUser(false) : setNewUser(true);
  };
  return (
    <div>
      <div className="absolute">
        <img src={BG_IMG} alt="bg" />
      </div>
      <form
        className="absolute mx-auto right-0 left-0 w-3/12 p-12 my-36 bg-black bg-opacity-80 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl my-5">
          Sign {newUser ? "Up" : "In"}
        </h1>
        <input
          ref={emailRef}
          className="w-full p-4 my-4 rounded-md bg-[#333333]"
          type="text"
          placeholder="Email or phone number"
        />
        {newUser && (
          <input
            ref={fullNameRef}
            className="w-full p-4 my-4 rounded-md bg-[#333333]"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={passwordRef}
          className="w-full p-4 my-4 rounded-md bg-[#333333]"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-600 font-medium">{errorMessage}</p>
        <button
          type="button"
          className="w-full p-4 my-4 bg-[#E50914] text-white rounded-md"
          onClick={handleSubmit}
        >
          Sign {newUser ? "Up" : "In"}
        </button>
        <p className="text-gray-500">
          {newUser ? "Already registered? " : "New to Netflix? "}
          <span onClick={handleNewUser} className="text-white cursor-pointer">
            Sign {newUser ? "in" : "up"} now
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
