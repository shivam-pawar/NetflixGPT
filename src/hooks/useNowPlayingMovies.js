import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPreviewMovie } from "../slices/movieSlice";
import { API_OPTIONS } from "../utils/appConstants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    dispatch(addPreviewMovie(json.results[11]));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
