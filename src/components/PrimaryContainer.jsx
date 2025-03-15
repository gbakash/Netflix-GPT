import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const PrimaryContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];
  const { original_title, overview,id } = mainMovie;

  return (
    <div className="-mt-28">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default PrimaryContainer;
