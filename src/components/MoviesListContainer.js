import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesListContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-72 pl-0 md:pl-4 z-10 relative">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default MoviesListContainer;
