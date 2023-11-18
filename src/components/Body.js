import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import SearchMovies from "./SearchMovies";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Header";

const Body = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
        { path: "/search", element: <SearchMovies /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default Body;
