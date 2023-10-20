import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const fullNameRef = useRef(null);
  const [newUser, setNewUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = () => {
    console.log("Email: ", emailRef.current.value);
    console.log("Password: ", passwordRef.current.value);
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
          const user = userCredential.user;
          console.log("User created: ", user);
          updateProfile(auth.currentUser, {
            displayName: fullNameRef.current.value,
            photoURL: "https://avatars.githubusercontent.com/shivam-pawar",
          })
            .then(() => {
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(addUser({ displayName, email, uid, photoURL }));
              navigate("/browse");
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
          const user = userCredential.user;
          console.log("User Logged In: ", user);
          navigate("/browse");
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
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg"
        />
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
