import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null; // Prevent rendering if posterPath is missing

  return (
    <div className="w-40 pr-2">
      <img
        className="w-40 h-52"
        src={IMG_CDN_URL + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
