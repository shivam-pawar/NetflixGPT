import React from "react";
import PreviewVideoTitle from "./PreviewVideoTitle";
import PreviewVideo from "./PreviewVideo";
import { useSelector } from "react-redux";
import MoviesListContainer from "./MoviesListContainer";

const LandingScreen = () => {
  const movieId = useSelector((state) => state.movies?.previewMovie);
  if (!movieId) return;
  return (
    <div>
      <PreviewVideoTitle />
      <PreviewVideo movieId={movieId?.id} />
      <MoviesListContainer />
    </div>
  );
};

export default LandingScreen;
