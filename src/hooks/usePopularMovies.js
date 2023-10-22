import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/appConstants";
import { addPopularMovie } from "../slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
