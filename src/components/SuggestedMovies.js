import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Loader from "./Loader";

const SuggestedMovies = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);
  const showLoader = useSelector((state) => state.userSettings.showLoader);
  if (showLoader) return <Loader />;
  if (!movieNames) return null;
  return (
    <div className="absolute m-3 bg-black text-white mx-9 md:mx-32 right-0 left-0 w-[85%] p-2 md:p-12 my-80 md:my-64 bg-opacity-80">
      <div className="flex-wrap">
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index].results}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedMovies;
