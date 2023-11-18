import React, { useRef } from "react";
import { API_OPTIONS } from "../utils/appConstants";
import openai from "../utils/openAPI";
import { useDispatch } from "react-redux";
import { addGPTMoviesResult } from "../slices/gptSlice";
import { setShowLoader } from "../slices/userSettingsSlice";

const SearchMovies = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const handleGPTSearch = async () => {
    dispatch(setShowLoader(true));
    console.log("You: ", searchText.current.value);
    const searchQuery =
      "Act as a movie recommender and suggest some movies for the query " +
      searchText.current.value +
      " only give me names of 10 movies, comma separated like the example result given ahead. Example: koi mil gaya,sky,Don";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("GPT: ", chatCompletion.choices?.[0]?.message?.content);
    console.log(searchQuery);
    let gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");
    console.log("gptMovies: ", gptMovies);
    const promiseArray = gptMovies.map((movieName) =>
      searchTMDB(movieName.trim())
    );

    const tmdbResult = await Promise.all(promiseArray);
    dispatch(setShowLoader(false));

    console.log(tmdbResult);
    dispatch(
      addGPTMoviesResult({ movieNames: gptMovies, movieResults: tmdbResult })
    );
  };
  const searchTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };
  return (
    <div className="absolute md:mx-96 right-0 left-0 w-full md:w-3/4 p-12 my-36 md:my-36 flex flex-col md:flex-row">
      <input
        ref={searchText}
        className="p-2 px-4 h-12 w-full md:ml-32 md:w-[50%] rounded-lg"
        type="text"
        placeholder="What's your eyeballs' preference for today's entertainment?"
      />
      <button
        className="bg-red-700 text-lg w-32 mt-5 md:mt-0 ml-24 md:ml-2 text-white rounded-lg px-8 py-2 md:mx-4 flex flex-row hover:bg-red-800"
        onClick={handleGPTSearch}
      >
        Suggest
      </button>
    </div>
  );
};

export default SearchMovies;
