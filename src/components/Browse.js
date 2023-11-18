import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import LandingScreen from "./LandingScreen";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import SearchMoviesContainer from "./SearchMoviesContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const askGPT = useSelector((state) => state.userSettings?.askGPT);
  return <div>{askGPT ? <SearchMoviesContainer /> : <LandingScreen />}</div>;
};

export default Browse;
