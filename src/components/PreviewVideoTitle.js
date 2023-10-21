import React from "react";
import { useSelector } from "react-redux";

const PreviewVideoTitle = () => {
  const previewMovie = useSelector((state) => state.movies.previewMovie);
  if (!previewMovie) return;
  return (
    <div className="w-full aspect-video absolute text-white pt-[35%] px-10 bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{previewMovie?.original_title}</h1>
      <p className="pt-4 w-2/5">{previewMovie?.overview}</p>
    </div>
  );
};

export default PreviewVideoTitle;
