import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // ✅ Fetch trailer

  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className="relative w-screen h-screen">
      {trailerVideo ? (
        <>
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </>
      ) : (
        <p className="text-white text-center">🚫 No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;