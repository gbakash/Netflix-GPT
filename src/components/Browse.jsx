import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import PrimaryContainer from "./PrimaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
