import React from "react";
import { useSelector } from "react-redux";

const PreviewVideoTitle = () => {
  const previewMovie = useSelector((state) => state.movies.previewMovie);
  if (!previewMovie) return;
  return (
    <div className="w-full aspect-video absolute text-white pt-[22%] px-10 bg-gradient-to-r from-black opacity-50">
      <h1 className="font-bold text-6xl">{previewMovie?.original_title}</h1>
      <p className="pt-4 w-2/5">{previewMovie?.overview}</p>
      <div className="w-full flex mt-5">
        <button className="bg-white text-lg text-black rounded-lg  w-32 p-4 my-8 flex flex-row hover:bg-opacity-70">
          <img
            width="45"
            height="45"
            src="https://img.icons8.com/ios-filled/50/play--v1.png"
            alt="play--v1"
            className="pr-4"
          />
          Play
        </button>
        <button className="bg-gray-400 text-lg ml-4 bg-opacity-50 text-white rounded-lg p-4 my-8 flex flex-row hover:bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default PreviewVideoTitle;
