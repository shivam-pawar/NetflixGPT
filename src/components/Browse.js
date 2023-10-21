import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LandingScreen from "./LandingScreen";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <LandingScreen />
    </div>
  );
};

export default Browse;
