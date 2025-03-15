import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // ✅ Fetch the trailer

  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className="w-screen max-w-full block">
      {trailerVideo ? (
        <iframe
          className="w-screen aspect-video max-w-full block"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p className="text-white text-2xl text-center">
          🚫 No trailer available
        </p>
      )}
    </div>
  );
};

export default VideoBackground;
