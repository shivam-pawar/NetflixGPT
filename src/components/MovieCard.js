import React from "react";
import { IMG_CDN_URL } from "../utils/appConstants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 md:w-52 mr-4">
      <img className="rounded-lg" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
