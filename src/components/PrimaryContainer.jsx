import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-screen h-screen">
      <VideoBackground movieId={id} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 flex flex-col justify-end p-10">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default PrimaryContainer;
