import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LandingScreen from "./LandingScreen";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <LandingScreen />
    </div>
  );
};

export default Browse;
