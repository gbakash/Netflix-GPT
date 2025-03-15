import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  console.log("Movies List:", movies); // Debugging

  if (!movies || movies.length === 0) {
    return (
      <div>
        <h1>{title}</h1>
        <p>No movies available</p>
      </div>
    );
  }

  return (
    <div className="p-2 ">
      <h1 className="text-2xl py-2 font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
