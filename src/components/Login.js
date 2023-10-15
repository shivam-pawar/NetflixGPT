import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const handleSubmit = () => {
    console.log("Submitted");
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
        onSubmit={handleSubmit}
      >
        <h1 className="text-white text-3xl my-5">
          Sign {newUser ? "Up" : "In"}
        </h1>
        <input
          className="w-full p-4 my-4 rounded-md bg-[#333333]"
          type="text"
          placeholder="Email or phone number"
        />
        {newUser && (
          <input
            className="w-full p-4 my-4 rounded-md bg-[#333333]"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="w-full p-4 my-4 rounded-md bg-[#333333]"
          type="password"
          placeholder="Password"
        />
        <button className="w-full p-4 my-4 bg-[#E50914] text-white rounded-md">
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
