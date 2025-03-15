import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId); // ✅ Fetch the trailer

  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div className=" w-full h-full  ">
      {trailerVideo ? (
        <div className="absolute object-cover brightness-50 w-screen h-screen">
          <iframe
            className="w-screen aspect-video "
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
            title="YouTube video player"
            allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      ) : (
        <p className="text-white">No trailer available</p>
      )}
    </div>
  );
};

export default VideoBackground;
