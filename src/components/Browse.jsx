import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies"; // ✅ Correct import
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies"; // ✅ Correct import

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
