import React from "react";
import SearchMovies from "./SearchMovies";
import { BG_IMG } from "../utils/appConstants";
import SuggestedMovies from "./SuggestedMovies";

const SearchMoviesContainer = () => {
  return (
    <div>
      <div className="fixed bg-black opacity-70">
        <img className="h-full object-cover" src={BG_IMG} />
      </div>
      <SearchMovies />
      <SuggestedMovies />
    </div>
  );
};

export default SearchMoviesContainer;
