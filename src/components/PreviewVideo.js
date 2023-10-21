import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/appConstants";

const PreviewVideo = ({ movieId }) => {
  if (!movieId) return;
  const [trailer, setTrailer] = useState(null);
  useEffect(() => {
    fetchPreviewVideo();
  }, []);
  const fetchPreviewVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const mainTrailer = json.results.find((e) => e.type === "Trailer");
    console.log(mainTrailer);
    setTrailer(mainTrailer);
  };

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?showinfo=0&autoplay=1&mute=1&loop=1&controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PreviewVideo;
